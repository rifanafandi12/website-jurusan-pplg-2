import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

export default function CountUp({ to, duration = 1.8, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      // easeOutQuad — cepat di awal, halus di akhir
      const eased = 1 - (1 - progress) ** 2;
      setValue(Math.floor(eased * to));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix && <span className="text-accent-500">{suffix}</span>}
    </span>
  );
}
