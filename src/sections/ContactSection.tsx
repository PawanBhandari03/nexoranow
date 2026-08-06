import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Web Development',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0C0C0C]">
      {/* Background decoration - ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#B600A8]/10 via-[#7621B0]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#00D4FF]/10 to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="relative z-10">
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-[#00D4FF] uppercase mb-2">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
              Let's Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#00D4FF]">Extraordinary</span>
            </h3>
            <p className="text-[#D7E2EA]/70 text-lg mb-10 max-w-md font-light leading-relaxed">
              Ready to elevate your digital presence? Reach out to discuss your project, and we'll get back to you within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-5 relative transition-transform duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B600A8] to-[#00D4FF] opacity-20 rounded-full" />
                  <Mail className="text-[#00D4FF] relative z-10" size={20} />
                </div>
                <div>
                  <p className="text-xs text-[#D7E2EA]/50 font-bold uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:hello@nexoranow.com" className="text-white hover:text-[#00D4FF] font-semibold transition-colors">
                    hello@nexoranow.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-5 relative transition-transform duration-300 group-hover:scale-110">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B600A8] to-[#00D4FF] opacity-20 rounded-full" />
                  <MapPin className="text-[#B600A8] relative z-10" size={20} />
                </div>
                <div>
                  <p className="text-xs text-[#D7E2EA]/50 font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-semibold">Available Worldwide</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <div className="relative bg-[#0A0A0D] border border-white/10 group-hover:border-[#7621B0]/50 p-8 md:p-10 rounded-[32px] h-full shadow-[0_20px_40px_rgba(182,0,168,0.05)] transition-all duration-500">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group/input relative">
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-[#D7E2EA]/70 mb-2 ml-1">Your Name</label>
                        <div className="relative p-[1px] rounded-xl overflow-hidden focus-within:shadow-[0_0_15px_rgba(182,0,168,0.3)] transition-shadow">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#B600A8] to-[#00D4FF] opacity-10 group-focus-within/input:opacity-100 transition-opacity duration-300" />
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full relative bg-[#0C0C0C] rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none text-sm"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div className="group/input relative">
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-[#D7E2EA]/70 mb-2 ml-1">Email Address</label>
                        <div className="relative p-[1px] rounded-xl overflow-hidden focus-within:shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-shadow">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#B600A8] to-[#00D4FF] opacity-10 group-focus-within/input:opacity-100 transition-opacity duration-300" />
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full relative bg-[#0C0C0C] rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none text-sm"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="group/input relative">
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-widest text-[#D7E2EA]/70 mb-2 ml-1">Interested In</label>
                      <div className="relative p-[1px] rounded-xl overflow-hidden focus-within:shadow-[0_0_15px_rgba(182,0,168,0.3)] transition-shadow">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#B600A8] to-[#00D4FF] opacity-10 group-focus-within/input:opacity-100 transition-opacity duration-300" />
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full relative bg-[#0C0C0C] rounded-xl px-4 py-3.5 text-white focus:outline-none appearance-none text-sm"
                        >
                          <option>Full-Stack Web Development</option>
                          <option>AI Solutions & Agents</option>
                          <option>Business Automation</option>
                          <option>Custom Software Architecture</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="group/input relative">
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-[#D7E2EA]/70 mb-2 ml-1">Project Details</label>
                      <div className="relative p-[1px] rounded-xl overflow-hidden focus-within:shadow-[0_0_15px_rgba(182,0,168,0.3)] transition-shadow">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#B600A8] to-[#00D4FF] opacity-10 group-focus-within/input:opacity-100 transition-opacity duration-300" />
                        <textarea
                          id="message"
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full relative bg-[#0C0C0C] rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none resize-none text-sm"
                          placeholder="Tell us about your goals and requirements..."
                        ></textarea>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group/btn mt-2 w-full rounded-xl py-4 flex items-center justify-center transition-all duration-300 border bg-transparent border-white/20 hover:border-[#B600A8]/50 hover:bg-white/5 text-white hover:shadow-[0_0_15px_rgba(182,0,168,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="text-xs font-bold uppercase tracking-widest animate-pulse">Sending Message...</span>
                      ) : (
                        <>
                          <span className="text-xs font-bold uppercase tracking-widest">Send Message</span>
                          <Send size={16} className="ml-2 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center flex flex-col items-center justify-center h-full min-h-[300px]"
                  >
                    <div className="w-16 h-16 bg-[#B600A8]/20 border border-[#B600A8]/50 rounded-full flex items-center justify-center mb-6 text-[#00D4FF] shadow-[0_0_20px_rgba(182,0,168,0.3)]">
                      <CheckCircle size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3 uppercase tracking-wide">Message Delivered!</h4>
                    <p className="text-[#D7E2EA]/70 text-sm max-w-sm mb-8 leading-relaxed font-light">
                      Thank you <span className="text-white font-bold">{formData.name}</span>. We've received your request and will reply to <span className="text-[#00D4FF] font-semibold">{formData.email}</span> within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', service: 'Full-Stack Web Development', message: '' });
                      }}
                      className="px-6 py-3 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-colors hover:border-[#B600A8]/50"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
