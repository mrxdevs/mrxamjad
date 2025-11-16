import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/profile";

export const metadata = { title: "Projects — Amjad Ali" };

export default function Projects() {
  return (
    <div className="py-16 relative">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-8 flex flex-wrap gap-6 justify-center">
        {projects.map((p) => (
          <div key={p.title} className="w-full md:w-[calc(33.333%-1rem)] max-w-md">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
