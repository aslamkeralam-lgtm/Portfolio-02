import { motion } from "motion/react";
import { ProjectCard } from "../common/ProjectCard";

const projects = [
  {
    title: "Designing AI-driven Interfaces",
    subtitle: "Building an Innovation Design System",
    description:
      "Crafting intuitive interfaces for complex AI systems, making machine learning accessible to everyday users.",
    bgColor: "bg-rose-300",
    year: "2025",
  },
  {
    title: "Enterprise Dashboard Experience",
    subtitle: "Real-Time Analytics Platform for Business Intelligence",
    description:
      "Complete redesign of enterprise analytics platform, improving data visualization and workflow efficiency.",
    bgColor: "bg-teal-200",
    year: "2024",
  },
  {
    title: "Client Command Platform",
    subtitle: "Optimized User Experience for B2B Applications",
    description:
      "End-to-end design and development of a B2B command center for client management and operations.",
    bgColor: "bg-slate-800",
    year: "2024",
  },
  {
    title: "Behavioral Design & Gamification",
    subtitle: "UX Research for User Engagement by Psychology and AI",
    description:
      "Research-driven approach to designing engaging experiences using behavioral psychology and gamification principles.",
    bgColor: "bg-amber-300",
    year: "2023",
  },
];

export function Work() {
  return (
    <section id="work" className="py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            CASE STUDIES
          </h2>
          <p className="text-sm text-gray-600">
            Selected works I have done as a UX designer. I believe the best design is invisible, it supports user to make a better decision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
