"use client";

import Link from "next/link";
import { contact } from "../data/profile";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <nav className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg shadow-purple-900/20">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-500 text-white font-semibold">
              {contact.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <span className="hidden sm:block text-sm text-zinc-300">{contact.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/" className="nav-btn">Home</Link>
            <Link href="/projects" className="nav-btn">Projects</Link>
            <Link href="/experience" className="nav-btn">Experience</Link>
            <Link href="/techs" className="nav-btn">Techs</Link>
            <Link href="/about" className="nav-btn">About</Link>
          </div>
          <div>
            <Link
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:opacity-90"
            >
              Hire Me <span className="inline-block">→</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
