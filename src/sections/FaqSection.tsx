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
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-dark-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wide text-primary-500 uppercase">Got Questions?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Frequently Asked Questions
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="border border-dark-800 rounded-xl bg-dark-950 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <ChevronDown 
                  className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
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
                    <div className="px-6 pb-4 text-gray-400 text-sm leading-relaxed border-t border-dark-800/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
