import { motion } from 'motion/react';
import { BookOpen, Users, Cpu, Building2 } from 'lucide-react';

const milestones = [
  {
    tahun: '2012',
    judul: 'Berdirinya Jurusan RPL',
    deskripsi:
      'Jurusan Rekayasa Perangkat Lunak (RPL) menjadi salah satu dari dua jurusan pertama yang berdiri di SMK Negeri 1 Beringin. Pembukaan jurusan ini menjawab kebutuhan industri teknologi informasi yang terus berkembang di wilayah Deli Serdang.',
  },
  {
    tahun: '2020',
    judul: 'Pergantian Kepemimpinan',
    deskripsi:
      'Ketua jurusan dipercayakan kepada Ibu Irmala, S.Kom, menggantikan kepemimpinan sebelumnya. Di bawah arahan beliau, kurikulum dan fasilitas laboratorium mulai ditata ulang untuk mengikuti perkembangan teknologi terkini.',
  },
  {
    tahun: '2021',
    judul: 'Transisi Menjadi PPLG',
    deskripsi:
      'Seiring ditunjuknya SMK Negeri 1 Beringin sebagai Sekolah Pusat Keunggulan, nama jurusan berubah menjadi Pengembangan Perangkat Lunak dan GIM (PPLG). Kurikulum kelas X disesuaikan dengan standar industri, mencakup pemrograman web, mobile, dan pengembangan gim.',
  },
  {
    tahun: '2024',
    judul: 'Lebih dari 540 Alumni',
    deskripsi:
      'Hingga tahun ajaran ini, jurusan telah meluluskan lebih dari 540 siswa yang tersebar di berbagai instansi pemerintahan, perusahaan swasta, industri teknologi, maupun melanjutkan studi ke perguruan tinggi.',
  },
];

const fasilitas = [
  {
    icon: Cpu,
    judul: 'Laboratorium Komputer',
    deskripsi:
      '43 unit komputer desktop ditambah 10 laptop yang siap digunakan untuk praktik pemrograman sehari-hari.',
  },
  {
    icon: BookOpen,
    judul: 'Kurikulum Industri',
    deskripsi:
      'Materi pembelajaran diselaraskan dengan kebutuhan dunia usaha dan dunia industri teknologi informasi.',
  },
  {
    icon: Users,
    judul: 'Praktik Kerja Industri',
    deskripsi:
      'Kemitraan dengan berbagai lembaga dan perusahaan untuk program Praktik Kerja Industri (Prakerin) siswa.',
  },
  {
    icon: Building2,
    judul: 'Tiga Rombongan Belajar',
    deskripsi:
      'Setiap tingkat (X, XI, XII) memiliki tiga rombel, dengan total sembilan kelas aktif setiap tahun ajaran.',
  },
];

export default function ProfilPage() {
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
              Profil jurusan
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 leading-[1.1]">
            Perjalanan{' '}
            <span className="font-serif italic text-accent-600 dark:text-accent-400">
              satu dekade
            </span>{' '}
            PPLG.
          </h1>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300 max-w-xl">
            Dari sebuah jurusan bernama RPL hingga menjadi salah satu kompetensi
            keahlian unggulan di SMK Negeri 1 Beringin.
          </p>
        </motion.div>

        {/* Timeline */}
        <section className="mt-20">
          <h2 className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-400 dark:text-ink-500 mb-10">
            Linimasa
          </h2>

          <div className="relative">
            {/* Garis vertikal */}
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-ink-200 dark:bg-ink-800 hidden sm:block" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.tahun}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative grid sm:grid-cols-12 gap-4 sm:gap-8"
                >
                  {/* Titik marker */}
                  <div className="hidden sm:flex sm:col-span-1 items-start justify-center pt-1.5">
                    <span className="w-3 h-3 rounded-full border-2 border-accent-500 bg-ink-50 dark:bg-ink-950 relative z-10" />
                  </div>

                  {/* Tahun */}
                  <div className="sm:col-span-2">
                    <p className="font-serif text-2xl text-accent-600 dark:text-accent-400 leading-none">
                      {m.tahun}
                    </p>
                  </div>

                  {/* Konten */}
                  <div className="sm:col-span-9">
                    <h3 className="text-[15px] font-semibold text-ink-900 dark:text-ink-50">
                      {m.judul}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl text-justify">
                      {m.deskripsi}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fasilitas */}
        <section className="mt-24 pt-16 border-t border-ink-200 dark:border-ink-800">
          <h2 className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-400 dark:text-ink-500 mb-10">
            Fasilitas
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {fasilitas.map((f, i) => (
              <motion.div
                key={f.judul}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <f.icon
                  size={20}
                  strokeWidth={1.5}
                  className="text-accent-500 mb-4"
                />
                <h3 className="text-[14px] font-semibold text-ink-900 dark:text-ink-50">
                  {f.judul}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-500 dark:text-ink-400">
                  {f.deskripsi}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
