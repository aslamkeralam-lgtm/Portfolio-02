import { motion } from "motion/react";

interface NavbarProps {
  currentRoute: string;
  onNavigate: (path: string) => void;
}

export function Navbar({ currentRoute, onNavigate }: NavbarProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-8 py-6"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="text-sm font-medium">Aslam</div>

        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center gap-6">
            <a
              href="design"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("design");
              }}
              className={`transition-colors ${currentRoute === "design" ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`}
            >
              Design
            </a>
            <a
              href="dev"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("dev");
              }}
              className={`transition-colors ${currentRoute === "dev" ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`}
            >
              Dev
            </a>
          </div>
        </div>

        <div className="w-6" />
      </div>
    </motion.nav>
  );
}
