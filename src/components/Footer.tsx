import Link from "next/link";
import { contact } from "../data/profile";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-white/5">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-500 text-white font-semibold">
              {contact.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <span className="font-medium">{contact.name}</span>
          </div>
          <p className="mt-3 text-zinc-400">Creative professional crafting digital experiences.</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-zinc-200">Quick Links</h4>
          <ul className="space-y-2 text-zinc-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/techs">Techs</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-zinc-200">Legal</h4>
          <ul className="space-y-2 text-zinc-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold text-zinc-200">Reach Us</h4>
          <ul className="space-y-2 text-zinc-400">
            <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
            <li><a href={contact.links.github} target="_blank">Github</a></li>
            <li><a href={contact.links.linkedin} target="_blank">LinkedIn</a></li>
            <li><a href={contact.links.medium} target="_blank">Medium</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 sm:px-8 pb-8 text-xs text-zinc-500">© {new Date().getFullYear()} {contact.name}. All rights reserved.</div>
    </footer>
  );
}

