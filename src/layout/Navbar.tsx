import { Hexagon } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const LINKS = [
  { label: 'Projects', href: '#portfolio', count: '6' },
  { label: 'About', href: '#about' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/15">
      <div className="px-5 sm:px-8 md:px-12 flex h-16 sm:h-20 items-center justify-between">
        
        {/* Logo */}
        <Reveal delay={0}>
          <a href="#" className="flex items-center gap-2">
            <Hexagon size={24} strokeWidth={1.5} className="text-white" />
            <span className="text-lg sm:text-xl font-medium tracking-tight text-white">
              nexoranow
            </span>
          </a>
        </Reveal>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {LINKS.map((link, i) => (
            <Reveal key={link.label} delay={100 + i * 100}>
              <a 
                href={link.href} 
                className="text-sm text-white/85 hover:text-white transition-colors duration-300 relative"
              >
                {link.label}
                {link.count && (
                  <sup className="font-mono text-[10px] text-white/60 ml-1">
                    {link.count}
                  </sup>
                )}
              </a>
            </Reveal>
          ))}
        </nav>

        {/* CTA */}
        <Reveal delay={500}>
          <a 
            href="#contact" 
            className="rounded-md border border-white/20 bg-white/15 backdrop-blur-md px-4 py-2 text-xs sm:px-5 sm:text-sm text-white hover:bg-white/25 transition-colors duration-300"
          >
            Get Free Consultation
          </a>
        </Reveal>
      </div>
    </header>
  );
}
