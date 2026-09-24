import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getLenis } from '../lib/smoothScroll';
import { CONTACT_EMAIL } from '../lib/inquiry';

interface FooterProps {
  onOpenConsultation?: () => void;
}

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES = ['AI Automation', 'AI Agents', 'Full-Stack Development', 'SaaS Development', 'API Integrations'];

export function Footer({ onOpenConsultation }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const backToTop = () => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-2 px-5 pt-24 pb-8 sm:px-8 sm:pt-32">
      <div className="mx-auto max-w-[1400px]">
        {/* Big CTA */}
        <div className="flex flex-col gap-6">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-mute">Have a project in mind?</span>
          <button
            type="button"
            onClick={onOpenConsultation}
            className="group flex items-center gap-4 self-start text-left sm:gap-8"
          >
            <span className="text-[clamp(3.2rem,11vw,10rem)] font-medium leading-[0.9] tracking-[-0.06em] text-bone transition-colors duration-500 group-hover:text-accent">
              Let&apos;s talk
            </span>
            <span className="flex h-[clamp(3rem,7vw,6.5rem)] w-[clamp(3rem,7vw,6.5rem)] shrink-0 items-center justify-center rounded-full border border-line text-bone transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-ink">
              <ArrowUpRight className="h-1/2 w-1/2" strokeWidth={1.5} />
            </span>
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-10 border-t border-line pt-10 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <a href="#" className="flex items-baseline gap-[2px] text-[22px] font-semibold tracking-[-0.04em] text-bone">
              nexora<span className="serif-accent text-[25px] font-normal text-accent">now</span>
            </a>
            <p className="mt-4 max-w-[340px] text-[15px] leading-relaxed text-bone/55">
              Software, AI agents and automation by Rahul &amp; Pawan. We turn ambitious ideas into products people actually use.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">Navigate</h3>
            <ul className="mt-5 space-y-2.5">
              {NAV.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-line text-[15px] text-bone/80 hover:text-bone">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">Services</h3>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service}>
                  <a href="#services" className="link-line text-[15px] text-bone/80 hover:text-bone">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">Say hello</h3>
            <a href={`mailto:${CONTACT_EMAIL}`} className="link-line mt-5 inline-block text-[15px] text-bone">
              {CONTACT_EMAIL}
            </a>
            <p className="mt-3 text-[14px] leading-relaxed text-bone/50">Available for new projects worldwide.</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">
            © {currentYear} NexoraNow — Made in India
          </p>
          <button
            type="button"
            onClick={backToTop}
            className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-bone/70 hover:text-bone"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-bone">
              <ArrowUp size={14} className="transition-transform duration-500 group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>
      </div>

      {/* Oversized wordmark peeking from the bottom edge */}
      <motion.div
        aria-hidden
        initial={{ y: '40%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none mx-auto -mb-[4.5vw] mt-10 max-w-[1400px] select-none text-center text-[19vw] font-semibold leading-[0.8] tracking-[-0.07em] text-bone/[0.04] min-[1474px]:-mb-16 min-[1474px]:text-[276px]"
      >
        nexoranow
      </motion.div>
    </footer>
  );
}
