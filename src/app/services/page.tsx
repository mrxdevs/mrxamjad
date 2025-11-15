"use client";

import { useState } from "react";
import Link from "next/link";

export default function ServicesPage() {
    const [activeService, setActiveService] = useState(0);

    const services = [
        {
            title: "Mobile Development",
            description: "Native and cross-platform mobile applications with Flutter, Kotlin, and Swift. Delivering high-performance apps with seamless user experiences.",
            features: [
                "iOS & Android Development",
                "Cross-platform with Flutter",
                "Native Performance",
                "App Store Deployment",
            ],
            icon: "📱",
        },
        {
            title: "UI/UX Design",
            description: "Beautiful, intuitive interfaces that users love. From wireframes to high-fidelity prototypes, creating designs that convert.",
            features: [
                "User Research & Testing",
                "Wireframing & Prototyping",
                "Design Systems",
                "Responsive Design",
            ],
            icon: "🎨",
        },
        {
            title: "Web Development",
            description: "Modern, responsive websites and web applications. Built with the latest technologies for optimal performance and SEO.",
            features: [
                "React & Next.js",
                "Responsive Design",
                "SEO Optimization",
                "Performance Tuning",
            ],
            icon: "💻",
        },
        {
            title: "Backend & APIs",
            description: "Scalable backend solutions and RESTful APIs. Secure, efficient, and built to handle growth.",
            features: [
                "REST & GraphQL APIs",
                "Database Design",
                "Cloud Infrastructure",
                "Real-time Features",
            ],
            icon: "⚙️",
        },
    ];

    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <h1 className="services-title">
                    My <span className="gradient">Services</span>
                </h1>
                <p className="services-subtitle">
                    Comprehensive digital solutions tailored to your needs. From concept to deployment,
                    I deliver high-quality work that exceeds expectations.
                </p>
            </section>

            {/* Services Grid */}
            <section className="services-grid-section">
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className={`service-card ${activeService === index ? "active" : ""}`}
                            onMouseEnter={() => setActiveService(index)}
                        >
                            <div className="service-card-inner">
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>

                                <ul className="service-features">
                                    {service.features.map((feature) => (
                                        <li key={feature}>
                                            <span className="feature-bullet">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="service-arrow">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Dots */}
                <div className="services-dots">
                    {services.map((_, index) => (
                        <button
                            key={index}
                            className={`service-dot ${activeService === index ? "active" : ""}`}
                            onClick={() => setActiveService(index)}
                            aria-label={`View service ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="services-process">
                <h2 className="process-title">How I Work</h2>
                <div className="process-steps">
                    <div className="process-step">
                        <div className="step-number">01</div>
                        <h3 className="step-title">Discovery</h3>
                        <p className="step-description">
                            Understanding your goals, target audience, and project requirements through detailed consultation.
                        </p>
                    </div>
                    <div className="process-step">
                        <div className="step-number">02</div>
                        <h3 className="step-title">Design</h3>
                        <p className="step-description">
                            Creating wireframes, prototypes, and visual designs that align with your brand and user needs.
                        </p>
                    </div>
                    <div className="process-step">
                        <div className="step-number">03</div>
                        <h3 className="step-title">Development</h3>
                        <p className="step-description">
                            Building robust, scalable solutions with clean code and best practices for optimal performance.
                        </p>
                    </div>
                    <div className="process-step">
                        <div className="step-number">04</div>
                        <h3 className="step-title">Delivery</h3>
                        <p className="step-description">
                            Testing, deployment, and ongoing support to ensure your project's success and growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta">
                <h2 className="cta-title">Ready to Start Your Project?</h2>
                <p className="cta-subtitle">
                    Let's discuss how I can help bring your ideas to life with cutting-edge technology and design.
                </p>
                <div className="cta-buttons">
                    <Link href="/contact" className="cta-button-primary">
                        Get In Touch →
                    </Link>
                    <Link href="/projects" className="cta-button-secondary">
                        View Portfolio
                    </Link>
                </div>
            </section>
        </div>
    );
}
