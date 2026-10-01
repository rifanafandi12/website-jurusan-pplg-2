import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Sambutan', path: '/sambutan' },
  { name: 'Pengajar', path: '/pengajar' },
  { name: 'Profil', path: '/profil' },
  { name: 'Struktur', path: '/struktur' },
  { name: 'Momen', path: '/momen' },
  { name: 'Tentang', path: '/tentang' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Tutup menu saat pindah halaman
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Tutup menu saat klik di luar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Kunci scroll saat menu terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-white/90 dark:bg-ink-950/90 backdrop-blur-md border-b border-ink-200 dark:border-ink-800'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/gambar/Logo-RPL.png"
              alt="Logo RPL"
              className="w-9 h-9 object-contain"
            />
            <div className="leading-tight hidden sm:block">
              <p className="text-[13px] font-semibold text-ink-900 dark:text-ink-50 tracking-tight">
                PPLG 2
              </p>
              <p className="text-[11px] text-ink-500 dark:text-ink-400">
                SMKN 1 Beringin
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-[13px] tracking-wide transition-colors ${
                    active
                      ? 'text-ink-900 dark:text-ink-50 font-medium'
                      : 'text-ink-500 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-50'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent-500" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="https://www.instagram.com/_softring2/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center h-9 px-4 text-[13px] font-medium text-ink-900 dark:text-ink-50 border border-ink-300 dark:border-ink-700 rounded-md hover:bg-ink-100 dark:hover:bg-ink-900 transition-colors"
            >
              Instagram
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
              aria-expanded={isOpen}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-ink-700 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-900 rounded-md transition-colors"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white dark:bg-ink-950 border-t border-ink-200 dark:border-ink-800"
          >
            <div className="px-6 py-5 space-y-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center min-h-[44px] py-2.5 text-[15px] border-b border-ink-100 dark:border-ink-900 last:border-0 transition-colors ${
                    location.pathname === link.path
                      ? 'text-accent-600 dark:text-accent-400 font-medium'
                      : 'text-ink-700 dark:text-ink-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}