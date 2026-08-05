import { FadeIn } from '../components/FadeIn';

const SERVICES = [
  {
    name: 'AI Workflow Automation',
    description: 'Deploying intelligent automated workflows to streamline operations, reduce manual overhead, and accelerate enterprise task execution.'
  },
  {
    name: 'Custom Autonomous AI Agents',
    description: 'Custom-built AI agents that handle complex decision-making, customer support, data extraction, and continuous workflow management.'
  },
  {
    name: 'Full-Stack Web Development',
    description: 'Modern web platforms engineered with React, Next.js, and Node.js for high performance, security, and enterprise scalability.'
  },
  {
    name: 'Bespoke Business Software & SaaS',
    description: 'Custom internal tools, executive dashboards, and SaaS applications designed to solve complex operational bottlenecks.'
  },
  {
    name: 'Enterprise API Integrations',
    description: 'Connecting disparate software architectures and AI endpoints to construct unified, high-throughput data ecosystems.'
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <FadeIn y={40}>
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-[#B600A8] font-bold text-xs sm:text-sm uppercase tracking-widest block mb-2">
            What We Excel At
          </span>
          <h2 className="font-black uppercase text-center text-[clamp(2.5rem,9vw,140px)] leading-none">
            Our Services
          </h2>
        </div>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col border-t border-[rgba(12,12,12,0.15)]">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.name} delay={i * 0.1} y={30}>
            <div className="flex flex-col md:flex-row md:items-center py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] gap-6 md:gap-12 lg:gap-20">
              
              <div className="font-black leading-none text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] shrink-0">
                0{i + 1}
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-bold uppercase text-[clamp(1.1rem,2.4vw,2.2rem)] leading-tight text-[#0C0C0C]">
                  {service.name}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-70">
                  {service.description}
                </p>
              </div>

            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
