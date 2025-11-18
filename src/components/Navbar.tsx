"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact } from "../data/profile";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Project" },
    { href: "/experience", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-sm overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 w-full">
        <nav className="navbar-pill">
          <div className="navbar-content">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`navbar-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="navbar-logo">
            <div className="logo-icon">
              {contact.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <span className="logo-text">{contact.name.toUpperCase()}</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
