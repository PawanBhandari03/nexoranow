import { FadeIn } from '../components/FadeIn';

const SERVICES = [
  {
    name: 'AI Automation',
    description: 'Deploying intelligent systems to streamline your operations, reducing manual overhead and accelerating task execution.'
  },
  {
    name: 'AI Agents',
    description: 'Custom-built autonomous agents that handle complex decision-making, customer support, and continuous workflow management.'
  },
  {
    name: 'Web Development',
    description: 'Full-stack digital platforms engineered for performance, security, and scalability, tailored to your exact business needs.'
  },
  {
    name: 'Business Software',
    description: 'Bespoke internal tools and SaaS applications designed from the ground up to solve your unique operational bottlenecks.'
  },
  {
    name: 'API Integrations',
    description: 'Seamlessly connecting disparate software architectures to create unified, highly-efficient data ecosystems.'
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <FadeIn y={40}>
        <h2 className="font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col border-t border-[rgba(12,12,12,0.15)]">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.name} delay={i * 0.1} y={30}>
            <div className="flex flex-col md:flex-row md:items-center py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] gap-6 md:gap-12 lg:gap-20">
              
              <div className="font-black leading-none text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] shrink-0">
                0{i + 1}
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-tight">
                  {service.name}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
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
