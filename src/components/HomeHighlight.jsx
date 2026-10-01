import { motion } from 'motion/react';
import CountUp from './CountUp';

const highlights = [
  {
    angka: 540,
    suffix: '+',
    label: 'Alumni tersebar',
    konteks:
      'Bekerja di instansi pemerintahan, perusahaan teknologi, hingga melanjutkan studi ke perguruan tinggi.',
  },
  {
    angka: 43,
    suffix: '',
    label: 'Komputer laboratorium',
    konteks:
      'Ditambah 10 laptop yang siap digunakan untuk praktik pemrograman harian.',
  },
  {
    angka: 9,
    suffix: '',
    label: 'Rombongan belajar',
    konteks:
      'Tiga tingkat (X, XI, XII) masing-masing tiga rombel aktif setiap tahun ajaran.',
  },
];

export default function HomeHighlight() {
  return (
    <section className="py-24 lg:py-32 bg-ink-50 dark:bg-ink-950 border-t border-ink-200 dark:border-ink-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-14">
          <span className="w-8 h-px bg-accent-500" />
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-500 dark:text-ink-400">
            Ringkasan jurusan
          </span>
        </div>

        <div className="grid sm:grid-cols-3 gap-10 lg:gap-16">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="font-serif text-5xl lg:text-6xl text-ink-900 dark:text-ink-50 leading-none">
                <CountUp to={h.angka} suffix={h.suffix} />
              </p>
              <p className="mt-5 text-[13px] font-medium text-ink-900 dark:text-ink-50">
                {h.label}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-500 dark:text-ink-400">
                {h.konteks}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
