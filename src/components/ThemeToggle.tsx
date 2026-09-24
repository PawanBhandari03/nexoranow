import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../lib/theme';

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        toggle({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      }}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      title={isLight ? 'Dark mode' : 'Light mode'}
      className={`relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line text-bone transition-colors duration-300 hover:border-bone ${className}`}
    >
      <Sun
        size={17}
        className={`absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isLight ? 'translate-y-0 rotate-0 opacity-100' : 'translate-y-6 rotate-90 opacity-0'}`}
      />
      <Moon
        size={17}
        className={`absolute transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isLight ? '-translate-y-6 -rotate-90 opacity-0' : 'translate-y-0 rotate-0 opacity-100'}`}
      />
    </button>
  );
}
