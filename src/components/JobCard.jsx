import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function JobCard({ title, description, tags, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col p-7 bg-white dark:bg-ink-950 border border-ink-200 dark:border-ink-800 rounded-sm hover:border-ink-900 dark:hover:border-ink-50 hover:-translate-y-0.5 transition-all duration-300 ease-out overflow-hidden"
    >
      {/* Aksen garis kiri tipis — muncul saat hover */}
      <span className="absolute left-0 top-0 bottom-0 w-px bg-accent-500 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-out" />

      {/* Baris atas: nomor + ikon */}
      <div className="flex items-start justify-between">
        <span className="font-mono text-[11px] font-medium tracking-[0.15em] text-ink-400 dark:text-ink-500">
          {String(index + 1).padStart(2, '0')}
        </span>
        <ArrowUpRight
          size={14}
          strokeWidth={1.5}
          className="text-ink-300 dark:text-ink-700 group-hover:text-accent-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
        />
      </div>

      {/* Judul */}
      <h3 className="mt-8 text-[17px] font-semibold tracking-tight text-ink-900 dark:text-ink-50 leading-snug">
        {title}
      </h3>

      {/* Deskripsi */}
      <p className="mt-3 text-[13.5px] leading-[1.7] text-ink-500 dark:text-ink-400">
        {description}
      </p>

      {/* Spacer supaya footer selalu menempel bawah */}
      <div className="flex-1 min-h-6" />

      {/* Tag dengan garis pemisah */}
      {tags && tags.length > 0 && (
        <div className="pt-5 mt-5 border-t border-ink-100 dark:border-ink-900 flex flex-wrap gap-x-3 gap-y-1">
          {tags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-3 text-[11px] font-medium tracking-wide text-ink-400 dark:text-ink-500">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-ink-300 dark:bg-ink-700" />}
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}