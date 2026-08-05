import { motion } from 'framer-motion';
import { User, Code, Server, ArrowRight, CheckCircle2 } from 'lucide-react';

const TEAM = [
  {
    name: 'Rahul',
    role: 'Full-Stack & UX Engineer',
    bio: 'Specializing in creating intuitive user interfaces and scalable frontend architectures. Obsessed with pixel-perfect design and smooth user experiences.',
    icon: <Code size={24} className="text-primary-500" />,
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    name: 'Pawan',
    role: 'Backend & AI Specialist',
    bio: 'Architecting robust server-side solutions and integrating cutting-edge AI models. Focused on performance, security, and automated workflows.',
    icon: <Server size={24} className="text-purple-500" />,
    skills: ['Node.js', 'Python', 'Machine Learning', 'Cloud Architecture']
  }
];

const PHILOSOPHY = [
  'Direct Developer Communication',
  'No Middlemen or Account Managers',
  'Agile and Transparent Workflow',
  'Quality Over Quantity'
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-900 border-y border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold tracking-wide text-primary-500 uppercase mb-2">Our Story</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Two Developers, <br className="hidden md:block" />
              <span className="text-gradient">Zero Middlemen.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              NexoraNow was founded on a simple philosophy: the best digital products are built when clients communicate directly with the engineers building them. We cut out the bloat of traditional agencies to deliver premium software faster and more efficiently.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PHILOSOPHY.map((item, index) => (
                <div key={index} className="flex items-center text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-primary-500 mr-2 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-80 lg:h-full min-h-[400px] rounded-3xl overflow-hidden border border-dark-800"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 to-purple-900/40 mix-blend-overlay z-10" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
              alt="Two developers collaborating" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8">
              <div className="bg-dark-950/80 backdrop-blur-md p-6 rounded-2xl border border-dark-800">
                <User size={40} className="text-primary-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white">Rahul & Pawan</h4>
                <p className="text-gray-400 text-sm">Founders & Lead Engineers</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bios Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white">The Engineering Team</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-950 p-8 rounded-2xl border border-dark-800 hover:border-dark-700 transition-colors"
              >
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-dark-900 rounded-xl flex items-center justify-center border border-dark-800 mr-4">
                    {member.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">{member.name}</h4>
                    <p className="text-primary-400">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed min-h-[80px]">
                  {member.bio}
                </p>
                <div>
                  <p className="text-sm font-semibold text-white mb-3">Core Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map(skill => (
                      <span key={skill} className="bg-dark-900 border border-dark-800 text-gray-300 text-xs px-3 py-1.5 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-primary-600 hover:bg-primary-500 rounded-full transition-all group"
          >
            Work With Us Directly
            <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </div>
        
      </div>
    </section>
  );
}
