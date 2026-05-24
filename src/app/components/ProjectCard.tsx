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
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isDark = project.bgColor.includes("slate");

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group ${project.bgColor} rounded-3xl p-8 flex flex-col justify-between min-h-[520px] hover:scale-[1.02] transition-transform duration-300`}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <span className={`text-xs uppercase tracking-wider ${isDark ? 'text-white/60' : 'text-black/60'}`}>
            {project.year}
          </span>
          <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/5'} flex items-center justify-center`}>
            <span className={`text-sm ${isDark ? 'text-white' : 'text-black'}`}>→</span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className={`text-2xl leading-tight ${isDark ? 'text-white' : 'text-black'}`}>
            {project.title}
          </h3>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-black/70'}`}>
            {project.subtitle}
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        <div className={`aspect-[4/3] rounded-xl ${isDark ? 'bg-white/5' : 'bg-black/5'} flex items-center justify-center overflow-hidden`}>
          <div className={`w-32 h-32 rounded-2xl ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />
        </div>

        <button className={`w-full py-3 px-6 rounded-full text-sm ${isDark ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'} transition-colors duration-200`}>
          Explore more
        </button>
      </div>
    </motion.article>
  );
}
