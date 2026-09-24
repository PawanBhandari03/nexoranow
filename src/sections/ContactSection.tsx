import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { RevealText } from '../components/RevealText';
import { SectionLabel } from '../components/SectionLabel';
import { CONTACT_EMAIL, sendInquiry, type InquiryResult } from '../lib/inquiry';

const SERVICES = [
  'Full-Stack Web Development',
  'AI Solutions & Agents',
  'Business Automation',
  'Custom Software Architecture',
];

const EMPTY = { name: '', email: '', service: SERVICES[0], message: '' };

const fieldClass =
  'peer w-full border-b border-line bg-transparent pb-3 pt-7 text-[17px] text-bone placeholder-transparent transition-colors duration-300 focus:border-bone focus:outline-none';
const labelClass =
  'pointer-events-none absolute left-0 top-7 origin-left text-[15px] text-mute transition-all duration-300 peer-focus:top-0 peer-focus:text-[11px] peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-[0.14em] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-mono peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-[0.14em]';

export function ContactSection() {
  const [formData, setFormData] = useState(EMPTY);
  const [status, setStatus] = useState<'idle' | 'sending' | 'error' | InquiryResult>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const result = await sendInquiry(`New project inquiry — ${formData.name}`, {
        Name: formData.name,
        Email: formData.email,
        'Interested in': formData.service,
        'Project details': formData.message,
      });
      setStatus(result);
    } catch {
      setStatus('error');
    }
  };

  const done = status === 'sent' || status === 'mailto';

  return (
    <section id="contact" className="border-t border-line px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-12">
        {/* Contact Info */}
        <div className="lg:col-span-5">
          <FadeIn y={10}>
            <SectionLabel index="07">Contact</SectionLabel>
          </FadeIn>
          <RevealText
            text={"Let's build\nsomething\n*worth using.*"}
            className="mt-8 text-[clamp(2.4rem,5vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.045em] text-bone"
          />
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-[400px] text-[16px] leading-relaxed text-bone/65">
              Tell us what you&apos;re working on. We read every message ourselves and reply within 24 hours.
            </p>

            <dl className="mt-12 grid max-w-[420px] grid-cols-2 gap-6 border-t border-line pt-6">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="link-line text-[15px] text-bone">{CONTACT_EMAIL}</a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">Location</dt>
                <dd className="mt-2 text-[15px] text-bone">India · Available worldwide</dd>
              </div>
            </dl>
          </FadeIn>
        </div>

        {/* Contact Form */}
        <FadeIn delay={0.15} className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-[28px] border border-line bg-ink-2 p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-8"
                >
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={fieldClass}
                      />
                      <label htmlFor="name" className={labelClass}>Your name</label>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        required
                        autoComplete="email"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={fieldClass}
                      />
                      <label htmlFor="email" className={labelClass}>Email address</label>
                    </div>
                  </div>

                  <fieldset>
                    <legend className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">Interested in</legend>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {SERVICES.map((service) => {
                        const selected = formData.service === service;
                        return (
                          <label
                            key={service}
                            className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-[14px] transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent ${
                              selected ? 'border-bone bg-bone text-ink' : 'border-line text-bone/75 hover:border-bone/50 hover:text-bone'
                            }`}
                          >
                            <input
                              type="radio"
                              name="service"
                              value={service}
                              checked={selected}
                              onChange={() => setFormData({ ...formData, service })}
                              className="sr-only"
                            />
                            {selected && <Check size={14} />}
                            {service}
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div className="relative">
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Project details"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${fieldClass} resize-none`}
                    />
                    <label htmlFor="message" className={labelClass}>Tell us about your goals and requirements</label>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[13px] text-mute" aria-live="polite">
                      {status === 'error'
                        ? <span className="text-accent">Something went wrong — please email us directly.</span>
                        : 'We usually reply within a day.'}
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group flex items-center justify-between gap-4 rounded-full bg-accent py-2 pl-6 pr-2 text-[15px] font-medium text-ink transition-colors duration-300 hover:bg-bone disabled:opacity-60"
                    >
                      <span className="roll">
                        <span>{status === 'sending' ? 'Sending…' : 'Send message'}</span>
                        <span>{status === 'sending' ? 'Sending…' : 'Send message'}</span>
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-bone">
                        <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:rotate-45" />
                      </span>
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex min-h-[380px] flex-col justify-between"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-ink">
                    <Check size={22} />
                  </span>
                  <div>
                    <h3 className="text-[clamp(1.8rem,3vw,2.6rem)] font-medium leading-tight tracking-[-0.04em] text-bone">
                      {status === 'sent' ? (
                        <>Thanks, {formData.name.split(' ')[0]}. <span className="serif-accent text-accent">Talk soon.</span></>
                      ) : (
                        <>Almost there — <span className="serif-accent text-accent">hit send</span> in your email app.</>
                      )}
                    </h3>
                    <p className="mt-4 max-w-[420px] text-[15px] leading-relaxed text-bone/60">
                      {status === 'sent'
                        ? <>We&apos;ve got your message and will reply to <span className="text-bone">{formData.email}</span> within 24 hours.</>
                        : <>We&apos;ve opened a pre-filled email to {CONTACT_EMAIL}. If nothing opened, just write to us there directly.</>}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormData(EMPTY);
                    }}
                    className="link-line self-start text-[14px] text-bone/70 hover:text-bone"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
