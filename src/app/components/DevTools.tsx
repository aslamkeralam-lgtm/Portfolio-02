import { motion } from "motion/react";
import { Code } from "lucide-react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiWordpress,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

const tools = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
];

export function DevTools() {
  return (
    <section id="dev-tools" className="py-16 px-8 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-2">
            <Code className="w-5 h-5 text-gray-600" />
            <h2 className="text-xs uppercase tracking-widest text-gray-500">
              TECH STACK
            </h2>
          </div>
          <p className="text-sm text-gray-600">
            Tools and technologies I use to build exceptional web experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        >
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <div
                key={tool.name}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-black/5 hover:border-black/10 transition-all duration-300 hover:shadow-md"
              >
                <Icon
                  size={40}
                  style={{ color: tool.color }}
                  className="transition-transform hover:scale-110"
                />
                <span className="text-xs text-center text-gray-600 font-medium">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
