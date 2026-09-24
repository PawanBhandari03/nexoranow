import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useScrollLock } from '../lib/smoothScroll';
import { CONTACT_EMAIL } from '../lib/inquiry';

interface NavbarProps {
  onOpenConsultation?: () => void;
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onOpenConsultation }: NavbarProps) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useScrollLock(menuOpen);

  // Tuck the bar away while reading down, bring it back on any scroll up
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > 400 && y > prev + 2);
    if (y < prev - 2) setHidden(false);
  });

  // Highlight the link for whichever section is in the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !menuOpen ? '-110%' : '0%' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 z-[60] w-full px-4 pt-4 sm:px-6"
      >
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between rounded-full border py-2 pl-5 pr-2 transition-[background-color,border-color,backdrop-filter] duration-500 ${
            scrolled || menuOpen ? 'border-line bg-ink/75 backdrop-blur-xl' : 'border-transparent bg-transparent'
          }`}
        >
          {/* Wordmark */}
          <a href="#" onClick={() => setMenuOpen(false)} className="group flex items-baseline gap-[2px] text-[19px] font-semibold tracking-[-0.04em] text-bone">
            nexora<span className="serif-accent text-[21px] font-normal text-accent transition-transform duration-500 group-hover:-rotate-6">now</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative flex items-center gap-2 rounded-full px-3.5 py-2 text-[14px] transition-colors duration-300 ${
                  active === link.href ? 'text-bone' : 'text-bone/60 hover:text-bone'
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full bg-accent transition-all duration-500 ${
                    active === link.href ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                />
                <span className="roll">
                  <span>{link.label}</span>
                  <span>{link.label}</span>
                </span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="group hidden items-center gap-2 rounded-full bg-bone py-2.5 pl-4 pr-3 text-[14px] font-medium text-ink transition-colors duration-300 hover:bg-accent sm:flex"
            >
              <span className="roll">
                <span>Book a call</span>
                <span>Book a call</span>
              </span>
              <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:rotate-45" />
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="flex h-10 items-center gap-2.5 rounded-full border border-line px-4 text-[13px] text-bone md:hidden"
            >
              <span>{menuOpen ? 'Close' : 'Menu'}</span>
              <span className="relative block h-2.5 w-4">
                <span className={`absolute left-0 h-px w-full bg-bone transition-all duration-500 ${menuOpen ? 'top-1/2 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 h-px w-full bg-bone transition-all duration-500 ${menuOpen ? 'top-1/2 -rotate-45' : 'top-full'}`} />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[55] flex flex-col justify-between bg-ink px-6 pb-10 pt-28 md:hidden"
          >
            <nav className="flex flex-col">
              {navLinks.map((link, i) => (
                <div key={link.href} className="overflow-hidden border-b border-line">
                  <motion.a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.7, delay: 0.25 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-baseline justify-between py-3 text-[44px] font-medium leading-none tracking-[-0.04em] text-bone"
                  >
                    {link.label}
                    <span className="font-mono text-[11px] tracking-normal text-mute">0{i + 1}</span>
                  </motion.a>
                </div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenConsultation?.();
                }}
                className="flex items-center justify-between rounded-full bg-accent py-4 pl-6 pr-5 text-[16px] font-medium text-ink"
              >
                Book a free consultation <ArrowUpRight size={18} />
              </button>
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-mono text-[12px] text-mute">
                {CONTACT_EMAIL}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
