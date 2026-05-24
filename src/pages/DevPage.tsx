import { DevHero } from "../components/sections/DevHero";
import { DevProjects } from "../components/sections/DevProjects";
import { DevTools } from "../components/sections/DevTools";

export function DevPage() {
  return (
    <div className="min-h-screen bg-white">
      <DevHero />
      <DevProjects />
      <DevTools />
    </div>
  );
}
