import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function BeforeAfterIA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      {/* Before */}
      <div className="bg-[#FAF8F5] rounded-3xl p-12">
        <h4 className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-6">Current structure</h4>
        <div className="space-y-4 text-[#1A1714]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center font-semibold opacity-60">
              Home
            </div>
            <span className="text-sm opacity-50">Cluttered hero</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center font-semibold opacity-60">
              Shop
            </div>
            <span className="text-sm opacity-50">No curated collections</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center font-semibold opacity-60">
              About
            </div>
            <span className="text-sm opacity-50">Low trust signals</span>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <div className="hidden md:flex justify-center">
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#C8A96E]"
        >
          <ArrowRight className="w-8 h-8" />
        </motion.div>
      </div>

      {/* After */}
      <div className="bg-[#1A1714] rounded-3xl p-12 text-[#FAF8F5]">
        <h4 className="text-sm uppercase tracking-[0.25em] text-[#C8A96E] mb-6">Proposed structure</h4>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center font-semibold">
              Home
            </div>
            <span className="text-sm">Clear editorial focus</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center font-semibold">
              Shop
            </div>
            <span className="text-sm">Curated packages</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center font-semibold">
              About
            </div>
            <span className="text-sm">Premium brand story</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
