import { useState } from "react";
import { motion } from "motion/react";
import profileIcon from "../../Images/profileIcon.png";

interface NavbarProps {
  currentRoute: string;
  onNavigate: (path: string) => void;
}

export function Navbar({ currentRoute, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (path: string) => {
    setIsMenuOpen(false);
    onNavigate(path);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-4 py-4 md:px-8 md:py-6"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="text-sm font-medium">
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
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="flex items-center gap-6 text-sm">
            <a
              href="design"
              onClick={(event) => {
                event.preventDefault();
                handleNavigate("design");
              }}
              className={`transition-colors ${currentRoute === "design" ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`}
            >
              Design
            </a>
            <a
              href="dev"
              onClick={(event) => {
                event.preventDefault();
                handleNavigate("dev");
              }}
              className={`transition-colors ${currentRoute === "dev" ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`}
            >
              Dev
            </a>
            <a
              href="resume"
              onClick={(event) => {
                event.preventDefault();
                handleNavigate("resume");
              }}
              className={`transition-colors ${currentRoute === "resume" ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`}
            >
              Resume
            </a>
            <a
              href="photo"
              onClick={(event) => {
                event.preventDefault();
                handleNavigate("photo");
              }}
              className={`transition-colors ${currentRoute === "photo" ? "text-black font-semibold" : "text-gray-600 hover:text-black"}`}
            >
              Photos
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition-colors hover:bg-slate-50 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="block h-0.5 w-6 rounded-full bg-slate-800 transition-transform duration-200" aria-hidden="true" />
          <span className="block h-0.5 w-6 rounded-full bg-slate-800 my-1.5 transition-transform duration-200" aria-hidden="true" />
          <span className="block h-0.5 w-6 rounded-full bg-slate-800 transition-transform duration-200" aria-hidden="true" />
        </button>
      </div>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-50 bg-white px-6 py-6 md:hidden">
          <div className="flex items-center justify-between">
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
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition-colors hover:bg-slate-50"
              aria-label="Close navigation menu"
            >
              ×
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-4 text-lg font-medium">
            <a
              href="design"
              onClick={(event) => {
                event.preventDefault();
                handleNavigate("design");
              }}
              className={`block rounded-3xl px-5 py-4 transition-colors ${currentRoute === "design" ? "bg-slate-100 text-black" : "text-gray-700 hover:bg-slate-50 hover:text-black"}`}
            >
              Design
            </a>
            <a
              href="dev"
              onClick={(event) => {
                event.preventDefault();
                handleNavigate("dev");
              }}
              className={`block rounded-3xl px-5 py-4 transition-colors ${currentRoute === "dev" ? "bg-slate-100 text-black" : "text-gray-700 hover:bg-slate-50 hover:text-black"}`}
            >
              Dev
            </a>
            <a
              href="resume"
              onClick={(event) => {
                event.preventDefault();
                handleNavigate("resume");
              }}
              className={`block rounded-3xl px-5 py-4 transition-colors ${currentRoute === "resume" ? "bg-slate-100 text-black" : "text-gray-700 hover:bg-slate-50 hover:text-black"}`}
            >
              Resume
            </a>
            <a
              href="photo"
              onClick={(event) => {
                event.preventDefault();
                handleNavigate("photo");
              }}
              className={`block rounded-3xl px-5 py-4 transition-colors ${currentRoute === "photo" ? "bg-slate-100 text-black" : "text-gray-700 hover:bg-slate-50 hover:text-black"}`}
            >
              Photos
            </a>
          </div>
        </div>
      ) : null}
    </motion.nav>
  );
}
