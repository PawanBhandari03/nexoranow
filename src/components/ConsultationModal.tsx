import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollLock } from '../lib/smoothScroll';
import { CONTACT_EMAIL, sendInquiry, type InquiryResult } from '../lib/inquiry';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

const EMPTY = { name: '', email: '', company: '', projectDetails: '' };

const inputClass =
  'w-full rounded-2xl border border-line bg-ink px-4 py-3.5 text-[15px] text-bone placeholder-bone/25 transition-colors duration-300 focus:border-bone/60 focus:outline-none';
const labelClass = 'font-mono text-[11px] uppercase tracking-[0.14em] text-mute';

export function ConsultationModal({ isOpen, onClose, initialPlan }: ConsultationModalProps) {
  const [formData, setFormData] = useState(EMPTY);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error' | InquiryResult>('idle');
  const [sentTo, setSentTo] = useState('');

  useScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // Start fresh each time the modal opens after a completed request
  useEffect(() => {
    if (isOpen) setStatus((s) => (s === 'sent' || s === 'mailto' ? 'idle' : s));
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const result = await sendInquiry(`Consultation request — ${formData.name}${initialPlan ? ` (${initialPlan})` : ''}`, {
        Name: formData.name,
        Email: formData.email,
        Company: formData.company,
        Plan: initialPlan ?? '',
        'Project details': formData.projectDetails,
      });
      setSentTo(formData.email);
      setFormData(EMPTY);
      setStatus(result);
    } catch {
      setStatus('error');
    }
  };

  const done = status === 'sent' || status === 'mailto';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="consultation-title">
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
            data-lenis-prevent
            className="relative max-h-[92svh] w-full max-w-2xl overflow-y-auto rounded-t-[28px] border border-line bg-ink-2 p-6 shadow-2xl sm:rounded-[28px] sm:p-10"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-line text-bone transition-all duration-500 hover:rotate-90 hover:border-bone sm:right-6 sm:top-6"
            >
              <X size={18} />
            </button>

            {!done ? (
              <>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">Free · 30 minutes</span>
                <h2 id="consultation-title" className="mt-3 pr-12 text-[clamp(1.9rem,4vw,2.8rem)] font-medium leading-[1.02] tracking-[-0.045em] text-bone">
                  Book a free <span className="serif-accent text-accent">consultation</span>
                </h2>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-bone/60">
                  {initialPlan
                    ? `You've picked the ${initialPlan}. Tell us a little about the project and we'll take it from there.`
                    : "Let's discuss how we can help your business scale with AI and custom software."}
                </p>

                <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-2">
                      <span className={labelClass}>Full name</span>
                      <input required type="text" autoComplete="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} placeholder="Your name" />
                    </label>
                    <label className="flex flex-col gap-2">
                      <span className={labelClass}>Work email</span>
                      <input required type="email" autoComplete="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="you@company.com" />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2">
                    <span className={labelClass}>Company <span className="normal-case tracking-normal text-bone/30">(optional)</span></span>
                    <input type="text" autoComplete="organization" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass} placeholder="Company name" />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className={labelClass}>Project details</span>
                    <textarea required rows={4} value={formData.projectDetails} onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })} className={`${inputClass} resize-none`} placeholder="What are you building, and what's the timeline?" />
                  </label>

                  {status === 'error' && (
                    <p className="text-[13px] text-accent" aria-live="polite">
                      Something went wrong — please email us at {CONTACT_EMAIL}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group mt-2 flex w-full items-center justify-between rounded-full bg-accent py-2 pl-6 pr-2 text-[15px] font-medium text-on-accent transition-colors duration-300 hover:bg-bone hover:text-ink disabled:opacity-60"
                  >
                    <span className="roll">
                      <span>{status === 'sending' ? 'Sending…' : 'Submit request'}</span>
                      <span>{status === 'sending' ? 'Sending…' : 'Submit request'}</span>
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-bone">
                      <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:rotate-45" />
                    </span>
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex min-h-[300px] flex-col justify-between gap-10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-on-accent">
                  <Check size={22} />
                </span>
                <div>
                  <h2 className="text-[clamp(1.8rem,3.6vw,2.6rem)] font-medium leading-tight tracking-[-0.04em] text-bone">
                    {status === 'sent' ? (
                      <>Request received. <span className="serif-accent text-accent">Talk soon.</span></>
                    ) : (
                      <>Almost there — <span className="serif-accent text-accent">hit send</span> in your email app.</>
                    )}
                  </h2>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-bone/60">
                    {status === 'sent'
                      ? `We'll reply to ${sentTo} within 24 hours to find a time that works.`
                      : `We've opened a pre-filled email to ${CONTACT_EMAIL}. If nothing opened, write to us there directly.`}
                  </p>
                </div>
                <button type="button" onClick={onClose} className="link-line self-start text-[14px] text-bone/70 hover:text-bone">
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
