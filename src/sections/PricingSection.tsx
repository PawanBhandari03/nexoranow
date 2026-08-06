import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PLANS = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses needing a robust online presence.',
    price: 'Custom',
    features: ['Responsive Web Design', 'Basic SEO Setup', 'Contact Forms', '1 Month Support'],
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for scaling companies requiring custom functionality and automation.',
    price: 'Custom',
    features: ['Full-Stack Web App', 'API Integrations', 'Custom Dashboards', '3 Months Support'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Complex AI solutions and large-scale architecture for industry leaders.',
    price: 'Custom',
    features: ['AI Model Integration', 'Advanced Analytics', 'Cloud Architecture', '24/7 SLA Support'],
    highlighted: false,
  }
];

interface PricingSectionProps {
  onSelectPlan?: (planName: string) => void;
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wide text-white/70 uppercase">Investment</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Transparent Pricing Options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-8 relative flex flex-col ${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] border border-white/60 shadow-[0_0_30px_rgba(255,255,255,0.12)]' 
                  : 'bg-[#121212] border border-white/10'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-white text-black text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wide shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6 h-10">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start">
                    <Check className="text-white mr-3 shrink-0" size={20} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                type="button"
                onClick={() => {
                  if (onSelectPlan) {
                    onSelectPlan(`${plan.name} Plan`);
                  } else {
                    const contact = document.getElementById('contact');
                    if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-center transition-transform hover:scale-105 active:scale-95 cursor-pointer ${
                  plan.highlighted
                    ? 'bg-white hover:bg-neutral-200 text-black shadow-lg'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
