import { motion } from "motion/react";

export function LearningCard({ title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="border-2 border-[#C8A96E] rounded-3xl p-8 hover:shadow-lg transition-shadow"
    >
      <h4 className="text-lg font-semibold text-[#1A1714] mb-3">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
