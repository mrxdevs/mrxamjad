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

      {/* GitHub Activity Section */}
      <section className="github-activity-section">
        <div className="section-header-centered">
          <h2 className="section-title">GitHub Activity</h2>
          <p className="section-subtitle">
            My open-source contributions and coding journey
          </p>
        </div>
        <div className="github-activity-container">
          <div className="github-stats-card">
            <a
              href="https://github.com/mrxdevs"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <div className="github-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div className="github-username">
                <span className="username-label">@mrxdevs</span>
                <span className="view-profile">View Profile →</span>
              </div>
            </a>
          </div>
          <div className="github-contribution-graph">
            <img
              src="https://ghchart.rshah.org/a855f7/mrxdevs"
              alt="GitHub Contribution Graph"
              className="contribution-image"
            />
          </div>
        </div>
      </section>

      {/* LeetCode Stats Section */}
      <section className="leetcode-stats-section">
        <div className="section-header-centered">
          <h2 className="section-title">LeetCode Activity</h2>
          <p className="section-subtitle">
            Problem-solving journey and competitive programming stats
          </p>
        </div>
        <div className="leetcode-stats-container">
          <div className="leetcode-profile-card">
            <a
              href="https://leetcode.com/mrxamjad"
              target="_blank"
              rel="noopener noreferrer"
              className="leetcode-link"
            >
              <div className="leetcode-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </div>
              <div className="leetcode-username">
                <span className="username-label">@mrxamjad</span>
                <span className="view-profile">View Profile →</span>
              </div>
            </a>
          </div>
          <div className="leetcode-stats-grid">
            <img
              src="https://leetcard.jacoblin.cool/mrxamjad?theme=dark&font=Ubuntu&ext=heatmap"
              alt="LeetCode Stats"
              className="leetcode-card-image"
            />
          </div>
        </div>
      </section>

      {/* Coding Ninjas Stats Section */}
      <section className="coding-ninjas-stats-section">
        <div className="section-header-centered">
          <h2 className="section-title">Coding Ninjas Activity</h2>
          <p className="section-subtitle">
            Practice and learning journey on Coding Studio
          </p>
        </div>
        <div className="coding-ninjas-stats-container">
          <div className="coding-ninjas-profile-card">
            <a
              href="https://www.codingninjas.com/studio/profile/mrxamjad"
              target="_blank"
              rel="noopener noreferrer"
              className="coding-ninjas-link"
            >
              <div className="coding-ninjas-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h2v2h-2v-2zm0 4h2v2h-2v-2z" />
                </svg>
              </div>
              <div className="coding-ninjas-username">
                <span className="username-label">@mrxamjad</span>
                <span className="view-profile">View Profile →</span>
              </div>
            </a>
          </div>
          <div className="coding-ninjas-stats-grid">
            <div className="coding-ninjas-placeholder">
              <div className="placeholder-content">
                <div className="placeholder-icon-large">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    <path d="M12 8v8M8 12h8" />
                  </svg>
                </div>
                <h3 className="placeholder-title">Coding Ninjas Profile</h3>
                <p className="placeholder-description">
                  View my complete coding activity, problem-solving stats, and learning progress on Coding Ninjas Studio
                </p>
                <a
                  href="https://www.naukri.com/code360/profile/mrxamjad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="placeholder-button"
                >
                  View Full Profile
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TakeUForward Stats Section */}
      <section className="takeuforward-stats-section">
        <div className="section-header-centered">
          <h2 className="section-title">TakeUForward Activity</h2>
          <p className="section-subtitle">
            DSA learning journey and problem-solving on TUF+
          </p>
        </div>
        <div className="takeuforward-stats-container">
          <div className="takeuforward-profile-card">
            <a
              href="https://takeuforward.org/plus/profile/mrxamjad"
              target="_blank"
              rel="noopener noreferrer"
              className="takeuforward-link"
            >
              <div className="takeuforward-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V7.3l7-3.11v8.8z" />
                </svg>
              </div>
              <div className="takeuforward-username">
                <span className="username-label">@mrxamjad</span>
                <span className="view-profile">View Profile →</span>
              </div>
            </a>
          </div>
          <div className="takeuforward-stats-grid">
            <div className="takeuforward-placeholder">
              <div className="placeholder-content">
                <div className="placeholder-icon-large">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v6m0 6v6" />
                  </svg>
                </div>
                <h3 className="placeholder-title">TakeUForward Plus Profile</h3>
                <p className="placeholder-description">
                  Explore my DSA learning path, problem-solving progress, and course completion on TakeUForward Plus
                </p>
                <a
                  href="https://takeuforward.org/plus/profile/mrxamjad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="placeholder-button"
                >
                  View Full Profile
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
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
