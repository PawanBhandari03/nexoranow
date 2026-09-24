import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '../components/FadeIn';
import { SectionLabel } from '../components/SectionLabel';

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow',
    content: 'NexoraNow completely transformed our digital infrastructure. Their expertise in both AI and web development is unmatched.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, GrowthMetrics',
    content: 'Working with Rahul & Pawan was a game-changer. They delivered a complex scalable solution weeks ahead of schedule.',
  },
  {
    name: 'Emily Davis',
    role: 'Operations Director, NexaCorp',
    content: 'The business automation tools they built for us saved hundreds of hours of manual work every month. Highly recommended.',
  }
];

const ROTATE_MS = 8000;

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % TESTIMONIALS.length), ROTATE_MS);
    return () => clearTimeout(id);
  }, [active, paused]);

  const current = TESTIMONIALS[active];

  return (
    <section id="testimonials" className="border-t border-line px-5 py-28 sm:px-8 sm:py-36">
      <div
        className="mx-auto max-w-[1400px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <FadeIn y={10}>
          <SectionLabel index="04">Client words</SectionLabel>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-9 min-h-[260px] sm:min-h-[300px]">
            <span className="serif-accent block h-[48px] text-[110px] leading-[0.9] text-accent" aria-hidden>“</span>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="mt-2 text-[clamp(1.7rem,3.6vw,3.4rem)] font-normal leading-[1.12] tracking-[-0.035em] text-bone"
              >
                {current.content}
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>

        {/* Author selector */}
        <div className="mt-14 grid grid-cols-1 border-t border-line sm:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setActive(i)}
              className="group relative flex flex-col items-start gap-1 border-b border-line py-5 text-left sm:border-b-0 sm:pr-6"
            >
              {/* progress bar */}
              <span className="absolute left-0 top-[-1px] h-px w-full overflow-hidden">
                {i === active && (
                  <motion.span
                    key={`${active}-${paused}`}
                    className="block h-full bg-accent"
                    initial={{ width: paused ? '100%' : '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: paused ? 0 : ROTATE_MS / 1000, ease: 'linear' }}
                  />
                )}
              </span>
              <span className={`text-[16px] font-medium transition-colors duration-300 ${i === active ? 'text-bone' : 'text-bone/40 group-hover:text-bone/70'}`}>
                {t.name}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-mute">{t.role}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
