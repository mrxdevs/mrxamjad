import { certifications, achievements, education, languages } from "../../data/profile";

export const metadata = { title: "About — Amjad Ali" };

export default function About() {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold">About</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Education</h3>
          <p className="mt-2 text-zinc-300">{education.institute}</p>
          <p className="text-zinc-400">{education.degree} — {education.period} | CGPA: {education.cgpa}</p>
          <p className="mt-2 text-sm text-zinc-400">Relevant Coursework: {education.coursework.join(", ")}</p>
        </section>
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Certifications</h3>
          <ul className="mt-2 space-y-2 text-zinc-300">
            {certifications.map((c) => (<li key={c}>• {c}</li>))}
          </ul>
        </section>
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Achievements</h3>
          <ul className="mt-2 space-y-2 text-zinc-300">
            {achievements.map((a) => (<li key={a}>• {a}</li>))}
          </ul>
        </section>
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Languages</h3>
          <p className="mt-2 text-zinc-300">{languages.join(" | ")}</p>
        </section>
      </div>
    </div>
  );
}

