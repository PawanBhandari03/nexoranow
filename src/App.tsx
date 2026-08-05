import { ScrollVideo } from './components/ScrollVideo';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { CapabilitySection } from './sections/CapabilitySection';
import { AboutSection } from './sections/AboutSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { PricingSection } from './sections/PricingSection';
import { FaqSection } from './sections/FaqSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  return (
    <div className="relative bg-[#0a0a0a]">
      {/* Cinematic Video Background Layer */}
      <ScrollVideo />

      {/* Main Content Wrapper */}
      <div className="relative z-10 flex flex-col font-sans">
        <Navbar />
        
        <main className="flex-grow">
          {/* Cinematic Sections */}
          <HeroSection />
          <div className="h-[80vh] w-full" aria-hidden="true" />
          <CapabilitySection />

          {/* Standard Sections (Dark background covers the video) */}
          <div className="bg-dark-950/95 backdrop-blur-3xl relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <AboutSection />
            <PortfolioSection />
            <TestimonialsSection />
            <PricingSection />
            <FaqSection />
            <ContactSection />
          </div>
        </main>

        <div className="bg-dark-950/95 backdrop-blur-3xl relative z-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
