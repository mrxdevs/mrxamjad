"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { projects as data } from "../data/profile";

export default function ProjectCarousel() {
  const items = data;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const prev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((p) => (p - 1 + items.length) % items.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const next = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((p) => (p + 1) % items.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <div className="carousel">
      {/* Header */}
      <div className="carousel-header">
        <h2 className="carousel-title">
          Let's have a look at<br />
          my <span className="gradient">Portfolio</span>
        </h2>
        <Link href="/projects" className="carousel-see-all">
          See All
        </Link>
      </div>
      <div className="carousel-container">
        <div className="carousel-track">
          {items.map((project, index) => {
            const offset = index - activeIndex;
            const isActive = index === activeIndex;

            // Calculate position based on offset
            // Center card (offset 0): 0px
            // Left card (offset -1): -500px
            // Right card (offset 1): 500px
            const baseCardWidth = 450;
            const gap = 50;
            const translateX = offset * (baseCardWidth + gap);

            return (
              <div
                key={project.title}
                className={`carousel-card ${isActive ? "active" : ""}`}
                style={{
                  transform: `translateX(${translateX}px) scale(${isActive ? 1 : 0.88})`,
                  opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.6,
                  zIndex: isActive ? 10 : 5 - Math.abs(offset),
                  pointerEvents: Math.abs(offset) > 1 ? 'none' : 'auto',
                }}
              >
                <div className="card-bg" />
                <div className="card-content">
                  <div className="label">Featured Project</div>
                  <h3 className="title">{project.title}</h3>
                  <p className="summary">{project.summary}</p>
                  <ul className="points">
                    {project.points.map((point, idx) => (
                      <li key={idx}>•{point}</li>
                    ))}
                  </ul>
                  <div className="links">
                    {project.links.playstore && (
                      <a href={project.links.playstore} className="link-btn" target="_blank" rel="noopener noreferrer">
                        playstore
                      </a>
                    )}
                    {project.links.appstore && (
                      <a href={project.links.appstore} className="link-btn" target="_blank" rel="noopener noreferrer">
                        appstore
                      </a>
                    )}
                    {project.links.site && (
                      <a href={project.links.site} className="link-btn" target="_blank" rel="noopener noreferrer">
                        site
                      </a>
                    )}
                  </div>
                  {isActive && project.links.caseStudy && (
                    <a href={project.links.caseStudy} className="cta" target="_blank" rel="noopener noreferrer">
                      View Case Study →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="carousel-controls">
        <button aria-label="Prev" onClick={prev} className="dot-btn" disabled={isAnimating}>
          ‹
        </button>
        <div className="dots">
          {items.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === activeIndex ? "active" : ""}`}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setActiveIndex(idx);
                  setTimeout(() => setIsAnimating(false), 600);
                }
              }}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
        <button aria-label="Next" onClick={next} className="dot-btn" disabled={isAnimating}>
          ›
        </button>
      </div>
    </div>
  );
}