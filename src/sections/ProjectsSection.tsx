import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { FadeIn } from '../components/FadeIn';
import type { ProjectData } from '../components/ProjectModal';

import fintaxHero from '../assets/fintaxvers/hero.png';
import fintaxServices from '../assets/fintaxvers/services.png';
import fintaxResources from '../assets/fintaxvers/resources.png';

import silverOakHero from '../assets/silveroak/hero.png';
import silverOakSpecialties from '../assets/silveroak/specialties.png';
import silverOakLocation from '../assets/silveroak/location.png';

import instaImg from '../assets/social_seo/instagram.png';
import whatsappImg from '../assets/social_seo/whatsapp.png';
import seoImg from '../assets/social_seo/seo.png';

export const PROJECTS: ProjectData[] = [
  {
    num: '01',
    category: 'FinTech & Tax Portal',
    name: 'FinTaxVers',
    description: 'Comprehensive financial & tax consultancy platform based in Nagpur. Features seamless ITR filing, GST registration & returns, company incorporation, MCA compliance, CMA data & project financing, interactive tax calculators, and a hub with 33+ verified financial & government resources.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Node.js', 'Tax Automation'],
    liveUrl: 'https://fintaxvers.com',
    imgs: [
      fintaxHero,
      fintaxServices,
      fintaxResources
    ]
  },
  {
    num: '02',
    category: 'Hospitality & Fine Dining',
    name: 'Hotel Silver Oak',
    description: 'A premium fine dining restaurant web platform designed for Hotel Silver Oak in Wagholi, Pune. Features an elegant interactive menu, signature North Indian, Tandoori, Chinese & Seafood dish showcases, instant online order integration, 4★ Google rating highlights, and integrated location routing.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Google Maps API', 'Online Reservation'],
    liveUrl: 'https://hotelsilveroak.netlify.app/',
    imgs: [
      silverOakHero,
      silverOakSpecialties,
      silverOakLocation
    ]
  },
  {
    num: '03',
    category: 'Social Growth & SEO Engine',
    name: 'Social, WhatsApp & SEO Suite',
    description: 'All-in-one organic growth, automated messaging, and search ranking suite. Features end-to-end Instagram page handling with viral content strategy, WhatsApp Business catalog & chatbot automated lead capture, and technical Google SEO building for #1 local search visibility.',
    techStack: ['Instagram Management', 'WhatsApp Business API', 'Local Google SEO', 'Meta Suite', 'Chatbot Automation', 'Keyword Strategy'],
    liveUrl: 'https://nexoranow.com',
    imgs: [
      instaImg,
      whatsappImg,
      seoImg
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
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto flex flex-col mt-10">
        {PROJECTS.map((proj, i) => (
          <ProjectCard 
            key={proj.num} 
            index={i} 
            totalCards={PROJECTS.length} 
            project={proj} 
            onSelectProject={onSelectProject}
          />
        ))}
      </div>

    </section>
  );
}

const ProjectCard = ({ index, totalCards, project, onSelectProject }: { index: number, totalCards: number, project: ProjectData, onSelectProject?: (p: ProjectData) => void }) => {
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
          <LiveProjectButton 
            label="Live Project"
            onClick={() => onSelectProject && onSelectProject(project)}
          />
        </div>

        {/* Bottom Row - Grid */}
        <div className="flex flex-col md:flex-row gap-4 h-full">
          {/* Left Column (40%) */}
          <div className="w-full md:w-[40%] flex flex-col gap-4">
            <img 
              src={project.imgs[0]} 
              alt={`${project.name} 1`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] cursor-pointer hover:opacity-90 transition-opacity"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              onClick={() => onSelectProject && onSelectProject(project)}
            />
            <img 
              src={project.imgs[1]} 
              alt={`${project.name} 2`}
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] flex-1 cursor-pointer hover:opacity-90 transition-opacity"
              style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}
              onClick={() => onSelectProject && onSelectProject(project)}
            />
          </div>

          {/* Right Column (60%) */}
          <div className="w-full md:w-[60%] flex">
            <img 
              src={project.imgs[2]} 
              alt={`${project.name} 3`}
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] min-h-[300px] md:min-h-0 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => onSelectProject && onSelectProject(project)}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
