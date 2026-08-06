import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Sparkles, ChevronDown, Radio } from 'lucide-react';

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
        className="pointer-events-auto relative rounded-[32px] p-[1px] group/nav overflow-visible transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(182,0,168,0.25)] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      >
        {/* Navbar Gradient Border */}
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#00D4FF] opacity-40 group-hover/nav:opacity-80 transition-opacity duration-500 shadow-[0_0_15px_rgba(182,0,168,0.2)]" />
        
        {/* Navbar Inner Content Container */}
        <div className="relative z-10 bg-[#0A0A0D]/85 backdrop-blur-2xl rounded-[32px] overflow-hidden flex flex-col text-white">
          <div className="flex items-center justify-between px-4 py-2 sm:px-6 sm:py-2.5 gap-4 sm:gap-6 min-h-[48px]">
            
            {/* Left: Dynamic Brand & Sensor Dot */}
            <a href="#" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#B600A8] via-[#7621B0] to-[#00D4FF] flex items-center justify-center font-black text-white text-xs shadow-[0_0_12px_rgba(182,0,168,0.6)] group-hover:scale-105 transition-transform">
                  N
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#00D4FF] border-2 border-[#070709] rounded-full animate-pulse shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
              </div>

              <div className="flex flex-col">
                <span className="font-black text-sm sm:text-base uppercase tracking-tight text-white group-hover:text-[#D7E2EA] transition-colors leading-none">
                  Nexora<span className="text-[#B600A8]">Now</span>
                </span>
                <span className="hidden sm:flex items-center gap-1 text-[9px] font-medium tracking-wider uppercase text-[#00D4FF]/90 leading-tight">
                  <Radio size={8} className="animate-spin" /> Available Q3
                </span>
              </div>
            </a>

            {/* Center: Nav Links (1 Line) */}
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
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#00D4FF] group-hover:w-full transition-all duration-300" />
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Right: CTA & Mobile Drawer Toggle */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {!isOpen && (
                <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[10px] uppercase font-semibold text-gray-300 border border-white/10">
                  <Sparkles size={10} className="text-[#B600A8]" /> AI Agency
                </span>
              )}

              {/* Restyled Book Call Button (HUD Style) */}
              <button
                onClick={onOpenConsultation}
                className="group/btn relative transition-all duration-300 hover:scale-105 active:scale-95 flex items-center cursor-pointer"
              >
                {/* HUD Brackets */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#B600A8] group-hover/btn:w-full group-hover/btn:h-full group-hover/btn:border-[#B600A8]/50 transition-all duration-500 z-20 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#00D4FF] group-hover/btn:w-full group-hover/btn:h-full group-hover/btn:border-[#00D4FF]/50 transition-all duration-500 z-20 pointer-events-none" />

                <div className="relative h-full w-full bg-[#0A0A0D]/90 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2 flex items-center gap-1.5 transition-colors duration-500 group-hover/btn:bg-[#0A0A0D]/70 shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B600A8]/0 via-[#7621B0]/10 to-[#00D4FF]/0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-white whitespace-nowrap">Book Call</span>
                  <ArrowUpRight size={13} className="text-white relative z-10" />
                </div>
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
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-ping" /> Live Status: Online
                  </span>
                  <span className="text-[#B600A8] font-semibold">NexoraNow</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </header>
  );
}
