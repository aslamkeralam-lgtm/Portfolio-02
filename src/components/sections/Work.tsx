import { motion } from "motion/react";
import { ProjectCard } from "../common/ProjectCard";

interface CaseStudyProject {
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  year: string;
  route?: string;
}

const projects: CaseStudyProject[] = [
  
  {
    title: "Metercube redesign case study",
    subtitle: "Premium furniture, home décor, and interiors for Bengaluru homeowners",
    description:
      "A full website redesign case study for Metercube, focusing on premium commerce, interior packages, and a refined shopping experience.",
    bgColor: "bg-amber-300",
    year: "2024",
    route: "metercube",
  },
  {
    title: "IGapp investment case study",
    subtitle: "Mobile-first investment experience for creator growth",
    description:
      "A product-led redesign of IGapp to simplify portfolio clarity, tax-aware guidance, and growth actions.",
    bgColor: "bg-sky-200",
    year: "2025",
    route: "igapp",
  },
];

interface WorkProps {
  onNavigate: (path: string) => void;
}

export function Work({ onNavigate }: WorkProps) {
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
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onClick={project.route ? () => onNavigate(project.route!) : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
