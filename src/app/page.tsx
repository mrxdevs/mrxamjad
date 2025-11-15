import Hero from "../components/Hero";
import ProjectCarousel from "../components/ProjectCarousel";
import WhyHireMe from "../components/WhyHireMe";
import PortfolioShowcase from "../components/PortfolioShowcase";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";

export default function Home() {
  return (
    <div className="pb-20">
      <Hero />
      <section className="mx-auto mt-8 max-w-6xl">
        <ProjectCarousel />
      </section>
      <section className="mx-auto mt-16 max-w-6xl">
        <WhyHireMe />
      </section>
      <section className="mx-auto mt-16 max-w-6xl">
        <PortfolioShowcase />
      </section>
      <section className="mx-auto mt-16 max-w-6xl">
        <Testimonials />
      </section>
      <section className="mx-auto mt-16 max-w-6xl">
        <BlogSection />
      </section>
    </div>
  );
}
