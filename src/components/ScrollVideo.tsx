import { useEffect, useRef, useState } from 'react';

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260729_102822_0e6c87e8-c141-4744-bf32-ad30db296371.mp4';
const POSTER_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260729_102822_0e6c87e8-c141-4744-bf32-ad30db296371-poster.jpg'; // Using a placeholder for poster since it wasn't strictly provided, or I can just use the video itself. The prompt said: Optional local mirrors: /hero-poster.jpg. I'll just skip the poster src and let the video load, or use an empty string. I'll omit the `src` on the img if it fails. Actually, I'll use the video's first frame.

export function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const posterRef = useRef<HTMLImageElement>(null);
  
  const [framesReady, setFramesReady] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const framesRef = useRef<ImageBitmap[]>([]);
  const scrollRef = useRef({ target: 0, current: 0 });
  const reqRef = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setVideoLoaded(true);
      
      // Start frame extraction after 300ms yield
      setTimeout(() => {
        extractFrames(video);
      }, 300);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    return () => video.removeEventListener('loadeddata', handleLoadedData);
  }, []);

  const extractFrames = async (sourceVideo: HTMLVideoElement) => {
    if (framesRef.current.length > 0) return; // Already extracted
    
    const duration = sourceVideo.duration;
    if (!duration || isNaN(duration)) return;

    const frameCount = Math.min(90, Math.max(24, Math.floor(duration * 12)));
    const offscreenVideo = document.createElement('video');
    offscreenVideo.src = VIDEO_URL;
    offscreenVideo.crossOrigin = 'anonymous';
    offscreenVideo.muted = true;
    offscreenVideo.playsInline = true;
    
    await new Promise((resolve) => {
      offscreenVideo.addEventListener('loadeddata', resolve, { once: true });
    });

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Max width 960px
    const scale = Math.min(1, 960 / offscreenVideo.videoWidth);
    canvas.width = offscreenVideo.videoWidth * scale;
    canvas.height = offscreenVideo.videoHeight * scale;

    const frames: ImageBitmap[] = [];
    
    for (let i = 0; i < frameCount; i++) {
      const time = (i / (frameCount - 1)) * duration;
      offscreenVideo.currentTime = time;
      
      await new Promise<void>((resolve) => {
        const onSeeked = async () => {
          ctx.drawImage(offscreenVideo, 0, 0, canvas.width, canvas.height);
          const bitmap = await createImageBitmap(canvas);
          frames.push(bitmap);
          offscreenVideo.removeEventListener('seeked', onSeeked);
          resolve();
        };
        offscreenVideo.addEventListener('seeked', onSeeked);
      });
    }
    
    framesRef.current = frames;
    setFramesReady(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Scrub over the first 300vh (Hero + Spacer + Capability)
      const scrubHeight = window.innerHeight * 2.5; 
      let progress = window.scrollY / scrubHeight;
      progress = Math.max(0, Math.min(1, progress));
      scrollRef.current.target = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    const video = videoRef.current;

    const render = () => {
      scrollRef.current.current += (scrollRef.current.target - scrollRef.current.current) * 0.12;
      const smoothed = scrollRef.current.current;

      if (framesReady && canvas && ctx && framesRef.current.length > 0) {
        // Draw canvas
        const frames = framesRef.current;
        const frameIndex = Math.min(
          frames.length - 1,
          Math.max(0, Math.floor(smoothed * frames.length))
        );
        const frame = frames[frameIndex];

        // Object cover math
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        
        const scale = Math.max(canvas.width / frame.width, canvas.height / frame.height);
        const x = (canvas.width / 2) - (frame.width / 2) * scale;
        const y = (canvas.height / 2) - (frame.height / 2) * scale;
        
        ctx.drawImage(frame, x, y, frame.width * scale, frame.height * scale);
      } else if (video && videoLoaded) {
        // Fallback video seek
        const duration = video.duration || 1;
        const targetTime = smoothed * (duration - 0.05);
        if (Math.abs(video.currentTime - targetTime) > 0.04) {
          video.currentTime = targetTime;
        }
      }

      reqRef.current = requestAnimationFrame(render);
    };

    reqRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(reqRef.current);
  }, [framesReady, videoLoaded]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 bg-[#0a0a0a] overflow-hidden pointer-events-none">
      <img 
        ref={posterRef}
        src="/hero-poster.jpg"
        alt=""
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          videoLoaded || framesReady ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          framesReady ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          framesReady ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
