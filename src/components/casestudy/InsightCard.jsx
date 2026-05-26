import { motion } from "motion/react";

export function InsightCard({ title, description, source, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="bg-white border-l-4 border-[#C8A96E] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
    >
      <h3 className="text-lg font-semibold text-[#1A1714] mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{source}</p>
    </motion.div>
  );
}
