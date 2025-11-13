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
  const align = side === "left" ? "left-0" : "right-0";
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
    <div className="fixed top-24 left-0 right-0 z-30 w-full">
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
          <div className="rail">
            <span className="rail-text">{label}</span>
          </div>
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
          className={`pointer-events-auto absolute ${pos} top-0 z-30 h-[520px] rounded-3xl border border-white/10 bg-background shadow-2xl transition-transform duration-300 ${anim ? "translate-x-0" : translate}`}
          style={{ width: "calc(100% - 60px)" }}
        >
          <div className="p-6">
            <Carousel3 items={items} />
          </div>
        </div>
      )}
    </div>
  );
}
