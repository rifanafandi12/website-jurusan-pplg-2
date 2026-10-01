import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const moments = [
  {
    tanggal: 'Juli 2022',
    judul: 'Masa Pengenalan Lingkungan Sekolah',
    deskripsi:
      'Hari pertama semua orang duduk di kelas yang sama. Belum ada yang saling kenal, tapi dalam beberapa minggu, kelas ini jadi tempat paling berisik di lantai dua.',
  },
  {
    tanggal: 'Oktober 2022',
    judul: 'Kunjungan Industri Pertama',
    deskripsi:
      'Mengunjungi perusahaan teknologi di Medan. Pertama kali melihat bagaimana kode yang dipelajari di kelas dipakai di dunia nyata.',
  },
  {
    tanggal: 'November 2022',
    judul: 'Hari Guru',
    deskripsi:
      'Kelas paling berisik di angkatan berhasil membuat wali kelas tersenyum. Foto bersama di depan kelas jadi kenangan yang sering dibuka kembali.',
  },
  {
    tanggal: 'Maret 2023',
    judul: 'Lomba Kompetensi Siswa',
    deskripsi:
      'Beberapa siswa mewakili jurusan di LKS tingkat kabupaten. Bukan juara pertama, tapi pulang dengan pengalaman yang tidak didapat di kelas.',
  },
  {
    tanggal: 'Agustus 2023',
    judul: 'Praktik Kerja Industri',
    deskripsi:
      'Tiga bulan di perusahaan mitra. Belajar bahwa deadline nyata lebih keras dari deadline tugas sekolah.',
  },
  {
    tanggal: 'Mei 2024',
    judul: 'Bakar-bakar Pasca Ujian',
    deskripsi:
      'Di rumah wali kelas. Setelah semua ujian selesai, malam itu terasa lebih ringan dari biasanya.',
  },
  {
    tanggal: 'Juni 2024',
    judul: 'Kelulusan',
    deskripsi:
      'Hari terakhir memakai seragam yang sama. Setelah ini, semua orang akan punya jalan masing-masing.',
  },
];

export default function MomenPage() {
  return (
    <>
      <Helmet>
        <title>Momen Kelas — XII PPLG 2</title>
        <meta
          name="description"
          content="Tujuh peristiwa yang membentuk tiga tahun XII PPLG 2, SMKN 1 Beringin."
        />
        <meta property="og:title" content="Momen Kelas — XII PPLG 2" />
        <meta
          property="og:description"
          content="Bukan catatan resmi, hanya apa yang kami ingat."
        />
      </Helmet>

      <main className="pt-32 pb-24 bg-ink-50 dark:bg-ink-950 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
                Momen kelas
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 leading-[1.1]">
              Tujuh peristiwa yang{' '}
              <span className="font-serif italic text-accent-600 dark:text-accent-400">
                membentuk
              </span>{' '}
              tiga tahun kami.
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300">
              Bukan catatan resmi, hanya apa yang kami ingat. Beberapa tanggal
              mungkin bergeser dari yang sebenarnya — tapi yang pasti, semua ini
              pernah terjadi.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="mt-20 relative">
            <div className="absolute left-[3px] top-2 bottom-2 w-px bg-ink-200 dark:bg-ink-800" />

            <div className="space-y-16">
              {moments.map((m, i) => (
                <motion.article
                  key={m.judul}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="relative grid grid-cols-12 gap-4 sm:gap-8 pl-6 sm:pl-10"
                >
                  <span className="absolute left-0 top-2 w-[7px] h-[7px] rounded-full bg-accent-500 ring-4 ring-ink-50 dark:ring-ink-950" />

                  <div className="col-span-12 sm:col-span-3">
                    <p className="font-mono text-[12px] tracking-wide text-ink-400 dark:text-ink-500">
                      {m.tanggal}
                    </p>
                  </div>

                  <div className="col-span-12 sm:col-span-9">
                    <h3 className="text-[17px] font-semibold tracking-tight text-ink-900 dark:text-ink-50">
                      {m.judul}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.75] text-ink-600 dark:text-ink-300 text-justify">
                      {m.deskripsi}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Penutup */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mt-24 pt-8 border-t border-ink-200 dark:border-ink-800"
          >
            <p className="font-serif italic text-xl text-ink-700 dark:text-ink-200">
              Mungkin masih ada yang lupa kami catat. Tapi itu tidak masalah —
              yang penting kita pernah melaluinya.
            </p>
          </motion.div>
        </div>
      </main>
    </>
  );
}