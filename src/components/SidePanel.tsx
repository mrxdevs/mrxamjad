"use client";

import { useEffect, useState } from "react";
import Carousel3 from "./Carousel3";

type Item = {
  title: string;
  summary?: string;
  points?: string[];
};

export default function SidePanel({ label, side, items }: { label: string; side: "left" | "right"; items: Item[] }) {
  const [open, setOpen] = useState(false);
  const [anim, setAnim] = useState(false);
  const align = side === "left" ? "left-3" : "right-3";
  const pos = side === "left" ? "left-0" : "right-0";
  const translate = side === "left" ? "-translate-x-full" : "translate-x-full";
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = (e: Event) => {
      const d = (e as CustomEvent).detail as { side: "left" | "right" } | undefined;
      if (!d) return;
      if (d.side !== side) {
        setAnim(false);
        setOpen(false);
      }
    };
    window.addEventListener("panel-open", handler as EventListener);
    return () => window.removeEventListener("panel-open", handler as EventListener);
  }, [side]);
  return (
    <div className="absolute top-0 left-0 right-0 z-30 w-full">
      <div className={`absolute ${align}`}>
        <button
          className="flex items-center gap-2"
          aria-label={`${label} panel toggle`}
          onClick={() => {
            const next = !open;
            setOpen(next);
            if (next) {
              setAnim(false);
              requestAnimationFrame(() => setAnim(true));
            }
            if (next && typeof window !== "undefined") {
              window.dispatchEvent(new CustomEvent("panel-open", { detail: { side } }));
            }
          }}
        >
          {side === "left" && <span className="rail-dot" />}
          <div className="rail">
            <span className="rail-text">{label}</span>
          </div>
          {side === "right" && <span className="rail-dot" />}
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-20"
          onClick={() => { setAnim(false); setOpen(false); }}
          aria-hidden
        />
      )}

      {open && (
        <div
          className={`pointer-events-auto absolute ${pos} top-0 z-30 h-[480px] w-[min(640px,48vw)] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl transition-transform duration-300 ${anim ? "translate-x-0" : translate}`}
        >
          <div className="p-6">
            <Carousel3 items={items} />
          </div>
        </div>
      )}
    </div>
  );
}
