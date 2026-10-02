import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

export default function CountUp({ to, duration = 1.8, suffix = '' }) {
  const ref = useRef(null);
  // Margin dilonggarkan — di mobile, '0px' bikin observer trigger lebih cepat
  const inView = useInView(ref, {
    once: true,
    margin: '0px 0px -10% 0px',
  });
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  // Fallback: kalau dalam 1.5 detik observer belum trigger,
  // paksa mulai (antisipasi observer gagal di browser tertentu)
  useEffect(() => {
    const fallback = setTimeout(() => {
      if (!started) setStarted(true);
    }, 1500);
    return () => clearTimeout(fallback);
  }, [started]);

  // Set started saat inView true
  useEffect(() => {
    if (inView && !started) setStarted(true);
  }, [inView, started]);

  // Animasi angka
  useEffect(() => {
    if (!started) return;

    // Reset ke 0 saat mulai
    setValue(0);

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      // easeOutQuad
      const eased = 1 - (1 - progress) ** 2;
      setValue(Math.floor(eased * to));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        // Pastikan nilai akhir tepat
        setValue(to);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix && <span className="text-accent-500">{suffix}</span>}
    </span>
  );
}
