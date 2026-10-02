import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Pause, Play, X } from 'lucide-react';

const slides = [
  {
    src: '/slide/slide1.webp',
    caption: 'Momen Hari Guru',
    desc: 'Foto bersama wali kelas kami tersayang.',
  },
  {
    src: '/slide/slide2.webp',
    caption: 'Momen Hari Guru',
    desc: 'Foto bersama wali kelas kami tersayang.',
  },
  {
    src: '/slide/slide3.webp',
    caption: 'Momen Hari Guru',
    desc: 'Foto bersama wali kelas kami tersayang.',
  },
  {
    src: '/slide/slide4.webp',
    caption: 'Momen Hari Guru',
    desc: 'Wali kelas kami dengan para pengawalnya.',
  },
  {
    src: '/slide/slide5.webp',
    caption: 'Momen Hari Guru',
    desc: 'Wali kelas kami dengan para pengawalnya.',
  },
  {
    src: '/slide/slide6.webp',
    caption: 'Momen Hari Guru',
    desc: 'Foto bersama wali kelas kami tersayang.',
  },
  {
    src: '/slide/slide7.webp',
    caption: 'Momen Hari Guru',
    desc: 'Foto bersama wali kelas kami tersayang.',
  },
  {
    src: '/slide/slide8.webp',
    caption: 'Momen Hari Guru',
    desc: 'Foto bersama wali kelas kami tersayang.',
  },
  {
    src: '/slide/slide9.webp',
    caption: 'Momen Hari Guru',
    desc: 'Foto bersama wali kelas kami tersayang.',
  },
  {
    src: '/slide/slide10.webp',
    caption: 'Momen Hari Guru',
    desc: 'Foto bersama wali kelas kami tersayang.',
  },
  {
    src: '/slide/slide11.webp',
    caption: 'Latihan Upacara',
    desc: 'Persiapan upacara bendera hari Senin.',
  },
  {
    src: '/slide/slide12.webp',
    caption: 'Foto Bersama di Kelas',
    desc: 'Momen kebersamaan di dalam kelas.',
  },
  {
    src: '/slide/slide13.webp',
    caption: 'Bakar-bakar Pasca Ujian',
    desc: 'Acara di rumah wali kelas kami tercinta.',
  },
  {
    src: '/slide/slide14.webp',
    caption: 'Bakar-bakar Pasca Ujian',
    desc: 'Acara di rumah wali kelas kami tercinta.',
  },
  {
    src: '/slide/slide15.webp',
    caption: 'Bakar-bakar Pasca Ujian',
    desc: 'Acara di rumah wali kelas kami tercinta.',
  },
  {
    src: '/slide/slide16.webp',
    caption: 'Momen Hari Guru',
    desc: 'Foto bersama wali kelas kami tersayang.',
  },
  {
    src: '/slide/slide17.webp',
    caption: 'Momen Hari Guru',
    desc: 'Foto bersama wali kelas kami tersayang.',
  },
  {
    src: '/slide/slide18.webp',
    caption: 'Foto Bersama di Kelas',
    desc: 'Momen kebersamaan di dalam kelas.',
  },
];

export default function MemoryCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [lightbox, setLightbox] = useState(false);

  const go = useCallback((dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + slides.length) % slides.length);
  }, []);

  const goTo = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  // Autoplay
  useEffect(() => {
    if (!playing || lightbox) return;
    const t = setTimeout(() => go(1), 5000);
    return () => clearTimeout(t);
  }, [index, playing, lightbox, go]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
      if (e.key === ' ') {
        e.preventDefault();
        setPlaying((p) => !p);
      }
      if (e.key === 'Escape' && lightbox) setLightbox(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, lightbox]);

  const slide = slides[index];

  return (
    <section
      id="kenangan"
      className="py-24 lg:py-32 bg-white dark:bg-ink-950 border-t border-ink-200 dark:border-ink-800 transition-colors duration-300 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-accent-500" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-500 dark:text-ink-400">
                Galeri
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 leading-[1.1]">
              Kenangan{' '}
              <span className="font-serif italic text-accent-600 dark:text-accent-400">
                XII PPLG 2
              </span>
            </h2>
          </div>
          <p className="text-[14px] leading-relaxed text-ink-500 dark:text-ink-400 max-w-sm">
            Kumpulan momen yang tersimpan selama menempuh pendidikan di jurusan
            PPLG.
          </p>
        </div>

        {/* Carousel utama */}
        <div className="relative">
          <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-md border border-ink-200 dark:border-ink-800 bg-ink-100 dark:bg-ink-900">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={slide.src}
                src={slide.src}
                alt={slide.caption}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightbox(true)}
                className="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
              />
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent pointer-events-none">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-accent-400 mb-2">
                {String(index + 1).padStart(2, '0')} /{' '}
                {String(slides.length).padStart(2, '0')}
              </p>
              <h3 className="text-white text-lg font-semibold tracking-tight">
                {slide.caption}
              </h3>
              <p className="text-[13px] text-white/70 mt-1">{slide.desc}</p>
            </div>
          </div>

          {/* Kontrol */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Sebelumnya"
                className="w-9 h-9 flex items-center justify-center rounded-md border border-ink-200 dark:border-ink-800 text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-50 hover:border-ink-400 dark:hover:border-ink-600 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Berikutnya"
                className="w-9 h-9 flex items-center justify-center rounded-md border border-ink-200 dark:border-ink-800 text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-50 hover:border-ink-400 dark:hover:border-ink-600 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
              <button
                onClick={() => setPlaying((p) => !p)}
                aria-label={playing ? 'Jeda' : 'Putar'}
                className="w-9 h-9 flex items-center justify-center rounded-md border border-ink-200 dark:border-ink-800 text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-50 hover:border-ink-400 dark:hover:border-ink-600 transition-colors"
              >
                {playing ? <Pause size={14} /> : <Play size={14} />}
              </button>
            </div>

            <div className="flex-1 max-w-xs ml-6 h-px bg-ink-200 dark:bg-ink-800 relative">
              <motion.div
                key={`${index}-${playing}`}
                initial={{ width: 0 }}
                animate={{ width: playing ? '100%' : '0%' }}
                transition={{ duration: playing ? 5 : 0.2, ease: 'linear' }}
                className="absolute inset-y-0 left-0 bg-accent-500"
              />
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="mt-8 grid grid-cols-6 sm:grid-cols-9 gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              onClick={() => goTo(i)}
              aria-label={`Ke slide ${i + 1}`}
              className={`relative aspect-square overflow-hidden rounded border transition-all ${
                i === index
                  ? 'border-accent-500 opacity-100'
                  : 'border-ink-200 dark:border-ink-800 opacity-50 hover:opacity-100'
              }`}
            >
              <img
                src={s.src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-ink-950/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(false)}
          >
            <button
              onClick={() => setLightbox(false)}
              aria-label="Tutup"
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-md text-white/70 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label="Sebelumnya"
              className="absolute left-6 w-10 h-10 flex items-center justify-center rounded-md text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <motion.img
              key={slide.src}
              src={slide.src}
              alt={slide.caption}
              custom={direction}
              width={1600}
              height={1000}
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setLightbox(true)}
              className="absolute inset-0 w-full h-full object-cover cursor-zoom-in"
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label="Berikutnya"
              className="absolute right-6 w-10 h-10 flex items-center justify-center rounded-md text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
