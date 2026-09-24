import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealTextProps {
  /** Words wrapped in *asterisks* render in the italic serif. Use \n for a hard line break. */
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  className?: string;
  delay?: number;
  stagger?: number;
}

/** Headline that slides up word-by-word from behind a mask when it enters the viewport. */
export function RevealText({ text, as = 'h2', className = '', delay = 0, stagger = 0.05 }: RevealTextProps) {
  const Tag = as as 'h2';
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px' });

  let accent = false;
  let wordIndex = 0;
  const lines = text.split('\n').map((line) =>
    line.split(' ').map((raw) => {
      if (raw.startsWith('*')) accent = true;
      const word = raw.replace(/\*/g, '');
      const isAccent = accent;
      if (raw.endsWith('*')) accent = false;
      return { word, isAccent, index: wordIndex++ };
    }),
  );

  return (
    <Tag ref={ref} className={className}>
      <span className="sr-only">{text.replace(/\*/g, '').replace(/\n/g, ' ')}</span>
      {lines.map((words, li) => (
        <span key={li} aria-hidden className="block">
          {words.map(({ word, isAccent, index }) => (
            <span key={index} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em] mr-[0.22em] last:mr-0">
              <motion.span
                className={`inline-block will-change-transform ${isAccent ? 'serif-accent text-accent pr-[0.06em]' : ''}`}
                initial={{ y: '110%' }}
                animate={inView ? { y: '0%' } : undefined}
                transition={{ duration: 0.9, delay: delay + index * stagger, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
}
