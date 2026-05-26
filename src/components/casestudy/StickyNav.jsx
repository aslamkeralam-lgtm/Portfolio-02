import { useEffect, useState } from "react";

export function StickyNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolling, setIsScrolling] = useState(true);

  const sections = [
    { id: "hero", label: "Hero" },
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem" },
    { id: "research", label: "Research" },
    { id: "goals", label: "Goals" },
    { id: "architecture", label: "Architecture" },
    { id: "final", label: "Final screens" },
    { id: "system", label: "Design system" },
    { id: "outcomes", label: "Outcomes" },
  ];

  useEffect(() => {
    const observers = {};

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
      rootMargin: "-100px 0px -66% 0px",
    });

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      {/* Desktop Sticky Nav */}
      <nav className="hidden lg:block fixed left-0 top-32 w-56 h-screen overflow-y-auto">
        <div className="space-y-2 px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96E] mb-6">Sections</p>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-current={activeSection === section.id ? "page" : undefined}
              className={`block text-sm py-2 transition-colors ${
                activeSection === section.id
                  ? "text-[#C8A96E] font-semibold border-l-2 border-[#C8A96E] pl-4"
                  : "text-slate-600 hover:text-slate-900 pl-4"
              }`}
            >
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Horizontal Scrollable Nav */}
      <nav className="lg:hidden sticky top-16 bg-white border-b border-slate-200 overflow-x-auto z-40">
        <div className="flex gap-2 px-6 py-3 whitespace-nowrap">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
              }}
              aria-current={activeSection === section.id ? "page" : undefined}
              className={`text-xs uppercase tracking-[0.2em] py-2 px-3 rounded-full transition-colors ${
                activeSection === section.id
                  ? "bg-[#C8A96E] text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
