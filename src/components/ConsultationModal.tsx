import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export function ConsultationModal({ isOpen, onClose, initialPlan }: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectDetails: '',
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', { ...formData, plan: initialPlan });
    alert("Thank you! We'll be in touch shortly.");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
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
            className="relative w-full max-w-2xl bg-[#111] border-2 border-white/10 rounded-[30px] p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh] custom-scrollbar"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 transition-colors rounded-full text-white"
            >
              <X size={20} />
            </button>

            <h2 className="text-3xl font-bold text-white mb-2">Book a Free Consultation</h2>
            <p className="text-white/60 mb-8">
              {initialPlan 
                ? `You've selected the ${initialPlan} plan. Let's discuss your requirements.` 
                : "Let's discuss how we can help your business scale with AI and custom software."}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-white/80 font-medium">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-white/80 font-medium">Work Email</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/80 font-medium">Company Name</label>
                <input 
                  type="text" 
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                  placeholder="Acme Corp"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/80 font-medium">Project Details</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                  placeholder="Tell us a bit about your project..."
                />
              </div>

              <button 
                type="submit"
                className="mt-4 w-full rounded-xl py-4 font-semibold uppercase tracking-widest text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                }}
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
