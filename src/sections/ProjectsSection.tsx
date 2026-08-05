import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { FadeIn } from '../components/FadeIn';
import type { ProjectData } from '../components/ProjectModal';

const PROJECTS: ProjectData[] = [
  {
    num: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    imgs: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85'
    ]
  },
  {
    num: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    imgs: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85'
    ]
  },
  {
    num: '03',
    category: 'Client',
    name: 'Solaris Digital',
    imgs: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85'
    ]
  }
];

interface ProjectsSectionProps {
  onSelectProject?: (project: ProjectData) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32">
      
      <FadeIn y={40}>
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
          Project
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto flex flex-col mt-10">
        {PROJECTS.map((proj, i) => (
          <ProjectCard 
            key={proj.num} 
            index={i} 
            totalCards={PROJECTS.length} 
            project={proj} 
            onSelect={() => onSelectProject?.(proj)} 
          />
        ))}
      </div>

    </section>
  );
}

const ProjectCard = ({ index, totalCards, project, onSelect }: { index: number, totalCards: number, project: ProjectData, onSelect: () => void }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end start']
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={wrapperRef} className="h-[85vh] sm:h-[100vh] flex justify-center w-full relative">
      <motion.div 
        style={{ 
          scale,
          top: `calc(6rem + ${index * 28}px)`
        }}
        className="sticky w-full max-w-6xl flex flex-col bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 h-fit will-change-transform shadow-2xl"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8 gap-4 md:gap-0">
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">
            <span className="font-black text-[#D7E2EA] text-[clamp(3rem,10vw,140px)] leading-none">
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="uppercase text-[#D7E2EA]/60 font-medium tracking-wider text-xs sm:text-sm mb-1">
                {project.category}
              </span>
              <h3 className="uppercase text-[#D7E2EA] font-medium text-[clamp(1.2rem,3vw,2.5rem)] leading-none">
                {project.name}
              </h3>
            </div>
          </div>
          <button onClick={onSelect} className="group relative">
            <LiveProjectButton label="View Details" className="pointer-events-none" />
          </button>
        </div>

        {/* Bottom Row - Grid */}
        <div className="flex flex-col md:flex-row gap-4 h-full">
          {/* Left Column (40%) */}
          <div className="w-full md:w-[40%] flex flex-col gap-4">
            <img 
              src={project.imgs[0]} 
              alt={`${project.name} 1`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img 
              src={project.imgs[1]} 
              alt={`${project.name} 2`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex-1"
              style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>

          {/* Right Column (60%) */}
          <div className="w-full md:w-[60%] flex">
            <img 
              src={project.imgs[2]} 
              alt={`${project.name} 3`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] min-h-[300px] md:min-h-0"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
