import type { ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { scrollToId } from '../lib/smoothScroll';

interface ContactButtonProps {
  label?: string | ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ContactButton({ label = "Book a Free Consultation", onClick, className = "" }: ContactButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();
    else scrollToId('contact');
  };

  // Subtle magnetic pull toward the cursor
  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.97 }}
      className={`group relative inline-flex items-center justify-between gap-4 rounded-full bg-accent pl-6 pr-2 py-2 text-ink transition-colors duration-300 hover:bg-bone ${className}`}
    >
      <span className="roll text-[15px] font-medium tracking-[-0.01em] whitespace-nowrap">
        <span>{label}</span>
        <span>{label}</span>
      </span>
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-ink text-bone">
        <ArrowUpRight size={18} className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-5 group-hover:-translate-y-5" />
        <ArrowUpRight size={18} className="absolute -translate-x-5 translate-y-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </motion.button>
  );
}
