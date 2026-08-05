import { useRef } from 'react';
import { FadeIn } from '../components/FadeIn';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ROW1_SERVICES = [
  { num: '01', title: 'AI Automation', bgText: 'AUTOMATION', desc: 'Automate repetitive workflows with intelligent AI systems.' },
  { num: '02', title: 'AI Agents', bgText: 'AGENT', desc: 'Custom AI assistants built for customer support and operations.' },
  { num: '03', title: 'Web Development', bgText: 'WEB', desc: 'High-performance modern websites and premium platforms.' },
  { num: '04', title: 'Custom Software', bgText: 'SOFTWARE', desc: 'Tailor-made business software built specifically for your workflows.' },
  { num: '05', title: 'SaaS Development', bgText: 'CLOUD', desc: 'Build scalable cloud software from MVP to enterprise.' }
];

const ROW2_SERVICES = [
  { num: '06', title: 'API Integrations', bgText: 'API', desc: 'Connect all your business tools into one ecosystem.' },
  { num: '07', title: 'Workflow Automation', bgText: 'WORKFLOW', desc: 'Reduce manual work through intelligent automation pipelines.' },
  { num: '08', title: 'AI Chatbots', bgText: 'CHAT', desc: 'Smart conversational assistants trained for your business.' },
  { num: '09', title: 'Data Analytics', bgText: 'DATA', desc: 'Turn business data into actionable insights.' },
  { num: '10', title: 'AI Consulting', bgText: 'STRATEGY', desc: 'Helping businesses adopt AI strategically.' }
];

const ROW1_ITEMS = [...ROW1_SERVICES, ...ROW1_SERVICES, ...ROW1_SERVICES, ...ROW1_SERVICES];
const ROW2_ITEMS = [...ROW2_SERVICES, ...ROW2_SERVICES, ...ROW2_SERVICES, ...ROW2_SERVICES];

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Transform scroll position into the desired X offsets
  // Instead of complex math, we just map scrollY directly to horizontal movement.
  // When scrollY increases, x moves.
  const xRow1 = useTransform(scrollY, (y) => (y * 0.3) - 1000);
  const xRow2 = useTransform(scrollY, (y) => -(y * 0.3) + 200);

  return (
    <section ref={sectionRef} id="services" className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      
      {/* Services Header */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 sm:px-8 mb-16 sm:mb-24 transform-gpu">
        <FadeIn delay={0} y={30}>
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,8vw,100px)] leading-none mb-6">
            Our Services
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} y={30}>
          <p className="text-[#D7E2EA]/80 font-medium text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed">
            We build intelligent software, AI automation, and scalable digital products for modern businesses.
          </p>
        </FadeIn>
      </div>

      <div className="flex flex-col gap-6">
        
        {/* Row 1: Moves Right */}
        <motion.div 
          className="flex gap-6 will-change-transform whitespace-nowrap"
          style={{ x: xRow1 }}
        >
          {ROW1_ITEMS.map((service, i) => (
            <div 
              key={`row1-${i}`}
              className="group relative w-[420px] h-[270px] bg-[#0C0C0C] border border-white/12 rounded-[28px] overflow-hidden shrink-0 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_0_25px_rgba(182,0,168,0.2)] flex flex-col p-6 sm:p-8"
            >
              {/* Oversized Background Text */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none mix-blend-screen">
                <span className="text-[110px] font-black text-white/[0.03] tracking-tighter uppercase whitespace-nowrap">
                  {service.bgText}
                </span>
              </div>

              {/* Top Left: Number */}
              <div className="absolute top-8 left-8">
                <span className="font-mono text-xs text-white/50 tracking-widest">{service.num}</span>
              </div>
              
              {/* Center Content */}
              <div className="flex-1 flex flex-col justify-center gap-3 relative z-10">
                <h3 className="text-3xl sm:text-[34px] font-bold uppercase tracking-tight text-white leading-none pr-8">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm sm:text-[15px] font-medium line-clamp-2 max-w-[85%] leading-relaxed whitespace-normal">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Right: Button */}
              <div className="absolute bottom-8 right-8 z-10">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white text-white/70 transition-all duration-300">
                  <ArrowRight size={18} strokeWidth={2} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 2: Moves Left */}
        <motion.div 
          className="flex gap-6 will-change-transform whitespace-nowrap"
          style={{ x: xRow2 }}
        >
          {ROW2_ITEMS.map((service, i) => (
            <div 
              key={`row2-${i}`}
              className="group relative w-[420px] h-[270px] bg-[#0C0C0C] border border-white/12 rounded-[28px] overflow-hidden shrink-0 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_0_25px_rgba(182,0,168,0.2)] flex flex-col p-6 sm:p-8"
            >
              {/* Oversized Background Text */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none mix-blend-screen">
                <span className="text-[110px] font-black text-white/[0.03] tracking-tighter uppercase whitespace-nowrap">
                  {service.bgText}
                </span>
              </div>

              {/* Top Left: Number */}
              <div className="absolute top-8 left-8">
                <span className="font-mono text-xs text-white/50 tracking-widest">{service.num}</span>
              </div>
              
              {/* Center Content */}
              <div className="flex-1 flex flex-col justify-center gap-3 relative z-10">
                <h3 className="text-3xl sm:text-[34px] font-bold uppercase tracking-tight text-white leading-none pr-8">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm sm:text-[15px] font-medium line-clamp-2 max-w-[85%] leading-relaxed whitespace-normal">
                  {service.desc}
                </p>
              </div>

              {/* Bottom Right: Button */}
              <div className="absolute bottom-8 right-8 z-10">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white text-white/70 transition-all duration-300">
                  <ArrowRight size={18} strokeWidth={2} />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
