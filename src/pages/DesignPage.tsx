import { Hero } from "../components/sections/Hero";
import { Work } from "../components/sections/Work";
import { About } from "../components/sections/About";

interface DesignPageProps {
  onNavigate: (path: string) => void;
}

export function DesignPage({ onNavigate }: DesignPageProps) {
  return (
    <>
      <Hero />
      <Work onNavigate={onNavigate} />
      <About />
    </>
  );
}
