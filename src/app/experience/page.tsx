import { experience } from "../../data/profile";
export const metadata = { title: "Experience — Amjad Ali" };

export default function ExperiencePage() {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold">Experience</h2>
      <div className="mt-8 space-y-6">
        {experience.map((e) => (
          <section key={e.company} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">{e.role} — {e.company}</h3>
            <p className="text-sm text-zinc-400">{e.period} | {e.location} {e.type ? `| ${e.type}` : ""}</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-300">
              {e.bullets.map((b) => (<li key={b}>• {b}</li>))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}