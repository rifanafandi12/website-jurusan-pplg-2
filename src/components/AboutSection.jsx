import { motion } from 'motion/react';
import { Code2, Cpu, Rocket, Users } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Web & Mobile',
    desc: 'Pemrograman web, desktop, dan aplikasi android.',
  },
  {
    icon: Cpu,
    title: 'Hardware',
    desc: 'Dasar perangkat keras dan sistem operasi.',
  },
  {
    icon: Rocket,
    title: 'Kewirausahaan',
    desc: 'Membentuk kemandirian di bidang teknologi.',
  },
  {
    icon: Users,
    title: 'Praktik Industri',
    desc: 'Kerja sama dengan industri mitra.',
  },
];

export default function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-white dark:bg-ink-950 border-t border-ink-200 dark:border-ink-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-accent-500" />
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-500 dark:text-ink-400">
              Tentang jurusan
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 leading-[1.1]">
            Sebuah disiplin yang memadukan{' '}
            <span className="font-serif italic text-accent-600 dark:text-accent-400">
              logika
            </span>{' '}
            dan{' '}
            <span className="font-serif italic text-accent-600 dark:text-accent-400">
              kreasi
            </span>
            .
          </h2>
        </motion.div>

        {/* Konten — grid editorial */}
        <div className="mt-16 grid lg:grid-cols-12 gap-12">
          {/* Kolom kiri — paragraf */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-5 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300"
          >
            <p>
              PPLG — Pengembangan Perangkat Lunak dan GIM — merupakan jurusan
              yang sebelumnya bernama RPL (Rekayasa Perangkat Lunak). Penamaan
              ini berubah setelah SMK Negeri 1 Beringin ditunjuk sebagai sekolah
              Pusat Keunggulan dengan kurikulum yang diselaraskan dengan
              kebutuhan industri.
            </p>
            <p>
              Fokus keahlian mencakup pemrograman web, aplikasi komputer dan
              android, dengan penekanan pada praktik langsung. Siswa juga
              dibekali pemahaman perangkat keras, multimedia, dan kewirausahaan
              sebagai penunjang.
            </p>
          </motion.div>

          {/* Kolom kanan — daftar fitur */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 lg:col-start-8 divide-y divide-ink-200 dark:divide-ink-800 border-t border-b border-ink-200 dark:border-ink-800"
          >
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-4 py-4">
                <f.icon
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 text-accent-500 shrink-0"
                />
                <div>
                  <p className="text-[13px] font-medium text-ink-900 dark:text-ink-50">
                    {f.title}
                  </p>
                  <p className="text-[13px] text-ink-500 dark:text-ink-400 mt-0.5">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gambar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-20 relative rounded-lg overflow-hidden border border-ink-200 dark:border-ink-800"
        >
          <img
            src="/gambar/dalam-kelas.JPG"
            alt="Aktivitas jurusan PPLG"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
