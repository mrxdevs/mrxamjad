"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "../data/profile";

export default function PortfolioShowcase() {
    const [activeProject, setActiveProject] = useState(0);
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Mobile App", "Web Design", "UI/UX", "Backend"];

    // Get current project
    const currentProject = projects[activeProject];

    return (
        <div className="portfolio-showcase">
            {/* Header */}
            <div className="showcase-header">
                <h2 className="showcase-title">
                    Let's have a look at<br />
                    my <span className="gradient">Portfolio</span>
                </h2>
                <Link href="/projects" className="showcase-see-all">
                    See All
                </Link>
            </div>

            {/* Project Carousel */}
            <div className="showcase-carousel">
                <button
                    className="carousel-arrow carousel-prev"
                    onClick={() => setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)}
                    aria-label="Previous project"
                >
                    ‹
                </button>

                <div className="carousel-track">
                    {projects.map((project, index) => {
                        const offset = index - activeProject;
                        const isActive = index === activeProject;

                        return (
                            <div
                                key={project.title}
                                className={`carousel-project ${isActive ? "active" : ""}`}
                                style={{
                                    transform: `translateX(${offset * 105}%) scale(${isActive ? 1 : 0.85})`,
                                    opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.5,
                                    zIndex: isActive ? 10 : 5 - Math.abs(offset),
                                }}
                            >
                                <div className="project-mockup">
                                    <div className="mockup-header">
                                        <div className="mockup-dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                    <div className="mockup-content">
                                        <div className="mockup-placeholder">
                                            <div className="placeholder-icon">
                                                {project.title.charAt(0)}
                                            </div>
                                            <h3 className="placeholder-title">{project.title}</h3>
                                            <p className="placeholder-summary">{project.summary}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    className="carousel-arrow carousel-next"
                    onClick={() => setActiveProject((prev) => (prev + 1) % projects.length)}
                    aria-label="Next project"
                >
                    ›
                </button>
            </div>

            {/* Carousel Dots */}
            <div className="showcase-dots">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        className={`showcase-dot ${index === activeProject ? "active" : ""}`}
                        onClick={() => setActiveProject(index)}
                        aria-label={`View project ${index + 1}`}
                    />
                ))}
            </div>

            {/* Category Filters */}
            <div className="showcase-categories">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`category-btn ${activeCategory === category ? "active" : ""}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Project Details */}
            <div className="showcase-details">
                <div className="details-content">
                    <h3 className="details-title">
                        {currentProject.title}
                        <Link href={currentProject.links.caseStudy || "#"} className="details-arrow">
                            ↗
                        </Link>
                    </h3>
                    <p className="details-description">
                        {currentProject.summary}
                    </p>
                    <ul className="details-features">
                        {currentProject.points.slice(0, 3).map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                    <div className="details-links">
                        {currentProject.links.playstore && (
                            <a href={currentProject.links.playstore} className="detail-link" target="_blank" rel="noopener noreferrer">
                                Play Store
                            </a>
                        )}
                        {currentProject.links.appstore && (
                            <a href={currentProject.links.appstore} className="detail-link" target="_blank" rel="noopener noreferrer">
                                App Store
                            </a>
                        )}
                        {currentProject.links.site && (
                            <a href={currentProject.links.site} className="detail-link" target="_blank" rel="noopener noreferrer">
                                Website
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
