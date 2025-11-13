import { skills } from "../../data/profile";

export const metadata = { title: "Techs — Amjad Ali" };

export default function Techs() {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold">Techs</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Mobile Development</h3>
          <div className="mt-4">
            <div className="text-sm text-purple-400">Expert</div>
            <ul className="mt-2 flex flex-wrap gap-2 text-sm text-zinc-300">
              {skills.mobile.expert.map((t) => (
                <li key={t} className="chip">{t}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <div className="text-sm text-purple-400">Advanced</div>
            <ul className="mt-2 flex flex-wrap gap-2 text-sm text-zinc-300">
              {skills.mobile.advanced.map((t) => (
                <li key={t} className="chip">{t}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <div className="text-sm text-purple-400">Proficient</div>
            <ul className="mt-2 flex flex-wrap gap-2 text-sm text-zinc-300">
              {skills.mobile.proficient.map((t) => (
                <li key={t} className="chip">{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Development Tools</h3>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-300">
            {skills.tools.map((t) => (
              <li key={t} className="chip">{t}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Backend & Cloud</h3>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-300">
            {skills.backend.map((t) => (
              <li key={t} className="chip">{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

