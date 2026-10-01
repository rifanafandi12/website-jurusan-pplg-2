import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown } from 'lucide-react';

const slides = [
  '/slide/slide1.webp',
  '/slide/slide4.webp',
  '/slide/slide11.webp',
  '/slide/slide13.webp',
  '/slide/slide12.webp',
];

export default function VideoHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink-950">
      {/* Slideshow dengan efek Ken Burns */}
      <AnimatePresence mode="sync">
        <motion.img
          key={slides[index]}
          src={slides[index]}
          alt=""
          // Slide pertama: eager + fetchpriority high (LCP element)
          // Slide lainnya: lazy + low priority
          loading={index === 0 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'low'}
          decoding={index === 0 ? 'sync' : 'async'}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/50 to-ink-950/20" />

      {/* Konten */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto w-full px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent-500" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-white/70">
                XII PPLG 2 · Angkatan 2024
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
              Kelas yang tumbuh{' '}
              <span className="font-serif italic text-accent-400">bersama</span>.
            </h1>

            <p className="mt-6 text-[15px] lg:text-base leading-relaxed text-white/70 max-w-xl">
              Rekaman perjalanan tiga tahun di jurusan Pengembangan Perangkat Lunak
              dan GIM — dari kelas, laboratorium, hingga momen di luar jam pelajaran.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#kenangan"
                className="group inline-flex items-center gap-2 text-[13px] font-medium text-white border-b border-white/60 pb-1 hover:border-accent-400 hover:text-accent-400 transition-colors"
              >
                Lihat kenangan kelas
                <ArrowDown
                  size={14}
                  className="group-hover:translate-y-0.5 transition-transform"
                />
              </a>
              <a
                href="/tentang"
                className="text-[13px] font-medium text-white/60 hover:text-white transition-colors"
              >
                Tentang jurusan
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indikator slide */}
      <div className="hidden lg:flex absolute bottom-10 right-8 z-10 items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-px transition-all duration-500 ${
              i === index ? 'w-8 bg-accent-500' : 'w-4 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
}