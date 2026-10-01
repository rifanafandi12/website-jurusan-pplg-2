import { motion } from 'motion/react';
import { PenLine } from 'lucide-react';

export default function SambutanPage() {
  return (
    <main className="pt-32 pb-24 bg-ink-50 dark:bg-ink-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-accent-500" />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-500 dark:text-ink-400">
              Sambutan
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 leading-[1.1]">
            Pesan dari{' '}
            <span className="font-serif italic text-accent-600 dark:text-accent-400">
              kepala jurusan
            </span>
            .
          </h1>
        </motion.div>

        {/* Konten */}
        <div className="mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Foto + identitas */}
          <motion.aside
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-28">
              <div className="aspect-[3/4] overflow-hidden rounded-md border border-ink-200 dark:border-ink-800 bg-ink-100 dark:bg-ink-900">
                <img
                  src="/gambar/irmala.png"
                  alt="Irmala, S.Kom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-5 border-t border-ink-200 dark:border-ink-800 pt-5">
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-400 dark:text-ink-500 mb-2">
                  Kepala Kompetensi Keahlian 2024
                </p>
                <p className="text-[15px] font-semibold text-ink-900 dark:text-ink-50">
                  Irmala, S.Kom
                </p>
                <p className="text-[12px] text-ink-500 dark:text-ink-400 mt-1">
                  Pengembangan Perangkat Lunak dan GIM
                </p>
              </div>
            </div>
          </motion.aside>

          {/* Teks sambutan */}
          <motion.article
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 lg:col-start-6"
          >
            {/* Salam pembuka */}
            <div className="flex items-start gap-3 pb-8 border-b border-ink-200 dark:border-ink-800">
              <PenLine
                size={16}
                strokeWidth={1.5}
                className="text-accent-500 mt-1.5 shrink-0"
              />
              <p className="font-serif italic text-xl text-ink-700 dark:text-ink-200">
                Assalamualaikum warahmatullahi wabarakatuh.
              </p>
            </div>

            {/* Paragraf */}
            <div className="mt-8 space-y-6 text-[15px] leading-[1.75] text-ink-600 dark:text-ink-300">
              <p>
                Puji syukur kami panjatkan atas kehadirat Allah SWT, karena atas
                rahmat dan karunia-Nya kita masih diberikan kesempatan untuk
                terus berkarya dalam dunia pendidikan. Pada kesempatan ini, saya
                selaku kepala Kompetensi Keahlian Pengembangan Perangkat Lunak
                dan GIM merasa berbahagia dapat menyambut Anda semua di halaman
                resmi jurusan ini.
              </p>
              <p>
                Seiring dengan perkembangan teknologi komputer yang berlangsung
                sangat cepat, Kompetensi Keahlian PPLG diarahkan pada penguasaan
                ilmu dan keterampilan rekayasa perangkat lunak yang berlandaskan
                pada kemampuan untuk memahami, menganalisis, menilai,
                menerapkan, serta menciptakan piranti lunak dalam pengolahan
                dengan komputer.
              </p>
              <p>
                Kompetensi Keahlian PPLG bertujuan memenuhi kebutuhan sumber
                daya manusia yang profesional di bidang teknologi informasi.
                Untuk menjembatani kepentingan industri dan masyarakat profesi
                dengan kepentingan pendidikan, kami menyusun kurikulum yang
                selaras dengan kebutuhan dunia usaha dan dunia industri. Siswa
                juga dibekali program Praktik Kerja Industri sebagai wadah
                penerapan ilmu di lapangan.
              </p>
              <p>
                Melalui program ini, kami berharap dapat menghasilkan lulusan
                yang memiliki kemampuan merencanakan sistem informasi, menguasai
                dasar ilmu dan teknologi informasi sebagai landasan studi
                lanjutan, memiliki daya saing, jiwa kewirausahaan, serta wawasan
                teknologi informasi yang memadai. Dengan demikian, lulusan tidak
                akan gagap ketika tiba waktunya menerapkan ilmunya di
                masyarakat.
              </p>
              <p>
                Demikian yang dapat saya sampaikan. Semoga halaman ini
                bermanfaat bagi kita semua, dan semoga Allah SWT senantiasa
                memberikan bimbingan serta petunjuk-Nya kepada kita dalam
                menjalankan aktivitas sehari-hari.
              </p>
            </div>

            {/* Tanda tangan */}
            <div className="mt-12 pt-8 border-t border-ink-200 dark:border-ink-800">
              <p className="font-serif italic text-lg text-ink-700 dark:text-ink-200">
                Wassalamualaikum warahmatullahi wabarakatuh.
              </p>
              <div className="mt-8">
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-400 dark:text-ink-500 mb-3">
                  Hormat kami
                </p>
                <p className="text-[15px] font-semibold text-ink-900 dark:text-ink-50">
                  Irmala, S.Kom
                </p>
                <p className="text-[12px] text-ink-500 dark:text-ink-400 mt-1">
                  Kepala Kompetensi Keahlian PPLG
                </p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </main>
  );
}
