"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { contact, achievements, education } from "../../data/profile";

export default function About() {
  const [imageError, setImageError] = useState(false);

  const skillCategories = [
    {
      title: "Mobile Development",
      skills: ["Flutter", "Kotlin", "Java", "Swift", "React Native", "Jetpack Compose", "SwiftUI"],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12" y2="18" />
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      skills: ["Figma", "Sketch", "Adobe XD", "Prototyping", "User Research", "Material Design 3"],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      )
    },
    {
      title: "Backend & DevOps",
      skills: ["Node.js", "Java", "Express", "Docker", "AWS", "CI/CD", "MongoDB"],
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m18.2 5.2l-4.2-4.2m0-6l4.2-4.2" />
        </svg>
      )
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-text-content">
            <h1 className="about-title">
              About <span className="gradient">Me</span>
            </h1>
            <div className="about-description">
              <p>
                Hello! I'm <strong>{contact.name}</strong>, a passionate Mobile Developer and UI/UX Designer
                with a knack for creating intuitive, beautiful, and high-performing digital experiences.
              </p>
              <p>
                With over 2 years in the field, I thrive on turning complex problems into elegant,
                user-centric solutions. My approach combines technical expertise with design thinking
                to deliver products that users love.
              </p>
              <p>
                When I'm not coding or designing, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying the great outdoors.
              </p>
            </div>
          </div>
          <div className="about-image-container">
            {!imageError ? (
              <Image
                src="/profile-image.png"
                alt={`${contact.name}`}
                width={400}
                height={500}
                className="about-profile-image"
                onError={() => setImageError(true)}
                priority
              />
            ) : (
              <div className="about-image-placeholder">
                <div className="placeholder-text">
                  {contact.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-skills">
        <div className="section-header-centered">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-card">
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Achievements Combined */}
      <section className="about-credentials">
        <div className="credentials-container">
          <div className="credential-card">
            <div className="credential-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <h3 className="credential-title">Education</h3>
            <p className="credential-institute">{education.institute}</p>
            <p className="credential-degree">{education.degree}</p>
            <p className="credential-period">{education.period}</p>
            <p className="credential-cgpa">CGPA: {education.cgpa}</p>
          </div>
          <div className="credential-card">
            <div className="credential-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M4 22h16" />
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
              </svg>
            </div>
            <h3 className="credential-title">Achievements</h3>
            <ul className="credential-list">
              {achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2 className="cta-title">Let's Work Together</h2>
          <p className="cta-subtitle">
            Have a project in mind? I'm always open to discussing new opportunities
            and creative collaborations.
          </p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-button-primary">
              Get In Touch
            </Link>
            <Link href="/projects" className="cta-button-secondary">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
