import { FadeIn } from '../components/FadeIn';
import { RevealText } from '../components/RevealText';
import { SectionLabel } from '../components/SectionLabel';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const ROW1_SERVICES = [
  { num: '01', title: 'AI Automation', desc: 'Automate repetitive workflows with intelligent AI systems.' },
  { num: '02', title: 'AI Agents', desc: 'Custom AI assistants built for customer support and operations.' },
  { num: '03', title: 'Web Development', desc: 'High-performance modern websites and premium platforms.' },
  { num: '04', title: 'Custom Software', desc: 'Tailor-made business software built specifically for your workflows.' },
  { num: '05', title: 'SaaS Development', desc: 'Build scalable cloud software from MVP to enterprise.' }
];

const ROW2_SERVICES = [
  { num: '06', title: 'API Integrations', desc: 'Connect all your business tools into one ecosystem.' },
  { num: '07', title: 'Workflow Automation', desc: 'Reduce manual work through intelligent automation pipelines.' },
  { num: '08', title: 'AI Chatbots', desc: 'Smart conversational assistants trained for your business.' },
  { num: '09', title: 'Data Analytics', desc: 'Turn business data into actionable insights.' },
  { num: '10', title: 'AI Consulting', desc: 'Helping businesses adopt AI strategically.' }
];

const ROW1_ITEMS = [...ROW1_SERVICES, ...ROW1_SERVICES, ...ROW1_SERVICES, ...ROW1_SERVICES];
const ROW2_ITEMS = [...ROW2_SERVICES, ...ROW2_SERVICES, ...ROW2_SERVICES, ...ROW2_SERVICES];

type Service = (typeof ROW1_SERVICES)[number];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative flex h-[250px] w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-[24px] border border-line bg-ink-2 p-6 whitespace-normal sm:h-[270px] sm:w-[400px] sm:p-7">
      {/* Accent wipe on hover */}
      <div className="absolute inset-0 translate-y-full bg-accent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0" />

      <div className="relative flex items-start justify-between">
        <span className="font-mono text-[12px] text-mute transition-colors duration-500 group-hover:text-on-accent/60">{service.num}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-bone transition-all duration-500 group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink">
          <ArrowUpRight size={17} />
        </span>
      </div>

      <div className="relative">
        <h3 className="text-[28px] font-medium leading-none tracking-[-0.035em] text-bone transition-colors duration-500 group-hover:text-on-accent sm:text-[32px]">
          {service.title}
        </h3>
        <p className="mt-3 max-w-[90%] text-[14.5px] leading-relaxed text-bone/55 transition-colors duration-500 group-hover:text-on-accent/75">
          {service.desc}
        </p>
      </div>
    </div>
  );
}

export function MarqueeSection() {
  const { scrollY } = useScroll();

  // Transform scroll position into the desired X offsets
  const xRow1 = useTransform(scrollY, (y) => (y * 0.3) - 1000);
  const xRow2 = useTransform(scrollY, (y) => -(y * 0.3) + 200);

  // Manual scroll offsets
  const manualOffset = useMotionValue(0);
  const springOffset = useSpring(manualOffset, { stiffness: 200, damping: 30 });

  const combinedXRow1 = useTransform(() => xRow1.get() + springOffset.get());
  const combinedXRow2 = useTransform(() => xRow2.get() + springOffset.get());

  const step = () => (window.innerWidth < 640 ? 336 : 416); // card width + gap

  const handleNext = () => {
    manualOffset.set(manualOffset.get() - step());
  };

  const handlePrev = () => {
    manualOffset.set(manualOffset.get() + step());
  };

  return (
    <section id="services" className="overflow-hidden border-t border-line pt-28 pb-28 sm:pt-36 sm:pb-36">

      {/* Services Header */}
      <div className="mx-auto mb-14 flex max-w-[1400px] flex-col gap-10 px-5 sm:mb-20 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <FadeIn y={10}>
            <SectionLabel index="02">Services</SectionLabel>
          </FadeIn>
          <RevealText
            text={'Everything you need\nto *ship and scale.*'}
            className="mt-8 text-[clamp(2.2rem,4.6vw,4.5rem)] font-medium leading-[1] tracking-[-0.04em] text-bone"
          />
        </div>

        <FadeIn delay={0.2} className="flex flex-col gap-6 md:items-end">
          <p className="max-w-[380px] text-[16px] leading-relaxed text-bone/65 md:text-right">
            We build intelligent software, AI automation, and scalable digital products for modern businesses.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous services"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-bone transition-colors duration-300 hover:border-bone hover:bg-bone hover:text-ink"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next services"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-bone transition-colors duration-300 hover:border-bone hover:bg-bone hover:text-ink"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </FadeIn>
      </div>

      <div className="flex flex-col gap-4">
        {/* Row 1: Moves Right */}
        <motion.div className="flex gap-4 will-change-transform whitespace-nowrap" style={{ x: combinedXRow1 }}>
          {ROW1_ITEMS.map((service, i) => (
            <ServiceCard key={`row1-${i}`} service={service} />
          ))}
        </motion.div>

        {/* Row 2: Moves Left */}
        <motion.div className="flex gap-4 will-change-transform whitespace-nowrap" style={{ x: combinedXRow2 }}>
          {ROW2_ITEMS.map((service, i) => (
            <ServiceCard key={`row2-${i}`} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
