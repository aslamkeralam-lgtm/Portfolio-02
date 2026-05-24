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
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-sm flex items-center gap-2">
          <span className="font-medium">Aslam</span>
          <span className="text-gray-400">|</span>
          <div className="flex items-center gap-2">
            <a
              href="/"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("/");
              }}
              className={`transition-colors ${currentRoute === "/" ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`}
            >
              Design
            </a>
            <span className="text-gray-400">/</span>
            <a
              href="/dev"
              onClick={(event) => {
                event.preventDefault();
                onNavigate("/dev");
              }}
              className={`transition-colors ${currentRoute === "/dev" ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`}
            >
              Dev
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
