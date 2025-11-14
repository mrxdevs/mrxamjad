"use client";

import { usePathname } from "next/navigation";

export default function PageAnimator({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const dir = path.startsWith("/projects") ? "slide-in-left" : path.startsWith("/experience") ? "slide-in-right" : "fade-in";
  return <div className={dir}>{children}</div>;
}