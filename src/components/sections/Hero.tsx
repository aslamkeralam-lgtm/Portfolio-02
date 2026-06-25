import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="design" className="pt-16 pb-16 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-full w-full"
        >
          <div className="flex flex-col gap-6 w-full">
            <p className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.3] tracking-tight font-medium">
              I craft intuitive, accessible, and high-performing digital experiences. I specialize in bridging the gap between design and development—delivering user-centered interfaces that are both visually engaging and technically sound.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href="mailto:aslam.keralam@gmail.com"
                className="inline-flex w-max items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Get in touch
              </a>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Open for work
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
