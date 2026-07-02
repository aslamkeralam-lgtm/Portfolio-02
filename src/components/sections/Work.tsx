import { motion } from "motion/react";
import { ProjectCard } from "../common/ProjectCard";
import Cover1 from "../../Images/Cover/Cover.png";
import Cover2 from "../../Images/Cover/coverIG.png";
import Cover3 from "../../Images/Cover/Cover3.png";
import Cover4 from "../../Images/Cover/Cover4.png";

interface CaseStudyProject {
  title: string;
  subtitle: string;
  description: string;
  bgColor: string;
  year: string;
  imageUrl?: string;
  route?: string;
}

const projects: CaseStudyProject[] = [
  {
    title: "Navigating Volatility: A UX Redesign of IG's Mobile App with Crypto at the Core",
    subtitle: "IG Group needed its mobile trading app to evolve — faster markets, new asset classes, and a growing base of crypto-curious traders demanded more than incremental",
    description: "...",
    bgColor: "",
    year: "2026",
    route: "comingsoon",
    imageUrl: Cover4, // ← your screenshot here
  },
  {
    title: "Designing the Trading Experience for Raydius — Europe's First On-Venue 24-Hour Turbo Warrant Issuer",
    subtitle: "Raydius, a Frankfurt-based turbo warrant issuer under IG Group, needed a platform that matched the sophistication of its products with an equally credible and intuitive experience.",
    description: "...",
    bgColor: "",
    year: "2025",
    route: "raydius",
    imageUrl: Cover3, // ← your screenshot here
  },
  {
    title: "Designing a Premium Lifestyle eCommerce Experience for Bengaluru Homeowners",
    subtitle: "Metercube is a Bengaluru-based premium furniture and home décor brand curating quality lifestyle products for discerning urban homeowners. ",
    description: "...",
    bgColor: "",
    year: "2021",
    route: "metercube",
    imageUrl: Cover1, // ← your screenshot here
  },
  {
    title: "Introducing a Volume-Based Rebate Program at IG to Boost Adoption of Underused Instruments Across UK, APAC & EM (Europe)",
    subtitle: "IG Group is the No. 1 CFD provider, offering instruments like indices, FX, gold, and commodities. While indices and FX dominated trading activity",
    description: "...",
    bgColor: "",
    year: "2024",
    route: "igapp",
    imageUrl: Cover2, // ← your screenshot here
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
          <h2 className="text-base font-semibold uppercase tracking-widest text-gray-900 mb-2">
            CASE STUDIES
          </h2>
          <p className="text-lg text-gray-600">
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
