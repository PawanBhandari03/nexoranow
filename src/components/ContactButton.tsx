interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
}

export function ContactButton({ label = "Book a Free Consultation", onClick, className = "" }: ContactButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white outline-2 outline-white outline-offset-[-3px] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
      }}
    >
      {label}
    </button>
  );
}
