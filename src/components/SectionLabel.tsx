import type { ReactNode } from 'react';

interface SectionLabelProps {
  index: string;
  children: ReactNode;
  className?: string;
}

export function SectionLabel({ index, children, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-mute ${className}`}>
      <span className="text-accent">({index})</span>
      <span>{children}</span>
      <span className="h-px w-10 bg-line" />
    </div>
  );
}
