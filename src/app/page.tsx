import Hero from "../components/Hero";
import ProjectCarousel from "../components/ProjectCarousel";
import WorkExperience from "../components/WorkExperience";
import WhyHireMe from "../components/WhyHireMe";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import CTASection from "../components/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Hire Amjad Ali, an expert Flutter, iOS, and Android developer in Chennai. Specializing in mobile app development with 25+ successful projects. Get your app built with cutting-edge technology.",
  openGraph: {
    title: "Amjad Ali - Mobile App Developer | Flutter, iOS & Android Expert",
    description: "Professional mobile app development services in Chennai. Expert in Flutter, iOS, Android, and React Native with 25+ delivered projects.",
  }
};

export default function Home() {
  return (
    <div className="pb-20">
      <Hero />
      <section className="mx-auto mt-8 max-w-7xl px-4">
        <ProjectCarousel />
      </section>
      <section className="mx-auto mt-16 max-w-6xl">
        <WorkExperience />
      </section>
      <section className="mx-auto mt-16 max-w-6xl">
        <WhyHireMe />
      </section>
      <section className="mx-auto mt-16 max-w-6xl">
        <Testimonials />
      </section>
      <section className="mx-auto mt-16 max-w-6xl">
        <BlogSection />
      </section>
      <section className="mt-16">
        <CTASection />
      </section>
    </div>
  );
}
