import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-8 bg-[#e8e8e8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-24 gap-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <h2 className="text-[3.5rem] leading-none font-normal">Hello.</h2>
            <h3 className="text-[1rem] leading-snug"><br/ >Let's Connect</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <div>
              <p className="text-[30px] leading-[1.6]">
                I'm Aslam — a UI/UX Designer & Lead Developer with
                 10+ years of turning ideas into clean, beautiful digital
                  experiences that people actually enjoy using.
              </p>
            </div>

           

            <div className="space-y-0">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center justify-between py-4 border-b transition-colors group"
              >
                <span className="text-[15px]">Email</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammed-aslam-k-918a33227/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 border-b transition-colors group"
              >
                <span className="text-[15px]">LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#"
                className="flex items-center justify-between py-4 border-b transition-colors group"
              >
                <span className="text-[15px]">Dribbble</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
