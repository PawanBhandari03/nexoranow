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
      className={`inline-block rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-all hover:bg-[#D7E2EA] hover:text-[#0C0C0C] hover:scale-105 active:scale-95 cursor-pointer ${className}`}
    >
      {label}
    </a>
  );
}
