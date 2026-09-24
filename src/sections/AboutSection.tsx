import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { RevealText } from '../components/RevealText';
import { SectionLabel } from '../components/SectionLabel';

const FEATURES = [
  { title: 'AI Automation', desc: 'Automate repetitive workflows and business operations.' },
  { title: 'AI Agents', desc: 'Custom AI assistants designed for your company.' },
  { title: 'Full Stack Development', desc: 'Modern scalable web applications built for growth.' },
  { title: 'SaaS Solutions', desc: 'End-to-end software products from idea to deployment.' },
];

export function AboutSection() {
  return (
    <section id="about" className="relative px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto w-full max-w-[1400px]">
        <FadeIn y={10}>
          <SectionLabel index="01">About</SectionLabel>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Left column */}
          <div className="lg:col-span-7">
            <RevealText
              text={'Building intelligent software for businesses that want to *scale.*'}
              className="text-[clamp(2.2rem,4.6vw,4.5rem)] font-medium leading-[1] tracking-[-0.04em] text-bone"
            />

            <div className="mt-12 max-w-[640px]">
              <AnimatedText
                text="We're Rahul and Pawan, founders of NexoraNow. We partner with startups and growing businesses to build AI-powered software, intelligent automation, and modern web applications. From custom SaaS platforms and AI agents to workflow automation and enterprise software, we build technology that helps companies save time, improve efficiency, and grow faster."
                className="text-left justify-start text-[clamp(1.05rem,1.45vw,1.3rem)] leading-[1.55] text-bone"
              />
            </div>

            <FadeIn delay={0.1} className="mt-12">
              <LiveProjectButton label="View our projects" href="#projects" />
            </FadeIn>
          </div>

          {/* Right column — studio card */}
          <FadeIn delay={0.15} className="lg:col-span-5 lg:col-start-8">
            <div className="rounded-[28px] border border-line bg-ink-2 p-6 sm:p-8 lg:sticky lg:top-28">
              <div className="flex items-center justify-between">
                <div className="flex -space-x-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink-2 bg-bone text-[17px] font-semibold text-ink">R</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink-2 bg-accent text-[17px] font-semibold text-ink">P</span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">Founders</span>
              </div>

              <p className="mt-6 text-[19px] leading-snug tracking-[-0.01em] text-bone">
                You work directly with the two of us — the same people who scope, design and write your code.{' '}
                <span className="serif-accent text-[21px] text-mute">No account managers, no hand-offs.</span>
              </p>

              <ul className="mt-8 border-t border-line">
                {FEATURES.map((feat, i) => (
                  <li key={feat.title} className="group grid grid-cols-[2.5rem_1fr] gap-2 border-b border-line py-5 transition-colors duration-300">
                    <span className="pt-1 font-mono text-[12px] text-mute transition-colors duration-300 group-hover:text-accent">0{i + 1}</span>
                    <div className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2">
                      <h3 className="text-[18px] font-medium tracking-[-0.01em] text-bone">{feat.title}</h3>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-bone/55">{feat.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
