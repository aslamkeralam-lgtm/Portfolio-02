import { motion } from "motion/react";

export function ProblemCard({ tag, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="bg-white border-2 border-[#EDE8E0] rounded-3xl p-8 hover:border-[#C8A96E] transition-colors"
    >
      <div className="mb-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C8A96E] font-semibold">{tag}</span>
      </div>
      <h3 className="text-xl font-semibold text-[#1A1714] mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
