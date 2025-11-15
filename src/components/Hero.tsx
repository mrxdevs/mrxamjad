"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { contact } from "../data/profile";

export default function Hero() {
  const yearsOfExperience = new Date().getFullYear() - 2022; // Started in 2022
  const [imageError, setImageError] = useState(false);

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Side - Quote */}
        <div className="hero-quote">
          <div className="quote-mark">❝</div>
          <p className="quote-text">
            {contact.name}'s exceptional product design ensure our project's success.
            Highly Recommended
          </p>
        </div>

        {/* Center - Main Content */}
        <div className="hero-main">
          <div className="hero-greeting">
            <span className="greeting-badge">Hello! 👋</span>
          </div>

          <h1 className="hero-title">
            I'm <span className="gradient">{contact.name.split(" ")[0]}</span>,<br />
            <span className="hero-subtitle">Mobile Developer</span>
          </h1>

          <div className="hero-image-container">
            <div >
              {!imageError ? (
                <Image
                  src="/hero-image.png"
                  alt={`${contact.name} - Mobile Developer`}
                  width={280}
                  height={480}
                  className="hero-profile-image"
                  onError={() => setImageError(true)}
                  priority
                />
              ) : (
                <div className="hero-avatar">
                  {contact.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
            </div>
          </div>


          <div className="hero-actions">
            <Link href="/projects" className="hero-btn-primary">
              Portfolio ↗
            </Link>
            <Link href="/contact" className="hero-btn-secondary">
              Hire me
            </Link>
          </div>
        </div>

        {/* Right Side - Experience */}
        <div className="hero-experience">
          <div className="experience-stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">⭐</span>
            ))}
          </div>
          <div className="experience-years">{yearsOfExperience}+ Years</div>
          <div className="experience-label">Experience</div>
        </div>
      </div>
    </section>
  );
}
