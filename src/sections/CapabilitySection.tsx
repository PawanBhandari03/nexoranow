import { ChevronRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const CAPABILITIES = [
  {
    title: 'AI Integration',
    body: 'Seamlessly embed machine learning models into your existing applications to unlock predictive insights.'
  },
  {
    title: 'Custom Workflows',
    body: 'Replace manual, repetitive tasks with robust, automated pipelines tailored to your operations.'
  },
  {
    title: 'Scalable Architecture',
    body: 'Future-proof your business with cloud-native, high-performance web infrastructure.'
  }
];

export function CapabilitySection() {
  return (
    <section className="supports-[height:100svh]:min-h-[100svh] min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 md:pb-16 px-5 sm:px-8 md:px-12">
      
      {/* Top Row */}
      <div className="flex flex-col gap-8 sm:flex-row sm:justify-between w-full">
        <Reveal delay={120}>
          <div className="inline-block border-l-2 border-white bg-white/15 px-3 py-1.5 backdrop-blur-md self-start">
            <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white">
              Intelligent Automation
            </span>
          </div>
        </Reveal>
        
        <Reveal delay={220}>
          <p className="max-w-sm sm:text-right text-lg sm:text-xl leading-relaxed text-white drop-shadow-md">
            We don't just write code — we architect scalable systems that automate your workflows and accelerate growth.
          </p>
        </Reveal>
      </div>

      {/* Bottom Area */}
      <div className="flex-1 flex flex-col justify-end mt-16 gap-12 md:flex-row md:items-end md:justify-between md:gap-16">
        
        {/* Left Column */}
        <div className="max-w-xl">
          <Reveal delay={180}>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-lg">
              Scale your operations<br />
              intelligently.
            </h2>
          </Reveal>
          
          <Reveal delay={320}>
            <p className="mt-6 max-w-md text-sm sm:text-base text-white/80 drop-shadow-md">
              From initial architecture to final deployment, NexoraNow transforms your complex business bottlenecks into streamlined, automated workflows that run silently at scale.
            </p>
          </Reveal>
          
          <Reveal delay={420}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a 
                href="#portfolio"
                className="inline-flex items-center justify-center gap-1 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-medium text-black hover:bg-white/85 transition-colors duration-300"
              >
                View our work
                <ChevronRight size={14} />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-5 py-2.5 text-xs sm:text-sm text-white hover:bg-white/20 transition-colors duration-300"
              >
                Free consultation
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Frosted Panel */}
        <div className="w-full max-w-md rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md px-5 sm:px-6">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.title} delay={300 + i * 110}>
              <div className={`flex gap-5 py-5 ${i !== CAPABILITIES.length - 1 ? 'border-b border-white/15' : ''}`}>
                <div className="font-mono text-[11px] tracking-[0.15em] text-white/55 mt-1 shrink-0">
                  0{i + 1}
                </div>
                <div className="flex flex-col group cursor-pointer">
                  <div className="flex items-center gap-1">
                    <h3 className="text-base sm:text-lg font-medium text-white">
                      {cap.title}
                    </h3>
                    <ChevronRight size={16} className="text-white/40 transform transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                    {cap.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
      </div>
      
    </section>
  );
}
