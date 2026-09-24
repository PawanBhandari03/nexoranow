import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { RevealText } from '../components/RevealText';
import { SectionLabel } from '../components/SectionLabel';
import { CONTACT_EMAIL } from '../lib/inquiry';

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
    <section id="faq" className="border-t border-line px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <FadeIn y={10}>
              <SectionLabel index="06">FAQ</SectionLabel>
            </FadeIn>
            <RevealText
              text={'Questions,\n*answered.*'}
              className="mt-8 text-[clamp(2.2rem,4.6vw,4.5rem)] font-medium leading-[1] tracking-[-0.04em] text-bone"
            />
            <FadeIn delay={0.2}>
              <p className="mt-8 max-w-[320px] text-[15px] leading-relaxed text-bone/60">
                Something we didn&apos;t cover? Write to us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="link-line text-bone">{CONTACT_EMAIL}</a>{' '}
                and one of us will reply personally.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="border-t border-line lg:col-span-8">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={faq.question} delay={index * 0.04} y={16} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="group grid w-full grid-cols-[2.75rem_1fr_auto] items-center gap-2 py-6 text-left sm:grid-cols-[4rem_1fr_auto]"
                >
                  <span className={`font-mono text-[12px] transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-mute'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`text-[17px] font-medium tracking-[-0.015em] transition-colors duration-300 sm:text-[20px] ${isOpen ? 'text-bone' : 'text-bone/75 group-hover:text-bone'}`}>
                    {faq.question}
                  </span>
                  <span
                    className={`ml-4 flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-500 ${
                      isOpen ? 'rotate-45 border-accent bg-accent text-ink' : 'border-line text-bone group-hover:border-bone'
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-[640px] pb-7 pl-[3.25rem] pr-12 text-[15.5px] leading-relaxed text-bone/60 sm:pl-[4.5rem]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
