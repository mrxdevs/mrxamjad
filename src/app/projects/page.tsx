import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/profile";
import SideRail from "../../components/SideRail";

export const metadata = { title: "Projects — Amjad Ali" };

export default function Projects() {
  return (
    <div className="py-16 relative">
      <SideRail label="Projects" side="left" />
      <SideRail label="Experience" side="right" />
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
