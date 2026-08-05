import { Globe, MessageCircle, Briefcase, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-950 border-t border-dark-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tighter text-white block mb-4">
              Nexora<span className="text-primary-500">Now</span>
            </a>
            <p className="text-gray-400 text-sm mb-6">
              Premium software solutions by Rahul & Pawan. We turn ambitious ideas into scalable digital realities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Social</span>
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Portfolio</span>
                <Briefcase size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Website</span>
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Full-Stack Development</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">AI & Machine Learning</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Business Automation</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Custom Software</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-400">
                <Mail size={16} className="mr-2 text-primary-500" />
                hello@nexoranow.com
              </li>
              <li className="text-sm text-gray-400 mt-4">
                Available for new projects worldwide. Let's build something great together.
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} NexoraNow. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
