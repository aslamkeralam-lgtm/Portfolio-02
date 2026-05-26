import { motion } from "motion/react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  year: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const isDark = project.bgColor.includes("slate");

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className={`group ${project.bgColor} rounded-2xl p-6 flex flex-col justify-between min-h-[340px] hover:scale-[1.02] transition-transform duration-300 ${onClick ? "cursor-pointer" : ""}`}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <span className={`text-xs uppercase tracking-wider ${isDark ? 'text-white/60' : 'text-black/60'}`}>
            {project.year}
          </span>
          <div className={`w-7 h-7 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/5'} flex items-center justify-center flex-shrink-0`}>
            <span className={`text-sm ${isDark ? 'text-white' : 'text-black'}`}>→</span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className={`text-xl font-semibold leading-snug ${isDark ? 'text-white' : 'text-black'}`}>
            {project.title}
          </h3>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'}`}>
            {project.subtitle}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div className={`aspect-video rounded-lg ${isDark ? 'bg-white/5' : 'bg-black/5'} flex items-center justify-center overflow-hidden`}>
          <div className={`w-20 h-20 rounded-xl ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
        </div>
      </div>
    </motion.article>
  );
}
