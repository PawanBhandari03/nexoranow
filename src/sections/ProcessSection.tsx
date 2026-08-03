import { motion } from 'framer-motion';

const STEPS = [
  { number: '01', title: 'Discovery', description: 'We dive deep into your business goals, target audience, and technical requirements.' },
  { number: '02', title: 'Strategy & Design', description: 'Crafting the blueprint and high-fidelity mockups for a seamless user experience.' },
  { number: '03', title: 'Development', description: 'Writing clean, scalable code using modern tech stacks like React, Node, and AI models.' },
  { number: '04', title: 'Launch & Scale', description: 'Rigorous testing, deployment, and ongoing support to ensure sustained growth.' }
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wide text-primary-500 uppercase">How We Work</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Our Proven Process
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-dark-800 -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-dark-900 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none border border-dark-800 md:border-none z-10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-dark-950 border-2 border-primary-500 flex items-center justify-center text-xl font-bold text-primary-500 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
