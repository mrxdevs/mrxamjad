import Hero from "../components/Hero";
import ProjectCarousel from "../components/ProjectCarousel";

export default function Home() {
  return (
    <div className="pb-20">
      <Hero />
      <section className="mx-auto mt-8 max-w-6xl">
        <ProjectCarousel />
      </section>
    </div>
  );
}
