import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import ShareButton from '../components/ShareButton';

// Data lengkap angkatan: pengurus inti + sekretariat + anggota
// Urutan: pengurus inti dulu, baru anggota biasa
const anggota = [
  // Pengurus inti
  { nama: 'Alfajar', jabatan: 'Ketua Kelas', foto: '/gambar/stuktur/alfajar-ketua.webp' },
  { nama: 'Irba', jabatan: 'Wakil Ketua', foto: '/gambar/stuktur/irba-wakel.webp' },

  // Sekretariat
  { nama: 'Intan', jabatan: 'Sekretaris', foto: '/gambar/stuktur/intan-serketasris.webp' },
  { nama: 'Suci', jabatan: 'Bendahara', foto: '/gambar/stuktur/suci-bendahara.webp' },

  // Anggota
  { nama: 'Ali', foto: '/gambar/stuktur/ali.webp' },
  { nama: 'Alya', foto: '/gambar/stuktur/alya.webp' },
  { nama: 'Arbi', foto: '/gambar/stuktur/arbi.webp' },
  { nama: 'Azimi', foto: '/gambar/stuktur/azimi.webp' },
  { nama: 'Chelsea', foto: '/gambar/stuktur/chelsea.webp' },
  { nama: 'Diva', foto: '/gambar/stuktur/diva.webp' },
  { nama: 'Fariz', foto: '/gambar/stuktur/fariz.webp' },
  { nama: 'Febri', foto: '/gambar/stuktur/febri.webp' },
  { nama: 'Ghatfan', foto: '/gambar/stuktur/ghatfan.webp' },
  { nama: 'Habibi', foto: '/gambar/stuktur/habibi.webp' },
  { nama: 'Haikal', foto: '/gambar/stuktur/haikal.webp' },
  { nama: 'Hawa', foto: '/gambar/stuktur/hawa.webp' },
  { nama: 'Hawwa', foto: '/gambar/stuktur/hawwa.webp' },
  { nama: 'Iqbal', foto: '/gambar/stuktur/iqbal.webp' },
  { nama: 'Madhun', foto: '/gambar/stuktur/madhun.webp' },
  { nama: 'Mifta', foto: '/gambar/stuktur/mifta.webp' },
  { nama: 'Muda', foto: '/gambar/stuktur/muda.webp' },
  { nama: 'Neyza', foto: '/gambar/stuktur/neyza.webp' },
  { nama: 'Nia', foto: '/gambar/stuktur/nia.webp' },
  { nama: 'Pusvita', foto: '/gambar/stuktur/pusvita.webp' },
  { nama: 'Reza', foto: '/gambar/stuktur/reza.webp' },
  { nama: 'Rifan', foto: '/gambar/stuktur/rifan.webp' },
  { nama: 'Rindu', foto: '/gambar/stuktur/rindu.webp' },
  { nama: 'Risky', foto: '/gambar/stuktur/risky.webp' },
  { nama: 'Sandy', foto: '/gambar/stuktur/sandy.webp' },
  { nama: 'Septiana', foto: '/gambar/stuktur/septiana.webp' },
  { nama: 'Tasya', foto: '/gambar/stuktur/tasya.webp' },
  { nama: 'Tri', foto: '/gambar/stuktur/tri.webp' },
  { nama: 'Yuda', foto: '/gambar/stuktur/yuda.webp' },
];

function PersonCard({ person, index, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.04 }}
      className="group text-left"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-md border border-ink-200 dark:border-ink-800 bg-ink-100 dark:bg-ink-900 transition-all duration-300 group-hover:border-accent-500 dark:group-hover:border-accent-500">
        <img
          src={person.foto}
          alt={person.nama}
          loading="lazy"
          width={400}
          height={533}
          className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
        />
      </div>
      <div className="mt-3">
        <p className="text-[12px] font-medium text-ink-700 dark:text-ink-300 leading-tight">
          {person.nama}
        </p>
        {person.jabatan && (
          <p className="text-[11px] text-accent-600 dark:text-accent-400 mt-0.5">
            {person.jabatan}
          </p>
        )}
      </div>
    </motion.button>
  );
}

