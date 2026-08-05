import { ChevronRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const SERVICES = [
  '/ AI AUTOMATION',
  '/ AI AGENT DEVELOPMENT',
  '/ CUSTOM BUSINESS SOFTWARE'
];

export function HeroSection() {
  return (
    <section className="supports-[height:100svh]:min-h-[100svh] min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 md:pb-16 px-5 sm:px-8 md:px-12">
      
      {/* Top Row */}
      <div className="flex flex-col gap-8 sm:flex-row sm:justify-between w-full">
        <div className="flex flex-col gap-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service} delay={150 + i * 120}>
              <div className="font-mono text-xs uppercase tracking-[0.15em] text-white/90 drop-shadow-md">
                {service}
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal delay={300}>
          <p className="max-w-xs sm:text-right text-lg sm:text-xl leading-relaxed text-white drop-shadow-md">
            We design automation and intelligent software that brings clarity, precision, and scalability to the way your business operates.
          </p>
        </Reveal>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between w-full mt-16">
        
        <div className="flex flex-col">
          <Reveal delay={150}>
            <div className="inline-block border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md mb-5 self-start">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white">
                Empowering Startups & Enterprises
              </span>
            </div>
          </Reveal>
          
          <Reveal delay={280}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-lg">
              Intelligent. Scalable.<br />
              Automated.
            </h1>
          </Reveal>
        </div>

        <Reveal delay={420}>
          <div className="flex items-center gap-4 rounded-xl bg-white/15 p-3 backdrop-blur-md border border-white/15 w-fit">
            <img 
              src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260728_050334_5b076e26-0ce7-4898-b432-d764190e448f.png&w=1280&q=85" 
              alt="Rahul, co-founder of NexoraNow" 
              className="h-24 w-20 rounded-lg object-cover"
            />
            <div className="flex flex-col gap-1.5 pr-2">
              <span className="text-sm font-medium text-white drop-shadow-md">Talk with Rahul</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
                Co-founder of NexoraNow
              </span>
              <a 
                href="#contact"
                className="mt-1.5 inline-flex items-center justify-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-medium text-black hover:bg-white/85 transition-colors duration-300 w-fit"
              >
                Book 15-mins call
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </Reveal>
        
      </div>
      
    </section>
  );
}
