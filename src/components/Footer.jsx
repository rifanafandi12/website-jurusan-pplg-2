import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-ink-950 border-t border-ink-200 dark:border-ink-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <img src="/gambar/Logo-RPL.webp" alt="" className="w-9 h-9 object-contain" />
              <div>
                <p className="text-[13px] font-semibold text-ink-900 dark:text-ink-50">
                  PPLG 2
                </p>
                <p className="text-[11px] text-ink-500 dark:text-ink-400">
                  SMKN 1 Beringin
                </p>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed text-ink-500 dark:text-ink-400 max-w-xs">
              Kelas XII PPLG 2. Kenangan, keceriaan, dan persahabatan yang tersimpan
              dalam satu perjalanan.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-500 dark:text-ink-400 mb-5">
              Navigasi
            </h4>
            <ul className="space-y-3 text-[13px]">
              {[
                { label: 'Beranda', path: '/' },
                { label: 'Sambutan', path: '/sambutan' },
                { label: 'Pengajar', path: '/pengajar' },
                { label: 'Profil', path: '/profil' },
                { label: 'Struktur', path: '/struktur' },
                { label: 'Momen', path: '/momen' },
                { label: 'Tentang', path: '/tentang' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-ink-600 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-500 dark:text-ink-400 mb-5">
              Kontak
            </h4>
            <ul className="space-y-4 text-[13px]">
              <li className="flex gap-3">
                <MapPin size={14} className="text-ink-400 shrink-0 mt-1" strokeWidth={1.5} />
                <span className="text-ink-600 dark:text-ink-300 leading-relaxed">
                  Jl. Pendidikan No.3, Emplasmen Kuala Namu, Beringin, Deli Serdang
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={14} className="text-ink-400 shrink-0 mt-1" strokeWidth={1.5} />
                <a
                  href="mailto:muhammadrifanafandi@gmail.com"
                  className="text-ink-600 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                >
                  muhammadrifanafandi@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Instagram size={14} className="text-ink-400 shrink-0 mt-1" strokeWidth={1.5} />
                <a
                  href="https://www.instagram.com/_softring2/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-600 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                >
                  @_softring2
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-500 dark:text-ink-400 mb-5">
              Tautan
            </h4>
            <ul className="space-y-3 text-[13px]">
              <li>
                <a
                  href="https://www.smknegeri1beringin.sch.id/home"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-ink-600 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                >
                  Situs sekolah
                  <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/_softring2/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-ink-600 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                >
                  Instagram kelas
                  <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <Link
                  to="/angkatan"
                  className="inline-flex items-center gap-1.5 text-ink-600 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                >
                  Untuk angkatan kami
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Statistik angkatan */}
        <div className="mt-14 pt-8 border-t border-ink-200 dark:border-ink-800 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-mono tracking-wide text-ink-400 dark:text-ink-500">
          <span>XII PPLG 2</span>
          <span className="w-1 h-1 rounded-full bg-ink-300 dark:bg-ink-700" />
          <span>Angkatan 2024</span>
          <span className="w-1 h-1 rounded-full bg-ink-300 dark:bg-ink-700" />
          <span>29 siswa</span>
          <span className="w-1 h-1 rounded-full bg-ink-300 dark:bg-ink-700" />
          <span>3 tahun</span>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] text-ink-400 dark:text-ink-500">
          <p>© 2024 Pengembangan Perangkat Lunak dan GIM — SMKN 1 Beringin</p>
          <p>Disusun oleh XII PPLG 2</p>
        </div>
      </div>
    </footer>
  );
}