import { motion } from "motion/react";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  year: string;
  imageUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className={`group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-300 transition-all duration-300 ${
        onClick ? "cursor-pointer" : ""
      }`}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Image area */}
      <div className="w-full aspect-[16/9] bg-gray-50 overflow-hidden">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <div className="w-16 h-16 rounded-xl bg-gray-200" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            {project.year}
          </span>
          <span className="text-sm text-gray-400 group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </div>

        <h3 className="text-base font-semibold text-gray-900 leading-snug">
          {project.title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed">
          {project.subtitle}
        </p>
      </div>
    </motion.article>
  );
}