import { motion } from "motion/react";
import profileIcon from "../../Images/profileIcon.png";
import resumePdf from "../../Images/Mohammed Aslam K - Resume 2026.pdf";

interface NavbarProps {
  currentRoute: string;
  onNavigate: (path: string) => void;
}

export function Navbar({ currentRoute, onNavigate }: NavbarProps) {
  const handleNavigate = (path: string) => {
    onNavigate(path);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-4 py-4 md:px-8 md:py-6"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6 text-sm font-medium text-foreground">
          <a
            href="design"
            onClick={(event) => {
              event.preventDefault();
              handleNavigate("design");
            }}
            className="block"
          >
            <img src={profileIcon} alt="Logo" className="h-12 w-auto" />
          </a>
          <h3>Aslam K</h3>
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors text-foreground/70 hover:text-foreground"
          >
            Resume
          </a>
          <a
            href="archives"
            onClick={(event) => {
              event.preventDefault();
              handleNavigate("archives");
            }}
            className={`transition-colors ${currentRoute === "archives" ? "text-foreground font-semibold" : "text-foreground/70 hover:text-foreground"}`}
          >
            Archives
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
