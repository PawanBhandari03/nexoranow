import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { Hero3DShapes } from '../components/Hero3DShapes';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-x-clip pt-28 sm:pt-32 pb-6">
      
      {/* Background Grid Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-[#B600A8] blur-[120px] mix-blend-screen"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
            x: [0, -40, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-[#7621B0] blur-[120px] mix-blend-screen"
        />
      </div>

      {/* 3D Abstract Centerpiece */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[48%] -translate-y-1/2 w-full max-w-[800px] h-[600px] z-10 pointer-events-none sm:pointer-events-auto">
        <Hero3DShapes />
      </div>

      {/* Full Name "nexoranow" fitted inside screen */}
      <div className="flex-1 flex flex-col justify-center items-center overflow-hidden px-4 z-20 pointer-events-none relative">
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center mt-4 sm:mt-2 relative">
          {/* Subtle blurred glow behind the text */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none blur-3xl opacity-40">
            <h1 className="hero-heading font-black uppercase tracking-tighter leading-none whitespace-nowrap text-[8.8vw] sm:text-[9.5vw] md:text-[10vw] lg:text-[10.5vw] text-center w-full max-w-full text-[#B600A8]">
              nexoranow
            </h1>
          </div>
          <h1 
            className="relative hero-heading font-black uppercase tracking-tighter leading-none whitespace-nowrap text-[8.8vw] sm:text-[9.5vw] md:text-[10vw] lg:text-[10.5vw] text-center w-full max-w-full text-transparent bg-clip-text bg-gradient-to-r from-[#7621B0] via-[#B600A8] to-[#00D4FF] drop-shadow-[0_0_2px_rgba(255,255,255,0.2)] selection:bg-[#B600A8]/30"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
          >
            nexoranow
          </h1>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-30 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 sm:gap-6 pb-16 sm:pb-8 px-5 sm:px-8 md:px-10 max-w-7xl mx-auto w-full mt-auto">
        <FadeIn delay={0.35} y={20} className="w-full sm:w-auto">
          <div className="group relative transition-all duration-300 w-full sm:w-auto">
            {/* Top Left Bracket */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#B600A8] group-hover:w-full group-hover:h-full group-hover:border-[#B600A8]/40 transition-all duration-700 z-20 pointer-events-none" />
            
            {/* Bottom Right Bracket */}
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#00D4FF] group-hover:w-full group-hover:h-full group-hover:border-[#00D4FF]/40 transition-all duration-700 z-20 pointer-events-none" />
            
            {/* Inner Content */}
            <div className="relative h-full w-full bg-[#0A0A0D]/80 backdrop-blur-md px-8 py-4 sm:px-10 sm:py-5 flex items-center justify-center overflow-hidden max-w-none sm:max-w-[450px] shadow-[0_0_20px_rgba(0,0,0,0.5)]">
               <div className="absolute inset-0 bg-gradient-to-r from-[#B600A8]/0 via-[#7621B0]/5 to-[#00D4FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              <p className="relative z-10 text-[#D7E2EA] font-light uppercase tracking-[0.15em] leading-relaxed text-[11px] sm:text-xs md:text-sm text-center sm:text-left w-full">
                an ai automation & software development agency driven by crafting striking and unforgettable projects
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="w-full sm:w-auto flex justify-center sm:justify-end">
          <ContactButton 
            label="Book a Free Consultation" 
            onClick={onOpenConsultation}
            className="w-full sm:w-auto"
          />
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-white/40 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium">Scroll to explore</span>
        <ChevronDown size={16} />
      </motion.div>

    </section>
  );
}
