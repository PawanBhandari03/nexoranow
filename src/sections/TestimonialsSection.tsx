import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechFlow',
    content: 'NexoraNow completely transformed our digital infrastructure. Their expertise in both AI and web development is unmatched.',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, GrowthMetrics',
    content: 'Working with Rahul & Pawan was a game-changer. They delivered a complex scalable solution weeks ahead of schedule.',
  },
  {
    name: 'Emily Davis',
    role: 'Operations Director, NexaCorp',
    content: 'The business automation tools they built for us saved hundreds of hours of manual work every month. Highly recommended.',
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wide text-primary-500 uppercase">Client Stories</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Trusted by Industry Leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-950 p-8 rounded-2xl border border-dark-800 relative"
            >
              <Quote className="text-primary-500/20 absolute top-6 right-6" size={48} />
              <p className="text-gray-300 italic mb-6 relative z-10">"{testimonial.content}"</p>
              <div>
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <p className="text-primary-400 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
