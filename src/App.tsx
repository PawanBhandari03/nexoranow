import { useState } from 'react';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { PricingSection } from './sections/PricingSection';
import { FaqSection } from './sections/FaqSection';
import { ContactSection } from './sections/ContactSection';

import { ConsultationModal } from './components/ConsultationModal';
import { ProjectModal } from './components/ProjectModal';
import type { ProjectData } from './components/ProjectModal';

function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);

  const handleOpenConsultation = (plan?: string) => {
    setSelectedPlan(plan);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setSelectedPlan(undefined);
  };

  const handleSelectProject = (project: ProjectData) => {
    setActiveProject(project);
  };

  const handleCloseProject = () => {
    setActiveProject(null);
  };

  return (
    <div className="bg-[#0C0C0C] font-kanit overflow-x-clip min-h-screen">
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />
      
      <main className="flex flex-col">
        <HeroSection onOpenConsultation={() => handleOpenConsultation()} />
        <AboutSection />
        <MarqueeSection />
        <ProjectsSection onSelectProject={handleSelectProject} />
        
        <div className="bg-[#0C0C0C] relative z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <TestimonialsSection />
          <PricingSection onSelectPlan={(plan) => handleOpenConsultation(plan)} />
          <FaqSection />
          <ContactSection />
        </div>
      </main>

      <Footer />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        initialPlan={selectedPlan}
      />

      <ProjectModal
        project={activeProject}
        onClose={handleCloseProject}
        onBookCall={() => handleOpenConsultation()}
      />
    </div>
  );
}

export default App;
