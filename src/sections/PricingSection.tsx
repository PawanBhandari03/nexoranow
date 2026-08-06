import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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
    <section id="pricing" className="py-24 relative bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-[#00D4FF] uppercase">Investment</h2>
          <p className="mt-2 text-3xl leading-8 font-black tracking-tight text-white sm:text-4xl uppercase">
            Transparent Pricing Options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-[#0A0A0D] p-8 rounded-[24px] flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(182,0,168,0.15)] border ${
                plan.highlighted 
                  ? 'border-[#B600A8]/80 shadow-[0_0_30px_rgba(182,0,168,0.2)] z-10' 
                  : 'border-white/10 hover:border-[#B600A8]/50 z-0'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className="bg-[#B600A8] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 uppercase tracking-wide">{plan.name}</h3>
              <p className="text-[#D7E2EA]/70 text-sm mb-6 min-h-[40px] leading-relaxed font-light">{plan.description}</p>
              
              <div className="mb-8">
                <span className="block text-[#00D4FF] text-[10px] uppercase tracking-widest font-semibold mb-1">Starting from</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#00D4FF] block tracking-tight">
                  {plan.price}
                </span>
                <span className="block text-[#D7E2EA]/50 text-xs italic mt-2 font-light">Final quote depends on scope</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start">
                    <Check className="text-[#00D4FF] mr-3 shrink-0" size={18} />
                    <span className="text-[#D7E2EA]/90 text-sm font-light">{feature}</span>
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
                className={`w-full rounded-full py-3 flex items-center justify-center transition-all duration-300 border cursor-pointer ${
                  plan.highlighted 
                    ? 'bg-[#B600A8]/20 border-[#B600A8] hover:bg-[#B600A8]/40 text-white shadow-[0_0_15px_rgba(182,0,168,0.3)]'
                    : 'bg-transparent border-white/20 hover:border-white/50 hover:bg-white/5 text-white'
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-widest">Get Started</span>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-[#D7E2EA]/60 text-sm max-w-2xl mx-auto font-light leading-relaxed">
            All plans start with a free consultation — final pricing is customized based on your specific requirements and project scope.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
