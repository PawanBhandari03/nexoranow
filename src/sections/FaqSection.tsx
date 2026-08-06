import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'How long does a typical project take?',
    answer: 'A standard web application typically takes 4-8 weeks from discovery to launch. More complex enterprise solutions or AI integrations can take 3-6 months depending on the scope.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we offer flexible retainer packages for ongoing maintenance, feature updates, and performance optimization after the initial launch.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in React, Node.js, TypeScript, Next.js, and Python for AI/ML tasks. We adapt our tech stack based on the specific requirements of your project.',
  },
  {
    question: 'How do you handle project pricing?',
    answer: 'We provide custom quotes based on project scope. After our initial discovery call, we will provide a detailed proposal outlining costs, deliverables, and timelines.',
  },
  {
    question: 'Do you require full payment upfront?',
    answer: 'No. We typically work on a milestone basis — an initial deposit to begin, with the remaining balance split across project milestones or delivery. This keeps things fair and transparent for both sides, and we\'ll always agree on the payment structure before starting.',
  },
  {
    question: 'What if I need changes after the project is delivered?',
    answer: 'Each plan includes a support window (1–3 months depending on the tier) for bug fixes and minor adjustments at no extra cost. After that, we offer affordable maintenance packages or hourly support for any future updates.',
  },
  {
    question: 'Do you sign a contract or agreement?',
    answer: 'Yes. Every project starts with a clear scope of work and agreement outlining deliverables, timeline, and payment terms — so there\'s no ambiguity for either party.',
  },
  {
    question: 'Can I request revisions during development?',
    answer: 'Absolutely. We share progress at key milestones and welcome feedback throughout — most plans include a set number of revision rounds, and we always communicate clearly if a request falls outside the original scope.',
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#0C0C0C]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative">
          {/* Soft glow behind heading */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-gradient-to-r from-[#B600A8]/20 to-[#00D4FF]/20 blur-[50px] pointer-events-none" />
          
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-[#00D4FF] uppercase relative z-10">Got Questions?</h2>
          <p className="mt-2 text-3xl leading-8 font-black tracking-tight text-white sm:text-4xl uppercase relative z-10">
            Frequently Asked Questions
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="group relative p-[1px] rounded-[16px] overflow-hidden transition-all duration-300"
            >
              {/* Gradient border on hover/focus */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${openIndex === index ? 'bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#00D4FF] opacity-100' : 'opacity-0'}`} />
              
              <div className="relative bg-[#0A0A0D]/95 backdrop-blur-xl rounded-[16px] overflow-hidden h-full">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-semibold text-white tracking-wide text-sm md:text-base">{faq.question}</span>
                  <ChevronDown 
                    className={`text-[#00D4FF] transition-transform duration-300 shrink-0 ml-4 ${openIndex === index ? 'rotate-180' : ''}`}
                    size={20} 
                  />
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-[#D7E2EA]/70 text-sm leading-relaxed border-t border-white/5 pt-4 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
