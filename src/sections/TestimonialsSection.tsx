import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

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
    <section id="testimonials" className="py-24 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-[#00D4FF] uppercase">Client Stories</h2>
          <p className="mt-2 text-3xl leading-8 font-black tracking-tight text-white sm:text-4xl uppercase">
            Trusted by Industry Leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#0A0A0D] border border-white/10 hover:border-[#7621B0]/50 p-8 rounded-[24px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(182,0,168,0.15)] relative"
            >
              {/* 5-star rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#00D4FF] text-[#00D4FF]" />
                ))}
              </div>

              <Quote className="text-white/20 absolute top-8 right-8 z-0 transition-colors duration-500 group-hover:text-[#B600A8]/40" size={40} strokeWidth={3} />
                <p className="text-[#D7E2EA] font-light italic mb-8 relative z-10 leading-relaxed text-sm">"{testimonial.content}"</p>
                
                <div className="relative z-10 mt-auto">
                  <h4 className="text-white font-bold uppercase tracking-wider text-sm">{testimonial.name}</h4>
                  <p className="text-[#B600A8] text-[11px] font-semibold uppercase tracking-widest mt-1">{testimonial.role}</p>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
