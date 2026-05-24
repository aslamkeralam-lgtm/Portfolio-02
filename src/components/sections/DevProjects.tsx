import { motion } from "motion/react";
import { ProjectCard } from "../common/ProjectCard";

const devProjects = [
  {
    title: "E-commerce Platform Redesign",
    subtitle: "Full-stack React application with real-time inventory",
    description:
      "Built a high-performance e-commerce platform with advanced filtering, checkout optimization, and admin dashboard.",
    bgColor: "bg-blue-300",
    year: "2025",
  },
  {
    title: "SaaS Dashboard Development",
    subtitle: "Next.js + TypeScript for enterprise analytics",
    description:
      "Created a scalable SaaS dashboard with real-time data visualization, user management, and comprehensive API integration.",
    bgColor: "bg-purple-300",
    year: "2024",
  },
  {
    title: "Component Library Build",
    subtitle: "Reusable design system with Tailwind & TypeScript",
    description:
      "Developed a comprehensive component library for rapid development, ensuring consistency and accessibility across projects.",
    bgColor: "bg-emerald-300",
    year: "2024",
  },
  {
    title: "WordPress Custom Theme",
    subtitle: "Performance-optimized headless CMS implementation",
    description:
      "Built custom WordPress theme with REST API integration, optimizing for speed, SEO, and mobile-first design.",
    bgColor: "bg-orange-300",
    year: "2023",
  },
];

export function DevProjects() {
  return (
    <section id="dev-projects" className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            DEVELOPMENT PROJECTS
          </h2>
          <p className="text-sm text-gray-600">
            Full-stack solutions combining clean code, performance optimization, and intuitive user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {devProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
