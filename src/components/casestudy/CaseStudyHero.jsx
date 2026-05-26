import { motion } from "motion/react";

export function CaseStudyHero() {
  const headline = "Redesigning Metercube's premium lifestyle commerce for Bengaluru homeowners.".split(" ");

  return (
    <section id="hero" className="bg-[#1A1714] text-[#FAF8F5] py-20 md:py-28">
      <div className="max-w-[900px] mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#C8A96E] mb-12">Metercube case study</p>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-8">
            {headline.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </h1>

          <p className="text-lg text-[#EDE8E0] max-w-2xl leading-relaxed mb-12">
            A premium commerce redesign focused on simplifying navigation, elevating interior packages, and building trust through editorial design and seamless checkout experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-[#EDE8E0] text-[#1A1714] rounded-2xl px-6 py-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96E] mb-2">Role</p>
            <p className="font-semibold">UX/UI Designer</p>
          </div>
          <div className="bg-[#EDE8E0] text-[#1A1714] rounded-2xl px-6 py-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96E] mb-2">Timeline</p>
            <p className="font-semibold">8 weeks</p>
          </div>
          <div className="bg-[#EDE8E0] text-[#1A1714] rounded-2xl px-6 py-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96E] mb-2">Platform</p>
            <p className="font-semibold">Web + Mobile</p>
          </div>
          <div className="bg-[#EDE8E0] text-[#1A1714] rounded-2xl px-6 py-4">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96E] mb-2">Stack</p>
            <p className="font-semibold">React + Shopify</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
