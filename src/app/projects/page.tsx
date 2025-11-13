import ProjectCard from "../../components/ProjectCard";
import { projects, experience } from "../../data/profile";
import SidePanel from "../../components/SidePanel";

export const metadata = { title: "Projects — Amjad Ali" };

export default function Projects() {
  return (
    <div className="py-16 relative">
      <SidePanel label="Projects" side="left" items={projects.map(p=>({title:p.title, summary:p.summary, points:p.points}))} />
      <SidePanel label="Experience" side="right" items={experience.map(e=>({title:`${e.role} — ${e.company}`, summary:`${e.period} | ${e.location}`, points:e.bullets}))} />
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
