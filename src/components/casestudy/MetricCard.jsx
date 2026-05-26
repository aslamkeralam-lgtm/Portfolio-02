import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * target);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return { count, ref };
}

export function MetricCard({ number, label, index }) {
  const { count, ref } = useCountUp(number);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="bg-[#1A1714] text-[#FAF8F5] rounded-3xl p-12 text-center"
    >
      <div className="text-5xl font-bold text-[#C8A96E] mb-2">{count}%</div>
      <p className="text-lg text-[#EDE8E0]">{label}</p>
    </motion.div>
  );
}
