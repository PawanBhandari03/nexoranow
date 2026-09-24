import Lenis from 'lenis';
import { useEffect } from 'react';

let lenis: Lenis | null = null;

export function getLenis() {
  return lenis;
}

/** Mounts Lenis once for the whole page. Skipped for users who prefer reduced motion. */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: { offset: -80 },
    });

    let frame = requestAnimationFrame(function raf(time) {
      lenis?.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = null;
    };
  }, []);
}

/** Smoothly scroll to an element id, falling back to native scrolling. */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -80 });
  else el.scrollIntoView({ behavior: 'smooth' });
}

/** Freeze page scroll while an overlay (modal, menu) is open. */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    lenis?.stop();
    document.body.style.overflow = 'hidden';
    return () => {
      lenis?.start();
      document.body.style.overflow = '';
    };
  }, [locked]);
}
