import { ReactNode } from 'react';

interface ContactButtonProps {
  label?: string | ReactNode;
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
<<<<<<< HEAD
      onClick={handleClick}
      className={`relative rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white outline-2 outline-white outline-offset-[-3px] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
      }}
=======
      onClick={onClick}
      className={`group relative transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${className}`}
>>>>>>> a110f8f7c9fcf9ed938514f38c650aa3a704c7c7
    >
      {/* Top Left Bracket */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#B600A8] group-hover:w-full group-hover:h-full group-hover:border-[#B600A8]/50 transition-all duration-500 z-20 pointer-events-none" />
      
      {/* Bottom Right Bracket */}
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00D4FF] group-hover:w-full group-hover:h-full group-hover:border-[#00D4FF]/50 transition-all duration-500 z-20 pointer-events-none" />

      {/* Inner Button Content */}
      <div className="relative h-full w-full bg-[#0A0A0D]/80 backdrop-blur-md px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 flex items-center justify-center overflow-hidden transition-colors duration-500 group-hover:bg-[#0A0A0D]/60 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B600A8]/0 via-[#7621B0]/10 to-[#00D4FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative z-10 text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.15em] text-white whitespace-nowrap">{label}</span>
      </div>
    </button>
  );
}
