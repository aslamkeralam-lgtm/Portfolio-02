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
            <h3 className="text-[15px] leading-snug">How I Can Help</h3>
            <h3 className="text-[15px] leading-snug">Let's Connect</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <div>
              <p className="text-[15px] leading-[1.7]">
                I'm Mohammed Aslam K, a designer from Bengaluru, India. I spent the last
                10+ years crafting designs in the Product industry. After gaining extensive
                experience in UI/UX design and frontend development, I'm now looking for
                something exciting to work on.
              </p>
            </div>

            <div>
              <p className="text-[15px] leading-[1.7]">
                I help teams <strong>identify business opportunities</strong> and <strong>collaborate with
                stakeholders</strong> to develop effective solutions. From <strong>user research and design
                strategy</strong> to UI/UX design and testing, I streamline projects to deliver products
                to market <strong>efficiently</strong> across both web and mobile apps.
              </p>
            </div>

            <div className="space-y-0">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center justify-between py-4 border-b border-gray-400 hover:border-black transition-colors group"
              >
                <span className="text-[15px]">Email</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammed-aslam-k-918a33227/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 border-b border-gray-400 hover:border-black transition-colors group"
              >
                <span className="text-[15px]">LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#"
                className="flex items-center justify-between py-4 border-b border-gray-400 hover:border-black transition-colors group"
              >
                <span className="text-[15px]">X/Twitter</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
