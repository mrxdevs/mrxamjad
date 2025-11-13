import Link from "next/link";
import SidePanel from "./SidePanel";
import { contact, projects, experience } from "../data/profile";

export default function Hero() {
  return (
    <section className="relative py-24">
      <SidePanel label="Projects" side="left" items={projects.map(p=>({title:p.title, summary:p.summary, points:p.points}))} />
      <SidePanel label="Experience" side="right" items={experience.map(e=>({title:`${e.role} — ${e.company}`, summary:`${e.period} | ${e.location}`, points:e.bullets}))} />
      <div className="mx-auto max-w-4xl text-center sm:text-left">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="block">Creative <span className="gradient">Mobile</span> &</span>
          <span className="block gradient">Frontend Developer</span>
        </h1>
        <p className="mt-6 max-w-2xl text-zinc-400">
          I design and build beautifully simple apps and systems. Crafting elegant
          solutions for complex problems is my passion.
        </p>
        <div className="mt-8 flex gap-4">
          <Link href="/projects" className="cta-primary">View My Work ↓</Link>
          <a href={`mailto:${contact.email}`} className="cta-secondary">Contact Me</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-glow" />
      </div>
    </section>
  );
}