export default function AngkatanPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return anggota;
    const q = query.toLowerCase();
    return anggota.filter((p) => p.nama.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <Helmet>
        <title>Untuk Angkatan Kami — XII PPLG 2</title>
        <meta
          name="description"
          content="Daftar lengkap 32 orang XII PPLG 2, SMKN 1 Beringin — angkatan 2024."
        />
        <meta property="og:title" content="Untuk Angkatan Kami — XII PPLG 2" />
        <meta
          property="og:description"
          content="Tiga puluh dua nama, satu ruang yang sama selama tiga tahun."
        />
      </Helmet>

      <main className="bg-ink-50 dark:bg-ink-950 transition-colors duration-300">
        {/* Header foto */}
        <div className="relative h-64 lg:h-80 overflow-hidden">
          <img
            src="/slide/slide1.webp"
            alt=""
            width={1600}
            height={900}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-50 dark:from-ink-950 via-ink-950/20 to-ink-950/40" />
        </div>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-16 pb-24">
          {/* Pembuka */}
          <motion.header
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-accent-500" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-500 dark:text-ink-400">
                Untuk angkatan kami
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 leading-[1.15]">
              Tiga puluh dua nama,{' '}
              <span className="font-serif italic text-accent-600 dark:text-accent-400">
                satu ruang
              </span>{' '}
              yang sama selama tiga tahun.
            </h1>

            <p className="mt-8 text-[15px] leading-relaxed text-ink-600 dark:text-ink-300 max-w-2xl text-justify">
              Halaman ini bukan tentang prestasi, bukan tentang peringkat, dan
              bukan tentang siapa yang paling menonjol. Ini hanya daftar nama —
              orang-orang yang pernah duduk di kursi yang sama, belajar dari
              kesalahan yang sama, dan pada akhirnya lulus di tahun yang sama.
              Kami menuliskannya di sini supaya tidak hilang.
            </p>

            <div className="mt-8">
              <ShareButton
                title="XII PPLG 2 — Angkatan 2024"
                text="Kenangan dan daftar nama XII PPLG 2, SMKN 1 Beringin."
              />
            </div>
          </motion.header>

          {/* Daftar nama */}
          <section className="mt-20">
            <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-ink-200 dark:border-ink-800">
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-400 dark:text-ink-500">
                Angkatan 2024
              </span>
              <div className="flex items-center gap-4">
                <span className="text-[11px] text-ink-400 dark:text-ink-500">
                  {filtered.length} orang
                </span>
                <div className="relative flex items-center">
                  <Search
                    size={14}
                    className="absolute left-0 text-ink-400 dark:text-ink-500 pointer-events-none"
                    strokeWidth={1.5}
                  />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Cari nama"
                    className="pl-6 pr-3 py-1 text-[13px] bg-transparent border-b border-ink-200 dark:border-ink-800 focus:border-accent-500 dark:focus:border-accent-500 focus:outline-none text-ink-900 dark:text-ink-50 placeholder:text-ink-400 dark:placeholder:text-ink-500 transition-all w-32 focus:w-44"
                  />
                </div>
              </div>
            </div>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8">
                {filtered.map((p, i) => (
                  <PersonCard key={p.nama} person={p} index={i} onClick={() => {}} />
                ))}
              </div>
            ) : (
              <p className="text-center py-12 text-[13px] text-ink-400 dark:text-ink-500">
                Tidak ada nama yang cocok dengan &ldquo;{query}&rdquo;
              </p>
            )}
          </section>

          {/* Penutup */}
          <motion.section
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mt-28 pt-16 border-t border-ink-200 dark:border-ink-800 max-w-2xl"
          >
            <p className="font-serif italic text-2xl lg:text-3xl text-ink-800 dark:text-ink-100 leading-[1.4]">
              Terima kasih untuk tiga tahunnya. Untuk kelas yang berisik, untuk
              tawa yang tidak terkontrol, dan untuk setiap usaha yang tidak
              selalu terlihat.
            </p>

            <div className="mt-12">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-400 dark:text-ink-500 mb-3">
                Dari kami
              </p>
              <p className="text-[15px] font-semibold text-ink-900 dark:text-ink-50">
                XII PPLG 2
              </p>
              <p className="text-[13px] text-ink-500 dark:text-ink-400 mt-1">
                SMK Negeri 1 Beringin · 2024
              </p>
            </div>

            <div className="mt-16 pt-8 border-t border-ink-200 dark:border-ink-800">
              <p className="font-mono text-[12px] text-ink-500 dark:text-ink-400 leading-relaxed">
                <span className="text-accent-500">return</span>{' '}
                <span className="text-emerald-600 dark:text-emerald-400">
                  "terima kasih"
                </span>
                ;
              </p>
            </div>
          </motion.section>
        </div>
      </main>
    </>
  );
}