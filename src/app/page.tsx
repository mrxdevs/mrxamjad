import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/profile";

export default function Home() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const sideCards = projects.filter((p) => p !== featured).slice(0, 2);
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
