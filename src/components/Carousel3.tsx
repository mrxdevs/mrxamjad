"use client";

import { useState } from "react";

type Item = {
  title: string;
  summary?: string;
  points?: string[];
};

export default function Carousel3({ items }: { items: Item[] }) {
  const data = items.slice(0, 3);
  const [i, setI] = useState(1);
  const go = (dir: -1 | 1) => setI((p: number) => (p + dir + data.length) % data.length);
  const scale = (idx: number) => (idx === i ? "scale-100 opacity-100" : "scale-90 opacity-60");
  return (
    <div className="relative">
      <div className="flex items-center justify-center gap-6 overflow-hidden py-6">
        {data.map((it, idx) => (
          <div
            key={it.title}
            className={`transition-all duration-300 ${scale(idx)} w-56 md:w-64 ${idx === i ? "md:w-80" : ""}`}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-purple-400">{idx === i ? "Featured" : ""}</div>
              <div className="mt-1 text-lg font-semibold text-white">{it.title}</div>
              {it.summary && <div className="mt-2 text-sm text-zinc-300">{it.summary}</div>}
              {it.points && (
                <ul className="mt-3 space-y-1 text-xs text-zinc-400">
                  {it.points.slice(0, 3).map((p) => (
                    <li key={p} className="flex gap-2"><span>•</span><span>{p}</span></li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-2 flex w-20 items-center justify-between">
        <button aria-label="Prev" onClick={() => go(-1)} className="h-7 w-7 rounded-full border border-white/20 bg-white/10 text-white">‹</button>
        <div className="flex items-center gap-1">
          {data.map((_, idx) => (
            <span key={idx} className={`h-2 w-2 rounded-full ${idx === i ? "bg-white" : "bg-white/30"}`} />
          ))}
        </div>
        <button aria-label="Next" onClick={() => go(1)} className="h-7 w-7 rounded-full border border-white/20 bg-white/10 text-white">›</button>
      </div>
    </div>
  );
}
