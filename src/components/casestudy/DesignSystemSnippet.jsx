import { motion } from "motion/react";

export function DesignSystemSnippet() {
  return (
    <div className="space-y-12">
      {/* Colour Swatches */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-lg font-semibold text-[#1A1714] mb-6">Brand colour palette</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <div className="bg-[#C8A96E] h-24"></div>
            <div className="bg-white p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Gold</p>
              <p className="font-mono text-sm text-[#1A1714]">#C8A96E</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <div className="bg-[#1A1714] h-24"></div>
            <div className="bg-white p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Charcoal</p>
              <p className="font-mono text-sm text-[#1A1714]">#1A1714</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <div className="bg-[#FAF8F5] h-24 border border-slate-200"></div>
            <div className="bg-white p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Cream</p>
              <p className="font-mono text-sm text-[#1A1714]">#FAF8F5</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <div className="bg-[#EDE8E0] h-24"></div>
            <div className="bg-white p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Warm</p>
              <p className="font-mono text-sm text-[#1A1714]">#EDE8E0</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Typography Scale */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <h4 className="text-lg font-semibold text-[#1A1714] mb-6">Typography</h4>
        <div className="space-y-6 bg-[#FAF8F5] rounded-3xl p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-2">Display</p>
            <p className="text-4xl font-serif text-[#1A1714]">The Metercube collection</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-2">Heading</p>
            <p className="text-2xl font-semibold text-[#1A1714]">Interior packages</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-2">Body</p>
            <p className="text-base text-slate-700">Handcrafted furniture for the modern Indian home</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-2">Caption</p>
            <p className="text-sm text-slate-500">Made from sustainable materials</p>
          </div>
        </div>
      </motion.div>

      {/* Button Variants */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h4 className="text-lg font-semibold text-[#1A1714] mb-6">Components</h4>
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#C8A96E] text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
            Primary action
          </button>
          <button className="border-2 border-[#1A1714] text-[#1A1714] px-8 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
            Secondary action
          </button>
          <button className="text-[#C8A96E] px-8 py-3 font-semibold hover:underline transition-all">
            Ghost action
          </button>
        </div>
      </motion.div>

      {/* Filter Chips */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h4 className="text-lg font-semibold text-[#1A1714] mb-6">Filter chips</h4>
        <div className="flex flex-wrap gap-3">
          {["All", "Sofas", "Tables", "Lighting", "Decor"].map((chip) => (
            <button
              key={chip}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                chip === "All"
                  ? "bg-[#C8A96E] text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {chip}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
