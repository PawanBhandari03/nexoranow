import { useEffect, useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { ContactButton } from '../components/ContactButton';
import { RevealText } from '../components/RevealText';
import { FadeIn } from '../components/FadeIn';

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

const WORDMARK = 'nexoranow'.split('');
const ease = [0.16, 1, 0.3, 1] as const;

function useIndiaTime() {
  const format = () =>
    new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date());
  const [time, setTime] = useState(format);
  useEffect(() => {
    const id = setInterval(() => setTime(format()), 15_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const time = useIndiaTime();

  // Soft light that trails the cursor
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, rgb(255 91 31 / 0.10), transparent 70%)`;

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
      }}
      className="relative flex min-h-[100svh] flex-col overflow-hidden px-5 pt-28 sm:px-8 sm:pt-32"
    >
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />

      <motion.div style={{ y: contentY, opacity: fade }} className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col">
        {/* Meta row */}
        <FadeIn y={0} delay={0.1} className="grid grid-cols-2 gap-4 border-t border-line pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-mute md:grid-cols-4">
          <span>AI automation &amp; software studio</span>
          <span className="hidden md:block">Founded by Rahul &amp; Pawan</span>
          <span className="hidden md:block">Working worldwide</span>
          <span className="text-right">
            India <span className="text-bone">{time}</span> IST
          </span>
        </FadeIn>

        <RevealText
          as="h1"
          text={'Software & AI automation,\nbuilt *properly.*'}
          delay={0.25}
          stagger={0.06}
          className="mt-10 text-[clamp(2.6rem,6.4vw,7rem)] font-medium leading-[0.95] tracking-[-0.045em] text-bone sm:mt-14"
        />

        <div className="mt-10 grid grid-cols-1 items-end gap-8 md:grid-cols-12 sm:mt-12">
          <FadeIn delay={0.7} y={20} className="md:col-span-5 md:col-start-1">
            <p className="max-w-[440px] text-[16px] leading-relaxed text-bone/70 sm:text-[17px]">
              We design and build websites, custom software and AI agents for startups and growing businesses — the kind of
              work that quietly saves your team hours every week.
            </p>
          </FadeIn>
          <FadeIn delay={0.85} y={20} className="flex flex-wrap items-center gap-5 md:col-span-7 md:justify-end">
            <ContactButton label="Book a free consultation" onClick={onOpenConsultation} />
            <a href="#projects" className="group flex items-center gap-2 text-[15px] text-bone/80 transition-colors hover:text-bone">
              <span className="link-line">See our work</span>
              <ArrowDown size={16} className="transition-transform duration-500 group-hover:translate-y-1" />
            </a>
          </FadeIn>
        </div>
      </motion.div>

      {/* Giant wordmark */}
      <motion.div style={{ y: wordmarkY }} className="relative z-0 mx-auto mt-10 w-full max-w-[1400px] select-none sm:mt-14" aria-hidden>
        <div className="flex justify-between text-[19vw] font-semibold leading-[0.78] tracking-[-0.07em] text-bone min-[1474px]:text-[276px]">
          {WORDMARK.map((ch, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.04em]">
              <motion.span
                className={`inline-block ${i >= 6 ? 'text-accent' : ''}`}
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1.2, delay: 0.35 + i * 0.045, ease }}
              >
                {ch}
              </motion.span>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
