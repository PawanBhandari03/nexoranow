import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { RevealText } from '../components/RevealText';
import { SectionLabel } from '../components/SectionLabel';
import { scrollToId } from '../lib/smoothScroll';

const PLANS = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses needing a robust online presence',
    price: '₹5,000 – ₹10,000',
    features: ['Responsive Web Design', 'Basic SEO Setup', 'Contact Forms', '1 Month Support'],
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for scaling companies requiring custom functionality and automation',
    price: '₹10,000 – ₹20,000',
    features: ['Full-Stack Web App', 'API Integrations', 'Custom Dashboards', '3 Months Support'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Complex AI solutions and large-scale architecture for industry leaders',
    price: '₹20,000 – ₹30,000+',
    features: ['AI Model Integration', 'Advanced Analytics', 'Cloud Architecture', '24/7 SLA Support'],
    highlighted: false,
  }
];

interface PricingSectionProps {
  onSelectPlan?: (planName: string) => void;
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section id="pricing" className="border-t border-line px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeIn y={10}>
              <SectionLabel index="05">Pricing</SectionLabel>
            </FadeIn>
            <RevealText
              text={'Clear pricing,\n*no surprises.*'}
              className="mt-8 text-[clamp(2.2rem,4.6vw,4.5rem)] font-medium leading-[1] tracking-[-0.04em] text-bone"
            />
          </div>
          <FadeIn delay={0.2}>
            <p className="max-w-[360px] text-[16px] leading-relaxed text-bone/65 md:text-right">
              All plans start with a free consultation — final pricing is customized based on your specific requirements and project scope.
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {PLANS.map((plan, index) => {
            const dark = !plan.highlighted;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                transition={{ duration: 0.9, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col rounded-[28px] p-7 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 sm:p-8 ${
                  dark ? 'border border-line bg-ink-2 text-bone' : 'bg-bone text-ink'
                }`}
              >
                <div className="flex h-7 items-center justify-between">
                  <span className={`font-mono text-[12px] ${dark ? 'text-mute' : 'text-ink/50'}`}>0{index + 1}</span>
                  {plan.highlighted && (
                    <span className="rounded-full bg-accent px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-on-accent">
                      Most popular
                    </span>
                  )}
                </div>

                <h3 className="mt-10 text-[30px] font-medium leading-none tracking-[-0.035em]">{plan.name}</h3>
                <p className={`mt-3 min-h-[48px] text-[14.5px] leading-relaxed ${dark ? 'text-bone/55' : 'text-ink/65'}`}>{plan.description}</p>

                <div className={`mt-8 border-t pt-6 ${dark ? 'border-line' : 'border-ink/15'}`}>
                  <span className={`block font-mono text-[10.5px] uppercase tracking-[0.14em] ${dark ? 'text-mute' : 'text-ink/50'}`}>Starting from</span>
                  <span className="mt-2 block text-[clamp(1.6rem,2.3vw,2.1rem)] font-medium tracking-[-0.04em]">{plan.price}</span>
                  <span className={`serif-accent mt-1 block text-[16px] ${dark ? 'text-mute' : 'text-ink/55'}`}>Final quote depends on scope</span>
                </div>

                <ul className="mt-8 mb-10 flex-1 space-y-3">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-[15px]">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className={dark ? 'text-bone/85' : 'text-ink/85'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => {
                    if (onSelectPlan) onSelectPlan(`${plan.name} Plan`);
                    else scrollToId('contact');
                  }}
                  className={`group flex w-full items-center justify-between rounded-full py-3 pl-6 pr-3 text-[15px] font-medium transition-colors duration-300 ${
                    dark ? 'border border-line text-bone hover:border-bone hover:bg-bone hover:text-ink' : 'bg-ink text-bone hover:bg-accent hover:text-on-accent'
                  }`}
                >
                  <span className="roll">
                    <span>Get started</span>
                    <span>Get started</span>
                  </span>
                  <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:rotate-45" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
