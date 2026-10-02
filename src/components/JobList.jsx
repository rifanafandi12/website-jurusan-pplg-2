import JobCard from './JobCard';
import { motion } from 'motion/react';

const jobs = [
  {
    title: 'Administrator Web',
    description:
      'Mengelola desain, penyebaran, pengembangan, dan pemeliharaan situs web. Menjamin kualitas serta pengujian aplikasi web.',
    tags: ['Situs web', 'Aplikasi web'],
  },
  {
    title: 'Pengajar',
    description:
      'Membimbing peserta didik dalam mengolah, menyimpan, dan menyebarkan informasi di bidang teknologi informasi.',
    tags: ['Pendidikan', 'Teknologi'],
  },
  {
    title: 'IT Support',
    description:
      'Memberikan bantuan teknis bagi perusahaan. Fleksibel karena mencakup bidang IT yang luas dan dinamis.',
    tags: ['Teknis', 'Perusahaan'],
  },
  {
    title: 'Information Security Analyst',
    description:
      'Mengembangkan sistem keamanan untuk melindungi jaringan dan data perusahaan dari ancaman siber.',
    tags: ['Keamanan', 'Jaringan'],
  },
  {
    title: 'Developer IT',
    description:
      'Mengembangkan perangkat lunak sesuai kebutuhan klien — aplikasi bisnis maupun permainan.',
    tags: ['Perangkat lunak', 'Klien'],
  },
  {
    title: 'Programmer',
    description:
      'Membangun program untuk mempermudah pekerjaan. Dibutuhkan hampir di seluruh industri modern.',
    tags: ['Kode', 'Industri'],
  },
  {
    title: 'System Analyst',
    description:
      'Menganalisis sistem, menimbang kelebihan dan kekurangan rancangan sebelum dikembangkan lebih lanjut.',
    tags: ['Analisis', 'Perancangan'],
  },
  {
    title: 'IT Konsultan',
    description:
      'Berperan dari perancangan hingga evaluasi penerapan teknologi informasi di sebuah perusahaan.',
    tags: ['Konsultasi', 'Evaluasi'],
  },
  {
    title: 'Database Engineer',
    description:
      'Merancang dan memonitor basis data kompleks untuk kebutuhan operasional perusahaan sehari-hari.',
    tags: ['Basis data', 'SQL'],
  },
  {
    title: 'Game Developer',
    description:
      'Merancang dan membangun perangkat lunak khusus permainan — dari mekanik hingga grafis.',
    tags: ['Gim', 'Interaktif'],
  },
  {
    title: 'Web Engineer',
    description:
      'Merancang dan membangun situs web beserta layanan yang menyertainya, dari sisi tampilan hingga server.',
    tags: ['Frontend', 'Backend'],
  },
  {
    title: 'Software Tester',
    description:
      'Menguji perangkat lunak sebelum dirilis untuk memastikan kualitas dan menemukan celah sejak dini.',
    tags: ['QA', 'Pengujian'],
  },
];

export default function JobList() {
  return (
    <section
      id="peluang"
      className="relative py-28 lg:py-36 bg-ink-50 dark:bg-ink-950 border-t border-ink-200 dark:border-ink-800 transition-colors duration-300 overflow-hidden"
    >
      {/* Ornamen latar: garis vertikal tipis */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4] dark:opacity-[0.15]">
        <div className="max-w-6xl mx-auto h-full px-6 lg:px-8 grid grid-cols-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="border-r border-ink-200/50 dark:border-ink-800/50 last:border-r-0"
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        {/* Heading editorial */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent-500" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-500 dark:text-ink-400">
                Karier
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 leading-[1.05]">
              Prospek kerja{' '}
              <span className="font-serif italic text-accent-600 dark:text-accent-400">
                lulusan
              </span>
            </h2>
          </div>
          <div className="lg:max-w-xs lg:text-right">
            <p className="text-[13px] leading-[1.75] text-ink-500 dark:text-ink-400">
              Dua belas bidang yang dapat ditekuni setelah menyelesaikan studi
              di jurusan PPLG. Setiap bidang memiliki jalur karier yang jelas di
              industri teknologi informasi.
            </p>
          </div>
        </motion.div>

        {/* Grid kartu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job, i) => (
            <JobCard key={job.title} index={i} {...job} />
          ))}
        </div>

        {/* Footer section: catatan kecil */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-ink-200 dark:border-ink-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <p className="text-[12px] font-mono tracking-wide text-ink-400 dark:text-ink-500">
            // 12 bidang · kurikulum industri · prakerin
          </p>
          <p className="text-[12px] text-ink-400 dark:text-ink-500">
            Sumber: kurikulum PPLG SMKN 1 Beringin
          </p>
        </motion.div>
      </div>
    </section>
  );
}
