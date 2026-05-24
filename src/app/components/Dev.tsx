import { DevHero } from "./DevHero";
import { DevProjects } from "./DevProjects";
import { DevTools } from "./DevTools";

export function Dev() {
  return (
    <div className="min-h-screen bg-white">
      <DevHero />
      <DevProjects />
      <DevTools />
    </div>
  );
}
