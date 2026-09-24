import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { ContactButton } from './ContactButton';
import { useEffect } from 'react';
import { useScrollLock } from '../lib/smoothScroll';

export interface ProjectData {
  num: string;
  category: string;
  name: string;
  imgs: string[];
  description?: string;
  techStack?: string[];
  liveUrl?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onBookCall: () => void;
}

export function ProjectModal({ project, onClose, onBookCall }: ProjectModalProps) {
  useScrollLock(!!project);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6 md:p-8" role="dialog" aria-modal="true" aria-labelledby="project-title">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/70 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex max-h-[92svh] w-full max-w-6xl flex-col overflow-hidden rounded-t-[28px] border border-line bg-ink-2 shadow-2xl sm:rounded-[28px]"
          >
            {/* Header */}
            <div className="flex shrink-0 items-start justify-between gap-4 border-b border-line p-6 sm:p-8">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">
                  <span className="text-accent">{project.num}</span> — {project.category}
                </span>
                <h2 id="project-title" className="text-[clamp(1.7rem,3.6vw,3rem)] font-medium leading-none tracking-[-0.045em] text-bone">
                  {project.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-bone transition-all duration-500 hover:rotate-90 hover:border-bone"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Body - Scrollable */}
            <div data-lenis-prevent className="flex-1 space-y-6 overflow-y-auto p-6 sm:p-8">
              {(project.description || (project.techStack && project.techStack.length > 0)) && (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:items-end">
                  <div className="space-y-5 md:col-span-8">
                    {project.description && (
                      <p className="text-[16px] leading-relaxed text-bone/75 sm:text-[17px]">
                        {project.description}
                      </p>
                    )}
                    {project.techStack && project.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-bone/65">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {project.liveUrl && (
                    <div className="md:col-span-4 md:justify-self-end">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 rounded-full bg-bone py-2 pl-5 pr-2 text-[14px] font-medium text-ink transition-colors duration-300 hover:bg-accent hover:text-on-accent"
                      >
                        Visit {project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-bone">
                          <ArrowUpRight size={15} className="transition-transform duration-500 group-hover:rotate-45" />
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Images Grid */}
              <div className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-[18px] border border-line bg-ink-3">
                  <img src={project.imgs[0]} alt={`${project.name} preview 1`} className="h-auto w-full object-cover" />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="overflow-hidden rounded-[18px] border border-line bg-ink-3">
                    <img src={project.imgs[1]} alt={`${project.name} preview 2`} loading="lazy" className="h-auto w-full object-cover" />
                  </div>
                  <div className="overflow-hidden rounded-[18px] border border-line bg-ink-3">
                    <img src={project.imgs[2]} alt={`${project.name} preview 3`} loading="lazy" className="h-auto w-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex shrink-0 flex-col items-center justify-between gap-4 border-t border-line p-5 sm:flex-row sm:p-6">
              <p className="max-w-md text-center text-[14px] text-bone/60 sm:text-left">
                Want something like this for your business? Let&apos;s talk about your next project.
              </p>
              <ContactButton label="Book a call" onClick={onBookCall} className="w-full sm:w-auto" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
