"use client";

import { useState, useEffect } from "react";
import { projects as data } from "../data/profile";

export default function ProjectCarousel() {
  const items = data;
  const [i, setI] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const prev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setI((p) => (p - 1 + items.length) % items.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const next = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setI((p) => (p + 1) % items.length);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  // Auto-rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2000);
    return () => clearInterval(interval);
  }, [i, isAnimating]);

  // Get visible items (left, center, right)
  const getVisibleItems = () => {
    const leftIdx = (i - 1 + items.length) % items.length;
    const centerIdx = i;
    const rightIdx = (i + 1) % items.length;
    return [
      { ...items[leftIdx], position: 'left', idx: leftIdx },
      { ...items[centerIdx], position: 'center', idx: centerIdx },
      { ...items[rightIdx], position: 'right', idx: rightIdx }
    ];
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="carousel">
      <div className="carousel-row">
        {visibleItems.map((p) => {
          const isCenter = p.position === 'center';
          return (
            <div
              key={`${p.idx}-${p.position}`}
              className={`carousel-card ${isCenter ? "center" : "side"} ${p.position}`}
              style={{
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="card-bg" />
              <div className="card-content">
                <div className="label">Featured Project</div>
                <h3 className="title">{p.title}</h3>
                <p className="summary">{p.summary}</p>
                <ul className="points">
                  {p.points.map((point, idx) => (
                    <li key={idx}>•{point}</li>
                  ))}
                </ul>
                <div className="links">
                  {p.links.playstore && (
                    <a href={p.links.playstore} className="link-btn" target="_blank" rel="noopener noreferrer">
                      playstore
                    </a>
                  )}
                  {p.links.appstore && (
                    <a href={p.links.appstore} className="link-btn" target="_blank" rel="noopener noreferrer">
                      appstore
                    </a>
                  )}
                  {p.links.site && (
                    <a href={p.links.site} className="link-btn" target="_blank" rel="noopener noreferrer">
                      site
                    </a>
                  )}
                </div>
                {isCenter && p.links.caseStudy && (
                  <a href={p.links.caseStudy} className="cta" target="_blank" rel="noopener noreferrer">
                    View Case Study →
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="carousel-controls">
        <button aria-label="Prev" onClick={prev} className="dot-btn" disabled={isAnimating}>
          ‹
        </button>
        <div className="dots">
          {items.map((_, idx) => (
            <span key={idx} className={`dot ${idx === i ? "active" : ""}`} />
          ))}
        </div>
        <button aria-label="Next" onClick={next} className="dot-btn" disabled={isAnimating}>
          ›
        </button>
      </div>
    </div>
  );
}