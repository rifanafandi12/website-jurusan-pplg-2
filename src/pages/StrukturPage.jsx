import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { X, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const pengurus = [
  {
    nama: 'Alfajar',
    jabatan: 'Ketua Kelas',
    foto: '/gambar/stuktur/alfajar-ketua.webp',
  },
  {
    nama: 'Yuli Safira',
    jabatan: 'Wali Kelas',
    foto: '/gambar/stuktur/yuli-walkes.webp',
  },
  {
    nama: 'Irba',
    jabatan: 'Wakil Ketua',
    foto: '/gambar/stuktur/irba-wakel.webp',
  },
];

const sekretariat = [
  {
    nama: 'Intan',
    jabatan: 'Sekretaris',
    foto: '/gambar/stuktur/intan-serketasris.webp',
  },
  {
    nama: 'Kosong',
    jabatan: 'Wakil Sekretaris',
    foto: '/gambar/stuktur/gambar-kosong.webp',
  },
  {
    nama: 'Suci',
    jabatan: 'Bendahara',
    foto: '/gambar/stuktur/suci-bendahara.webp',
  },
];

const anggota = [
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
          className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
        />
      </div>
      <div className="mt-3">
        <p className="text-[13px] font-medium text-ink-900 dark:text-ink-50 leading-tight">
          {person.nama}
        </p>
        {person.jabatan && (
          <p className="text-[11px] text-ink-500 dark:text-ink-400 mt-0.5">
            {person.jabatan}
          </p>
        )}
      </div>
    </motion.button>
  );
}

export default function StrukturPage() {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return anggota;
    const q = query.toLowerCase();
    return anggota.filter((p) => p.nama.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      <Helmet>
        <title>Struktur — XII PPLG 2</title>
        <meta
          name="description"
          content="Susunan pengurus dan anggota XII PPLG 2, SMKN 1 Beringin."
        />
      </Helmet>

      <main className="bg-ink-50 dark:bg-ink-950 transition-colors duration-300">
        <div className="relative h-64 lg:h-80 overflow-hidden">
          <img
            src="/slide/slide17.webp"
            alt=""
            className="w-full h-full object-cover object-top"
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
                Struktur kelas
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 leading-[1.1]">
              Susunan pengurus dan{' '}
              <span className="font-serif italic text-accent-600 dark:text-accent-400">
                anggota
              </span>{' '}
              XII PPLG 2.
            </h1>
          </motion.div>

          {/* Pengurus inti */}
          <section className="mt-20">
            <h2 className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-400 dark:text-ink-500 mb-6">
              Pengurus inti
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {pengurus.map((p, i) => (
                <PersonCard
                  key={p.nama}
                  person={p}
                  index={i}
                  onClick={() => setSelected(p)}
                />
              ))}
            </div>
          </section>

          {/* Sekretariat */}
          <section className="mt-20">
            <h2 className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-400 dark:text-ink-500 mb-6">
              Sekretariat
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {sekretariat.map((p, i) => (
                <PersonCard
                  key={p.nama}
                  person={p}
                  index={i}
                  onClick={() => setSelected(p)}
                />
              ))}
            </div>
          </section>

          {/* Anggota */}
          <section className="mt-20">
            <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-ink-200 dark:border-ink-800">
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-400 dark:text-ink-500">
                Anggota
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
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                {filtered.map((p, i) => (
                  <PersonCard
                    key={p.nama}
                    person={p}
                    index={i}
                    onClick={() => setSelected(p)}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center py-12 text-[13px] text-ink-400 dark:text-ink-500">
                Tidak ada nama yang cocok dengan &ldquo;{query}&rdquo;
              </p>
            )}
          </section>
        </div>

        {/* Modal profil */}
        {selected && (
          <div
            className="fixed inset-0 z-[100] bg-ink-950/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-ink-900 rounded-lg overflow-hidden max-w-sm w-full border border-ink-200 dark:border-ink-800"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Tutup"
                className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-md bg-white/80 dark:bg-ink-950/80 backdrop-blur text-ink-500 hover:text-ink-900 dark:hover:text-ink-50 transition-colors"
              >
                <X size={16} />
              </button>
              <div className="aspect-[3/4] overflow-hidden bg-ink-100 dark:bg-ink-900">
                <img
                  src={selected.foto}
                  alt={selected.nama}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-400 dark:text-ink-500 mb-2">
                  {selected.jabatan || 'Anggota'}
                </p>
                <h3 className="text-xl font-semibold tracking-tight text-ink-900 dark:text-ink-50">
                  {selected.nama}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-500 dark:text-ink-400">
                  XII PPLG 2 — SMK Negeri 1 Beringin
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </main>
    </>
  );
}
