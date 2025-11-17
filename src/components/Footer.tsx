"use client";

import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { contact } from "../data/profile";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    try {
      const response = await fetch(
        "https://appsail-50035953162.development.catalystappsail.in/newsletter/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Successfully subscribed to newsletter!", {
          duration: 4000,
          position: "bottom-right",
          style: {
            background: "#10b981",
            color: "#fff",
            padding: "16px",
            borderRadius: "8px",
          },
        });
        setEmail("");
      } else {
        const errorMessage = data.error || data.message || "Failed to subscribe. Please try again.";
        toast.error(errorMessage, {
          duration: 4000,
          position: "bottom-right",
          style: {
            background: "#ef4444",
            color: "#fff",
            padding: "16px",
            borderRadius: "8px",
          },
        });
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast.error("Failed to subscribe. Please check your connection.", {
        duration: 4000,
        position: "bottom-right",
        style: {
          background: "#ef4444",
          color: "#fff",
          padding: "16px",
          borderRadius: "8px",
        },
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="footer-section">
      <Toaster />
      <div className="footer-cta">
        <h2 className="footer-cta-title">Let's Connect there</h2>
        <Link href="/contact" className="footer-hire-btn">
          Hire me ↗
        </Link>
      </div>

      <div className="footer-content">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                {contact.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <span className="footer-logo-text">{contact.name.toUpperCase()}</span>
            </div>
            <p className="footer-description">
              Creative professional crafting digital experiences. Specializing in mobile and web development with a focus on user-centric design.
            </p>
            <div className="footer-social">
              <a href={contact.links.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href={contact.links.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href={contact.links.medium} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Medium">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
              <a href={contact.links.instagram} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href={contact.links.x} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X (Twitter)">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href={`mailto:${contact.email}`} className="social-icon" aria-label="Email">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-links">
            <h4 className="footer-links-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Service</Link></li>
              <li><Link href="/experience">Resume</Link></li>
              <li><Link href="/projects">Project</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-links">
            <h4 className="footer-links-title">Contact</h4>
            <ul className="footer-links-list">
              <li><a href={`tel:${contact.phone}`}>{contact.phone}</a></li>
              <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
              <li><a href={contact.links.github} target="_blank" rel="noopener noreferrer">github.com/mrxdevs</a></li>
              <li><a href="https://github.com/mrxamjad" target="_blank" rel="noopener noreferrer">github.com/mrxamjad</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4 className="footer-links-title">Get the latest information</h4>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-submit" aria-label="Subscribe" disabled={isSubscribing}>
                {isSubscribing ? "..." : "→"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          Copyright© {new Date().getFullYear()} {contact.name}. All Rights Reserved.
        </p>
        <div className="footer-legal">
          <Link href="/privacy">User Terms & Conditions</Link>
          <span className="footer-divider">|</span>
          <Link href="/terms">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

