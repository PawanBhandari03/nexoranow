import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Sparkles, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const isOpen = isExpanded || isHovered || (!isScrolled && true);

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 flex justify-center pointer-events-none">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        layout
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
          mass: 0.8,
        }}
        className="pointer-events-auto relative bg-[#070709]/90 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(182,0,168,0.15)] rounded-full text-white overflow-hidden transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(182,0,168,0.25)]"
      >
        <div className="flex items-center justify-between px-4 py-2 sm:px-6 sm:py-2.5 gap-4 sm:gap-6 min-h-[48px]">
          
          {/* Left: Clean Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#B600A8] via-[#7621B0] to-[#BE4C00] flex items-center justify-center font-black text-white text-xs shadow-[0_0_12px_rgba(182,0,168,0.6)] group-hover:scale-105 transition-transform">
              N
            </div>
            <span className="font-black text-sm sm:text-base uppercase tracking-tight text-white group-hover:text-[#D7E2EA] transition-colors leading-none">
              Nexora<span className="text-[#B600A8]">Now</span>
            </span>
          </a>

          {/* Center: Dynamic Island Nav Links */}
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="hidden md:flex items-center gap-5 lg:gap-7 px-2"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[#D7E2EA]/90 hover:text-white font-medium uppercase tracking-wider text-xs transition-colors relative group py-1 whitespace-nowrap"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#B600A8] to-[#BE4C00] group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right: Dynamic CTA Button & Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {!isOpen && (
              <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10px] uppercase font-semibold text-gray-300 border border-white/10">
                <Sparkles size={10} className="text-[#B600A8]" /> AI Agency
              </span>
            )}

            <button
              onClick={onOpenConsultation}
              className="relative rounded-full px-4 py-2 sm:px-5 sm:py-2 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1.5 shadow-md cursor-pointer whitespace-nowrap"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                border: '1px solid rgba(215, 226, 234, 0.3)',
              }}
            >
              <span>Book Call</span>
              <ArrowUpRight size={13} />
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:hidden p-2 text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Toggle Dynamic Island"
            >
              {isExpanded ? <X size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Sub-Island */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10 px-6 py-4 bg-[#0A0A0D]/95 flex flex-col gap-3"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsExpanded(false)}
                  className="text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-[#B600A8] transition-colors py-1.5 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 flex justify-between items-center text-xs text-gray-400">
                <span className="text-[#B600A8] font-semibold">NexoraNow</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
