import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-dark-800/50 rounded-full px-4 py-1.5 mb-8 border border-dark-800 backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">Available for new projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
            We Build <br className="hidden md:block" />
            <span className="text-gradient">Digital Excellence</span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Premium software solutions by Rahul & Pawan. From intelligent AI applications to scalable business automation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#contact"
              className="glow-effect flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-primary-600 hover:bg-primary-500 rounded-full transition-all"
            >
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href="#portfolio"
              className="flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-dark-800 hover:bg-dark-700 rounded-full border border-dark-700 hover:border-dark-600 transition-all"
            >
              <Terminal className="mr-2" size={20} />
              View Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
