import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { FadeIn } from '../components/FadeIn';
import { SectionLabel } from '../components/SectionLabel';
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
    <section id="projects" className="relative z-20 border-t border-line bg-ink px-5 pt-28 pb-24 sm:px-8 sm:pt-36 sm:pb-32">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn y={10}>
          <SectionLabel index="03">Selected work</SectionLabel>
        </FadeIn>

        <div className="mt-6 flex items-start gap-3 overflow-hidden sm:gap-5">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3.6rem,14vw,14rem)] font-medium leading-[0.9] tracking-[-0.06em] text-bone"
          >
            Projects
          </motion.h2>
          <span className="mt-[1.2vw] font-mono text-[clamp(0.8rem,1.4vw,1.2rem)] text-accent">({String(PROJECTS.length).padStart(2, '0')})</span>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1400px] flex-col sm:mt-16">
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

const ProjectImage = ({ src, alt, className = '', style, onClick }: { src: string; alt: string; className?: string; style?: React.CSSProperties; onClick?: () => void }) => (
  <button type="button" onClick={onClick} className={`group/img relative block w-full overflow-hidden rounded-[16px] bg-ink-3 ${className}`} style={style} aria-label={`Open ${alt}`}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/img:scale-[1.04]"
    />
  </button>
);

const ProjectCard = ({ index, totalCards, project, onSelectProject }: { index: number, totalCards: number, project: ProjectData, onSelectProject?: (p: ProjectData) => void }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end start']
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.04;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const open = () => onSelectProject && onSelectProject(project);

  return (
    <div ref={wrapperRef} className="relative flex h-[85vh] w-full justify-center sm:h-[100vh]">
      <motion.div
        style={{
          scale,
          top: `calc(6rem + ${index * 24}px)`
        }}
        className="sticky flex h-fit w-full origin-top flex-col rounded-[28px] border border-line bg-ink-2 p-3 shadow-[0_-30px_60px_rgba(0,0,0,0.45)] will-change-transform sm:p-5"
      >
        {/* Top Row */}
        <div className="flex flex-col justify-between gap-5 px-2 pt-2 pb-5 sm:px-3 sm:pb-6 md:flex-row md:items-end">
          <div className="flex items-end gap-5 sm:gap-8">
            <span className="font-mono text-[12px] text-mute">
              <span className="text-accent">{project.num}</span> / {String(totalCards).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">
                {project.category}
              </span>
              <h3 className="text-[clamp(1.6rem,3.4vw,3rem)] font-medium leading-none tracking-[-0.04em] text-bone">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton label="View project" onClick={open} />
        </div>

        {/* Bottom Row - Grid */}
        <div className="flex flex-col gap-3 md:flex-row">
          {/* Left Column (40%) */}
          <div className="flex w-full flex-col gap-3 md:w-[40%]">
            <ProjectImage src={project.imgs[0]} alt={`${project.name} 1`} onClick={open} style={{ height: 'clamp(130px, 16vw, 230px)' }} />
            <ProjectImage src={project.imgs[1]} alt={`${project.name} 2`} onClick={open} className="hidden flex-1 sm:block" style={{ minHeight: 'clamp(160px, 20vw, 300px)' }} />
          </div>

          {/* Right Column (60%) */}
          <div className="flex w-full md:w-[60%]">
            <ProjectImage src={project.imgs[2]} alt={`${project.name} 3`} onClick={open} className="min-h-[220px] sm:min-h-[300px] md:min-h-0" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
