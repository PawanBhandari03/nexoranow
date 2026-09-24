import { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { useSmoothScroll } from './lib/smoothScroll';
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

  useSmoothScroll();

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
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-ink font-sans text-bone">
        <div className="grain" aria-hidden />
        <Navbar onOpenConsultation={() => handleOpenConsultation()} />

        <main className="flex flex-col">
          <HeroSection onOpenConsultation={() => handleOpenConsultation()} />
          <AboutSection />
          <MarqueeSection />
          <ProjectsSection onSelectProject={handleSelectProject} />
          <div className="relative z-30 bg-ink">
            <TestimonialsSection />
            <PricingSection onSelectPlan={(plan) => handleOpenConsultation(plan)} />
            <FaqSection />
            <ContactSection />
          </div>
        </main>

        <Footer onOpenConsultation={() => handleOpenConsultation()} />

        <ConsultationModal
          isOpen={isConsultationOpen}
          onClose={handleCloseConsultation}
          initialPlan={selectedPlan}
        />

        <ProjectModal
          project={activeProject}
          onClose={handleCloseProject}
          onBookCall={() => {
            handleCloseProject();
            handleOpenConsultation();
          }}
        />
      </div>
    </MotionConfig>
  );
}

export default App;
