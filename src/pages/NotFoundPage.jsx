import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center bg-ink-50 dark:bg-ink-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-accent-500" />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-500 dark:text-ink-400">
              Kesalahan 404
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 leading-[1.05]">
            Halaman ini{' '}
            <span className="font-serif italic text-accent-600 dark:text-accent-400">
              tidak ditemukan
            </span>
            .
          </h1>

          <p className="mt-8 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300 max-w-lg">
            Alamat yang Anda tuju mungkin sudah dipindahkan, dihapus, atau tidak
            pernah ada. Silakan kembali ke beranda untuk melanjutkan.
          </p>

          <div className="mt-10">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-[13px] font-medium text-ink-900 dark:text-ink-50 border-b border-ink-900 dark:border-ink-50 pb-1 hover:text-accent-600 hover:border-accent-600 dark:hover:text-accent-400 dark:hover:border-accent-400 transition-colors"
            >
              <ArrowLeft
                size={14}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              Kembali ke beranda
            </Link>
          </div>

          {/* Kode error sebagai dekorasi tipis */}
          <div className="mt-20 pt-8 border-t border-ink-200 dark:border-ink-800">
            <p className="font-mono text-[12px] text-ink-400 dark:text-ink-500">
              <span className="text-accent-500">throw new</span>{' '}
              <span className="text-emerald-600 dark:text-emerald-400">
                Error
              </span>
              <span>(</span>
              <span className="text-amber-600 dark:text-amber-400">
                "halaman tidak ditemukan"
              </span>
              <span>);</span>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
