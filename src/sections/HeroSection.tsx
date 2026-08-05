import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip pt-24 sm:pt-28">
      {/* Absolute Navbar inside Hero for exact layout if needed, but App.tsx handles global. 
          Actually, we should put Navbar inside HeroSection if it's strictly part of it, 
          but it's already fixed in layout. Let's just include it here if it's not fixed. 
          The spec said "Horizontal nav bar with 4 links". It was not said to be fixed. I made it absolute top-0. */}
      
      {/* Heading */}
      <div className="flex-1 flex flex-col justify-center overflow-hidden">
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center mt-6 sm:mt-4 md:-mt-5">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] text-center w-full">
            nexoranow
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait with Magnet */}
      <FadeIn 
        delay={0.6} 
        y={30} 
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none sm:pointer-events-auto"
      >
        <Magnet padding={150} magnetStrength={3} disabled={false}>
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
            alt="NexoraNow Hero" 
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-cover pointer-events-auto"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="relative z-20 flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-5 sm:px-8 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
            an ai automation & software development agency driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
