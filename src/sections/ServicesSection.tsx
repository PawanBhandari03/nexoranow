import { motion } from 'framer-motion';
import { Code2, Bot, Workflow, Layers } from 'lucide-react';

const SERVICES = [
  {
    title: 'Full-Stack Development',
    description: 'Scalable, modern web applications built with React, Node.js, and cutting-edge technologies.',
    icon: <Code2 size={32} className="text-primary-500" />
  },
  {
    title: 'AI Solutions',
    description: 'Intelligent integrations, chatbots, and machine learning models tailored for your business.',
    icon: <Bot size={32} className="text-purple-500" />
  },
  {
    title: 'Business Automation',
    description: 'Streamline workflows and eliminate manual tasks with custom automated pipelines.',
    icon: <Workflow size={32} className="text-green-500" />
  },
  {
    title: 'Custom Software',
    description: 'Bespoke enterprise software designed specifically for your unique operational needs.',
    icon: <Layers size={32} className="text-orange-500" />
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wide text-primary-500 uppercase">Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            What We Do Best
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
            Comprehensive technical solutions to elevate your digital presence and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-900 border border-dark-800 rounded-2xl p-8 hover:bg-dark-800 transition-colors group"
            >
              <div className="mb-6 bg-dark-950 w-16 h-16 rounded-xl flex items-center justify-center border border-dark-800 group-hover:border-primary-500/50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
