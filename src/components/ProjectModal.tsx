import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ContactButton } from './ContactButton';
import { useEffect } from 'react';

export interface ProjectData {
  num: string;
  category: string;
  name: string;
  imgs: string[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onBookCall: () => void;
}

export function ProjectModal({ project, onClose, onBookCall }: ProjectModalProps) {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0C0C0C]/80 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-[#111] border-2 border-white/10 rounded-[30px] sm:rounded-[40px] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 sm:p-8 border-b border-white/10 shrink-0">
              <div className="flex flex-col">
                <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs font-semibold mb-1">
                  {project.category}
                </span>
                <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">
                  {project.name}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-3 bg-white/5 hover:bg-white/10 transition-colors rounded-full text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Body - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 custom-scrollbar">
              <div className="flex flex-col gap-6">
                <img
                  src={project.imgs[0]}
                  alt={`${project.name} preview 1`}
                  className="w-full h-auto rounded-[20px] object-cover"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <img
                    src={project.imgs[1]}
                    alt={`${project.name} preview 2`}
                    className="w-full h-auto rounded-[20px] object-cover"
                  />
                  <img
                    src={project.imgs[2]}
                    alt={`${project.name} preview 3`}
                    className="w-full h-auto rounded-[20px] object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 sm:p-8 border-t border-white/10 bg-[#111]/80 backdrop-blur-md shrink-0 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white/60 text-sm max-w-md text-center sm:text-left">
                Ready to build something similar? Let's discuss your next big idea.
              </p>
              <ContactButton label="Book a Call" onClick={onBookCall} className="w-full sm:w-auto" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
