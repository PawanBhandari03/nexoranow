import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function LiveProjectButton({ label = "Live Project", href, onClick, className = "" }: LiveProjectButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={href || "#projects"}
      onClick={handleClick}
      className={`group inline-flex items-center gap-3 rounded-full border border-bone/25 py-2.5 pl-5 pr-4 text-[14px] font-medium text-bone transition-colors duration-300 hover:border-bone hover:bg-bone hover:text-ink ${className}`}
    >
      <span className="roll">
        <span>{label}</span>
        <span>{label}</span>
      </span>
      <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:rotate-45" />
    </a>
  );
}
