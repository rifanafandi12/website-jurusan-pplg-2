import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-ink-50 dark:bg-ink-950 transition-colors duration-300">
      {/* Garis dekoratif tipis */}
      <div className="absolute top-24 left-0 right-0 hairline text-ink-400" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="w-8 h-px bg-accent-500" />
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-500 dark:text-ink-400">
            Kompetensi Keahlian
          </span>
        </motion.div>

        {/* Judul */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-4xl text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-7xl font-semibold tracking-tight text-ink-900 dark:text-ink-50"
        >
          Pengembangan Perangkat Lunak{' '}
          <span className="font-serif italic text-accent-600 dark:text-accent-400">
            & GIM
          </span>
        </motion.h1>

        {/* Deskripsi — grid 2 kolom ala editorial */}
        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 lg:col-start-8 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300"
          >
            Jurusan yang membentuk talenta digital di bidang rekayasa perangkat
            lunak, pengembangan web, aplikasi mobile, dan industri gim. Berbasis
            kurikulum industri dengan praktik kerja nyata di perusahaan mitra.
          </motion.p>
        </div>

        {/* Aksi */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <a
            href="#peluang"
            className="group inline-flex items-center gap-2 text-[13px] font-medium text-ink-900 dark:text-ink-50 border-b border-ink-900 dark:border-ink-50 pb-1 hover:text-accent-600 hover:border-accent-600 dark:hover:text-accent-400 dark:hover:border-accent-400 transition-colors"
          >
            Lihat peluang karier
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href="/profil"
            className="text-[13px] font-medium text-ink-500 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-50 transition-colors"
          >
            Profil jurusan
          </a>
        </motion.div>

        {/* Statistik — kolom dengan pembatas tipis */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-20 pt-8 border-t border-ink-200 dark:border-ink-800 grid grid-cols-3 divide-x divide-ink-200 dark:divide-ink-800"
        >
          {[
            { value: '540', suffix: '+', label: 'Alumni' },
            { value: '43', suffix: '', label: 'Unit komputer' },
            { value: '10', suffix: '+', label: 'Industri mitra' },
          ].map((s, i) => (
            <div key={s.label} className={i === 0 ? 'pr-6' : 'px-6'}>
              <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 dark:text-ink-50">
                {s.value}
                <span className="text-accent-500">{s.suffix}</span>
              </p>
              <p className="mt-1 text-[12px] tracking-wide text-ink-500 dark:text-ink-400">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
