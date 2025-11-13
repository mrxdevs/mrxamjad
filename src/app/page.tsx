import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/profile";

export default function Home() {
  const exclude = new Set([
    "Ntelcare Family App",
    "Raptee App",
    "Baatu: Speak with Confidence",
    "Digiwellie",
  ]);
  const candidates = projects.filter((p) => !exclude.has(p.title));
  const featured = candidates.find((p) => p.featured) ?? candidates[0];
  const sideCards = candidates.filter((p) => p !== featured).slice(0, 2);
  if (!featured) {
    return (
      <div className="pb-20">
        <Hero />
      </div>
    );
  }
  return (
    <div className="pb-20">
      <Hero />
      <section className="mx-auto mt-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr_1fr] gap-6 items-start">
          {sideCards[0] && (
            <div className="hidden md:block">
              <ProjectCard project={sideCards[0]} />
            </div>
          )}
          <ProjectCard project={featured} />
          {sideCards[1] && (
            <div className="hidden md:block">
              <ProjectCard project={sideCards[1]} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
