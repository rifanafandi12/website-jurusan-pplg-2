import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const pengajar = [
  {
    nama: 'Anggun Desrivawany, S.Pd',
    bidang: 'Kepala Jurusan',
    kesan: 'Beliau yang pertama membuka pintu jurusan ini untuk kami.',
    foto: '/gambar/anggun.webp',
  },
  {
    nama: 'Irmala, S.Kom',
    bidang: 'Ketua Kompetensi Keahlian PPLG',
    kesan: 'Tenang, tegas, dan selalu punya cara agar kelas kembali fokus.',
    foto: '/gambar/irmala.webp',
  },
  {
    nama: 'Sumarno, S.Kom',
    bidang: 'Pengajar Pemrograman',
    kesan: 'Mengajarkan bahwa error bukan akhir dunia, tapi awal dari belajar.',
    foto: '/gambar/sumarno.jpeg',
  },
  {
    nama: 'Yuli Safira, S.Kom',
    bidang: 'Wali Kelas XII PPLG 2',
    kesan: 'Sabar menghadapi kelas paling berisik di angkatan.',
    foto: '/gambar/yuli.webp',
  },
  {
    nama: 'Vevy Sisnia',
    bidang: 'Pengajar Produktif',
    kesan: 'Selalu punya cara membuat materi yang rumit jadi masuk akal.',
    foto: '/gambar/vevy.webp',
  },
  {
    nama: 'Ilmiati, M.Kom',
    bidang: 'Pengajar Produktif',
    kesan: 'Menyenangkan, kadang sulit ditebak, tapi selalu membekas.',
    foto: '/gambar/pp.webp',
  },
  {
    nama: 'Mr. Sinabutar',
    bidang: 'Pengajar Produktif',
    kesan: 'Suaranya mengisi ruang kelas lebih baik daripada bel sekolah.',
    foto: '/gambar/pp.webp',
  },
  {
    nama: 'Indra Edy Syahputra, M.Kom',
    bidang: 'Pengajar Produktif',
    kesan:
      'Menunjukkan bahwa teknologi bukan cuma soal kode, tapi juga manusia.',
    foto: '/gambar/pp.webp',
  },
];

export default function PengajarPage() {
  const [active, setActive] = useState(null);

  return (
    <>
      <Helmet>
        <title>Pengajar — XII PPLG 2</title>
        <meta
          name="description"
          content="Daftar pengajar di Kompetensi Keahlian PPLG, SMK Negeri 1 Beringin."
        />
        <meta property="og:title" content="Pengajar — XII PPLG 2" />
        <meta
          property="og:description"
          content="Mereka yang membimbing kami selama tiga tahun."
        />
      </Helmet>

      <main className="bg-ink-50 dark:bg-ink-950 transition-colors duration-300">
        {/* Header foto */}
        <div className="relative h-64 lg:h-80 overflow-hidden">
          <img
            src="/slide/slide11.webp"
            alt=""
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-50 dark:from-ink-950 via-ink-950/20 to-ink-950/40" />
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent-500" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-500 dark:text-ink-400">
                Tenaga pendidik
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 leading-[1.1]">
              Mereka yang{' '}
              <span className="font-serif italic text-accent-600 dark:text-accent-400">
                membimbing
              </span>{' '}
              kami.
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300 max-w-xl">
              Daftar pengajar di Kompetensi Keahlian Pengembangan Perangkat
              Lunak dan GIM. Klik pada baris untuk membaca kesan dari kami.
            </p>
          </motion.div>

          {/* Daftar pengajar */}
          <div className="mt-16 divide-y divide-ink-200 dark:divide-ink-800 border-t border-b border-ink-200 dark:border-ink-800">
            {pengajar.map((p, i) => {
              const isActive = active === i;
              return (
                <motion.div
                  key={p.nama}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="group"
                >
                  <button
                    onClick={() => setActive(isActive ? null : i)}
                    className="w-full grid grid-cols-12 gap-4 items-center py-5 px-2 -mx-2 text-left hover:bg-white dark:hover:bg-ink-900 rounded-md transition-colors"
                  >
                    {/* Nomor urut */}
                    <div className="col-span-2 sm:col-span-1 text-[11px] font-medium tracking-[0.15em] text-ink-400 dark:text-ink-500">
                      {String(i + 1).padStart(2, '0')}
                    </div>

                    {/* Foto bulat */}
                    <div className="col-span-2 sm:col-span-1">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-ink-100 dark:bg-ink-900 border border-ink-200 dark:border-ink-800">
                        <img
                          src={p.foto}
                          alt={p.nama}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Nama & bidang */}
                    <div className="col-span-8 sm:col-span-7">
                      <p className="text-[15px] font-medium text-ink-900 dark:text-ink-50 leading-tight">
                        {p.nama}
                      </p>
                      <p className="text-[12px] text-ink-500 dark:text-ink-400 mt-0.5">
                        {p.bidang}
                      </p>
                    </div>

                    {/* Aksi */}
                    <div className="col-span-12 sm:col-span-3 flex justify-start sm:justify-end">
                      <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-400 dark:text-ink-500 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                        {isActive ? 'Tutup' : 'Detail'}
                      </span>
                    </div>
                  </button>

                  {/* Panel detail */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-0 sm:pl-[8.33%] pr-0 sm:pr-[25%]">
                        <div className="max-w-2xl space-y-5">
                          {/* Deskripsi umum */}
                          <p className="text-[13px] leading-relaxed text-ink-600 dark:text-ink-300">
                            Pengajar di Kompetensi Keahlian Pengembangan
                            Perangkat Lunak dan GIM — SMK Negeri 1 Beringin.
                            Aktif membimbing siswa dalam pembelajaran teori
                            maupun praktik di laboratorium komputer.
                          </p>

                          {/* Kutipan kesan */}
                          {p.kesan && (
                            <div className="pt-5 border-t border-ink-200 dark:border-ink-800">
                              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-400 dark:text-ink-500 mb-3">
                                Kesan dari kami
                              </p>
                              <p className="font-serif italic text-[15px] leading-relaxed text-ink-700 dark:text-ink-200">
                                &ldquo;{p.kesan}&rdquo;
                              </p>
                            </div>
                          )}

                          {/* Info tambahan */}
                          <div className="flex items-center gap-2 text-ink-500 dark:text-ink-400 text-[13px] pt-3">
                            <Mail size={14} strokeWidth={1.5} />
                            <span>Melalui jurusan PPLG, SMKN 1 Beringin</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Catatan bawah */}
          <p className="mt-12 text-[12px] text-ink-400 dark:text-ink-500 max-w-xl">
            Klik pada salah satu baris untuk membaca kesan kami tentang beliau.
          </p>
        </div>
      </main>
    </>
  );
}
