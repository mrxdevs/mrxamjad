"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { contact } from "../data/profile";

export default function Hero() {
  const yearsOfExperience = new Date().getFullYear() - 2023;
  const [imageError, setImageError] = useState(false);

  return (
    <section className="hero-section-new">
      <div className="hero-container-new">
        {/* Left Side - Quote */}
        <div className="hero-quote-new">
          <div className="quote-mark-new">❝</div>
          <p className="quote-text-new">
            {contact.name}'s exceptional product design ensure our project's success.
            Highly Recommended
          </p>
        </div>

        {/* Center - Main Content with Circular Background */}
        <div className="hero-main-new">
          <div className="hero-greeting-new">
            <span className="greeting-badge-new">Hello! 👋</span>
          </div>

          <h1 className="hero-title-new">
            I'm <span className="gradient">{contact.name.split(" ")[0]}</span>,<br />
            <span className="hero-subtitle-new">Mobile Developer</span>
          </h1>

          {/* Circular Background with Person Image */}
          <div className="hero-image-wrapper-new">
            <div className="hero-circle-background"></div>
            <div className="hero-person-image">
              {!imageError ? (
                <Image
                  src="/profile-image.png"
                  alt={`${contact.name} - Mobile Developer`}
                  width={500}
                  height={600}
                  className="person-image"
                  onError={() => setImageError(true)}
                  priority
                />
              ) : (
                <div className="hero-avatar-new">
                  {contact.name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
            </div>
          </div>

          <div className="hero-actions-new">
            <Link href="/projects" className="hero-btn-primary-new">
              Portfolio ↗
            </Link>
            <Link href="/contact" className="hero-btn-secondary-new">
              Hire me
            </Link>
          </div>
        </div>

        {/* Right Side - Experience */}
        <div className="hero-experience-new">
          <div className="experience-stars-new">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star-new">⭐</span>
            ))}
          </div>
          <div className="experience-years-new">{yearsOfExperience}+ Years</div>
          <div className="experience-label-new">Experience</div>
        </div>
      </div>
    </section>
  );
}
