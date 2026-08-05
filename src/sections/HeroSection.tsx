import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-x-clip pt-28 sm:pt-32 pb-10">
      
      {/* Full Name "nexoranow" fitted inside screen */}
      <div className="flex-1 flex flex-col justify-center items-center overflow-hidden px-4 z-10">
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center mt-4 sm:mt-2">
          <h1 className="hero-heading font-black uppercase tracking-tighter leading-none whitespace-nowrap text-[8.8vw] sm:text-[9.5vw] md:text-[10vw] lg:text-[10.5vw] text-center w-full max-w-full selection:bg-[#B600A8]/30">
            nexoranow
          </h1>
        </FadeIn>
      </div>

      {/* Hero Agent Portrait (Slightly Smaller for Perfect Balance) */}
      <FadeIn 
        delay={0.6} 
        y={30} 
        className="absolute left-1/2 -translate-x-1/2 z-20 top-[48%] -translate-y-1/2 pointer-events-none sm:pointer-events-auto"
      >
        <Magnet padding={120} magnetStrength={3} disabled={false}>
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
            alt="NexoraNow AI Agent" 
            className="w-[130px] sm:w-[170px] md:w-[210px] lg:w-[240px] object-cover pointer-events-auto filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-105"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="relative z-30 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 pb-4 sm:pb-6 px-5 sm:px-8 md:px-10 max-w-7xl mx-auto w-full">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[280px] sm:max-w-[320px] md:max-w-[360px] text-xs sm:text-sm md:text-base text-center sm:text-left bg-black/40 backdrop-blur-md p-3 sm:p-0 rounded-xl">
            an ai automation & software development agency driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton 
            label="Book a Free Consultation" 
            onClick={onOpenConsultation}
          />
        </FadeIn>
      </div>
    </section>
  );
}
