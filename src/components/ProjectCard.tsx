import Image from "next/image";

type Project = {
  title: string;
  summary: string;
  points: string[];
  links?: Record<string, string>;
  image?: string;
  featured?: boolean;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 overflow-hidden ${project.featured ? "shadow-xl shadow-purple-900/30" : ""}`}>
      {project.image && (
        <div className="relative w-full h-48">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="text-sm text-purple-400 font-semibold">{project.featured ? "Featured Project" : "Project"}</div>
        <h3 className="mt-1 text-xl font-bold text-white">{project.title}</h3>
        <p className="mt-2 text-zinc-400">{project.summary}</p>
        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
          {project.points.map((p) => (
            <li key={p} className="flex gap-2"><span>•</span><span>{p}</span></li>
          ))}
        </ul>
        {project.links && (
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            {Object.entries(project.links).map(([k, v]) => (
              <a key={k} href={v} className="rounded-full border border-white/15 px-3 py-1 text-zinc-300 hover:bg-white/10" target="_blank" rel="noopener noreferrer">
                {k}
              </a>
            ))}
          </div>
        )}
        {project.links?.caseStudy && (
          <div className="mt-6">
            <a className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15" href={project.links.caseStudy} target="_blank" rel="noopener noreferrer">
              View Case Study →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

