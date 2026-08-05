import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { Bot, Cpu, Layout, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const FEATURES = [
  { icon: Cpu, title: 'AI Automation', desc: 'Automate repetitive workflows and business operations.' },
  { icon: Bot, title: 'AI Agents', desc: 'Custom AI assistants designed for your company.' },
  { icon: Layout, title: 'Full Stack Development', desc: 'Modern scalable web applications built for growth.' },
  { icon: Layers, title: 'SaaS Solutions', desc: 'End-to-end software products from idea to deployment.' },
];

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 xl:gap-20 items-center relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col">
          <FadeIn delay={0} y={40}>
            <h2 className="hero-heading font-black uppercase text-[clamp(3rem,8vw,100px)] mb-2 leading-none">
              About Us
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} y={40}>
            <h3 className="text-xl sm:text-2xl font-medium text-white/80 leading-relaxed mb-8">
              Building intelligent software for businesses that want to scale.
            </h3>
          </FadeIn>

          <div className="mb-12 max-w-[650px]">
            <AnimatedText 
              text="We're Rahul and Pawan, founders of NexoraNow. We partner with startups and growing businesses to build AI-powered software, intelligent automation, and modern web applications. From custom SaaS platforms and AI agents to workflow automation and enterprise software, we build technology that helps companies save time, improve efficiency, and grow faster."
              className="text-[#D7E2EA] font-medium leading-relaxed text-[clamp(1rem,1.5vw,1.25rem)] text-left justify-start"
            />
          </div>

          <div className="flex flex-col gap-6 mb-12">
            {FEATURES.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <FadeIn key={feat.title} delay={0.3 + (i * 0.1)} y={20} className="flex items-start gap-5">
                  <div className="mt-1 flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 shrink-0 text-[#D7E2EA]">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg sm:text-xl tracking-wide">{feat.title}</h4>
                    <p className="text-[#D7E2EA]/70 text-sm sm:text-base mt-1">{feat.desc}</p>
                  </div>
                </FadeIn>
              )
            })}
          </div>

          <FadeIn delay={0.8} y={30} className="flex flex-wrap items-center gap-4">
            <LiveProjectButton label="View Our Projects" href="#projects" />
          </FadeIn>
        </div>

        {/* Right Column */}
        <div className="relative w-full h-full min-h-[500px] lg:min-h-[700px] flex items-center justify-center mt-10 lg:mt-0">
          {/* Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#7721B1]/30 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Floating Glass Container */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[450px] aspect-[4/5] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            <span className="text-[#D7E2EA]/50 font-medium tracking-widest uppercase text-sm sm:text-base z-10 text-center px-6">
              Team / Workspace / AI Illustration
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
