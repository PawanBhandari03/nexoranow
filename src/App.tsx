import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { PricingSection } from './sections/PricingSection';
import { FaqSection } from './sections/FaqSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  return (
    <div className="bg-[#0C0C0C] font-kanit overflow-x-clip min-h-screen">
      <Navbar />
      
      <main className="flex flex-col">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        
        {/* Existing Sections (Kept as requested to not remove unrelated sections) */}
        <div className="bg-[#0C0C0C] relative z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <TestimonialsSection />
          <PricingSection />
          <FaqSection />
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
