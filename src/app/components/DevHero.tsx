import { motion } from "motion/react";

export function DevHero() {
  return (
    <section id="dev-hero" className="pt-24 pb-16 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-[clamp(1.75rem,4vw,3rem)] leading-[1.3] tracking-tight">
            I build scalable, fast digital products using modern web technologies
            and developer-friendly practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
