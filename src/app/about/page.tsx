"use client";

import { useState } from "react";
import Link from "next/link";
import { contact, skills, certifications, achievements, education, languages } from "../../data/profile";

export default function About() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Amjad is an exceptional talent. His attention to detail and creative vision transformed our project. He's not just a developer, he's a true partner who invests in the success of the product. Highly recommended!",
      author: "Sarah Johnson",
      role: "CEO @ TechCorp",
      avatar: "SJ"
    },
    {
      quote: "Working with Amjad was a game-changer for our mobile app. His expertise in Flutter and native development helped us achieve 99.9% uptime and exceptional performance. A true professional!",
      author: "Michael Chen",
      role: "CTO @ StartupHub",
      avatar: "MC"
    },
    {
      quote: "Amjad's ability to turn complex requirements into elegant solutions is remarkable. His code quality and attention to user experience set him apart from other developers.",
      author: "Emily Rodriguez",
      role: "Product Manager @ InnovateLabs",
      avatar: "ER"
    }
  ];

  const skillCategories = [
    {
      title: "Mobile Development",
      skills: ["Flutter", "Kotlin", "Swift", "React Native", "Jetpack Compose", "SwiftUI"],
      icon: "📱"
    },
    {
      title: "UI/UX Design",
      skills: ["Figma", "Sketch", "Adobe XD", "Prototyping", "User Research", "Material Design 3"],
      icon: "🎨"
    },
    {
      title: "Backend & DevOps",
      skills: ["Node.js", "Express", "Docker", "AWS", "CI/CD", "MongoDB"],
      icon: "⚙️"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-avatar-container">
            <div className="about-avatar">
              <div className="avatar-gradient-ring"></div>
              <div className="avatar-image">
                <div className="avatar-placeholder">
                  {contact.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>
            </div>
          </div>
          <div className="about-hero-text">
            <h1 className="about-title">
              A little bit<br />
              <span className="gradient">about myself</span>
            </h1>
            <div className="about-description">
              <p>
                Hello! I'm {contact.name}, a passionate <strong>Mobile Developer</strong> and <strong>UI/UX Designer</strong> with a
                track for creating intuitive, beautiful, and high-performing digital experiences.
                With over 2 years in the field, I thrive on turning complex problems into elegant,
                user-centric solutions.
              </p>
              <p>
                When I'm not coding or designing, you can find me exploring new technologies,
                contributing to open-source projects, or hiking in the great outdoors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-skills">
        <div className="section-header">
          <h2 className="section-title">My Skillset</h2>
          <p className="section-subtitle">
            Hover over a skill to see my proficiency. I'm always learning and expanding my toolkit.
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

      {/* Testimonials Section */}
      <section className="about-testimonials">
        <div className="section-header">
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">Kind words from people I've worked with.</p>
        </div>
        <div className="testimonial-container">
          <button
            className="testimonial-nav testimonial-prev"
            onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
          >
            ‹
          </button>

          <div className="testimonial-card">
            <div className="quote-icon quote-left">❝</div>
            <p className="testimonial-quote">{testimonials[activeTestimonial].quote}</p>
            <div className="quote-icon quote-right">❞</div>
            <div className="testimonial-author">
              <div className="author-avatar">
                {testimonials[activeTestimonial].avatar}
              </div>
              <div className="author-info">
                <div className="author-name">{testimonials[activeTestimonial].author}</div>
                <div className="author-role">{testimonials[activeTestimonial].role}</div>
              </div>
            </div>
          </div>

          <button
            className="testimonial-nav testimonial-next"
            onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`testimonial-dot ${idx === activeTestimonial ? 'active' : ''}`}
              onClick={() => setActiveTestimonial(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="about-credentials">
        <div className="credentials-grid">
          <div className="credential-card">
            <h3 className="credential-title">🎓 Education</h3>
            <p className="credential-institute">{education.institute}</p>
            <p className="credential-degree">{education.degree}</p>
            <p className="credential-period">{education.period} | CGPA: {education.cgpa}</p>
          </div>
          <div className="credential-card">
            <h3 className="credential-title">🏆 Achievements</h3>
            <ul className="credential-list">
              {achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2 className="cta-title">Let's Create Together</h2>
        <p className="cta-subtitle">
          Have a project in mind? Let's chat! I'm always open to discussing new projects,
          creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="cta-buttons">
          <Link href="/contact" className="cta-button-primary">
            Get In Touch →
          </Link>
          <Link href="/projects" className="cta-button-secondary">
            View My Work
          </Link>
        </div>
      </section>
    </div>
  );
}
