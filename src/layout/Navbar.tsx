import { FadeIn } from '../components/FadeIn';

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
        <FadeIn delay={0} y={-20} className="w-full">
          <div className="flex justify-between w-full">
            <a href="#about" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
              About
            </a>
            <a href="#services" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
              Services
            </a>
            <a href="#projects" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
              Projects
            </a>
            <a href="#contact" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
              Contact
            </a>
          </div>
        </FadeIn>
      </div>
    </nav>
  );
}
