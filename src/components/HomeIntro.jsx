// src/components/HomeIntro.jsx
import { motion } from 'motion/react';

export default function HomeIntro() {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-ink-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Kolom kiri — paragraf utama */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-accent-500" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-500 dark:text-ink-400">
                Pengantar
              </span>
            </div>

            <p className="text-2xl sm:text-3xl lg:text-[2rem] leading-[1.35] tracking-tight text-ink-900 dark:text-ink-50">
              Kami adalah kelas yang tumbuh dari kebiasaan kecil —{' '}
              <span className="font-serif italic text-accent-600 dark:text-accent-400">
                belajar bersama
              </span>
              , tertawa bersama, dan pada akhirnya lulus bersama.
            </p>

            <p className="mt-8 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl text-justify">
              Selama tiga tahun, XII PPLG 2 menyusun ulang cara kami memandang
              teknologi: bukan sebagai alat, melainkan sebagai cara berpikir.
              Dari baris kode pertama hingga proyek akhir, setiap langkah
              meninggalkan cerita yang kami simpan di halaman ini.
            </p>
          </motion.div>

          {/* Kolom kanan — metadata ringkas */}
          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 lg:col-start-9 lg:pt-20"
          >
            <dl className="divide-y divide-ink-200 dark:divide-ink-800 border-t border-b border-ink-200 dark:border-ink-800">
              <div className="py-4 flex justify-between items-baseline">
                <dt className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-400 dark:text-ink-500">
                  Angkatan
                </dt>
                <dd className="text-[13px] font-medium text-ink-900 dark:text-ink-50">
                  2022 – 2024
                </dd>
              </div>
              <div className="py-4 flex justify-between items-baseline">
                <dt className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-400 dark:text-ink-500">
                  Jumlah siswa
                </dt>
                <dd className="text-[13px] font-medium text-ink-900 dark:text-ink-50">
                  29 orang
                </dd>
              </div>
              <div className="py-4 flex justify-between items-baseline">
                <dt className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-400 dark:text-ink-500">
                  Wali kelas
                </dt>
                <dd className="text-[13px] font-medium text-ink-900 dark:text-ink-50">
                  Yuli Safira, S.Kom
                </dd>
              </div>
              <div className="py-4 flex justify-between items-baseline">
                <dt className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-400 dark:text-ink-500">
                  Jurusan
                </dt>
                <dd className="text-[13px] font-medium text-ink-900 dark:text-ink-50">
                  PPLG
                </dd>
              </div>
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
