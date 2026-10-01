import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Aktifkan tema terang' : 'Aktifkan tema gelap'}
      className="w-9 h-9 flex items-center justify-center rounded-md border border-ink-200 dark:border-ink-800 text-ink-500 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-50 hover:border-ink-300 dark:hover:border-ink-700 transition-colors"
    >
      {isDark ? (
        <Sun size={15} strokeWidth={1.5} />
      ) : (
        <Moon size={15} strokeWidth={1.5} />
      )}
    </button>
  );
}
