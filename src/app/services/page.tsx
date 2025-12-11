"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ServicesPage() {
    // Add Service schema structured data
    useEffect(() => {
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Mobile Application Development",
            "provider": {
                "@type": "Person",
                "name": "Amjad Ali",
                "url": "https://mrxamjad.com"
            },
            "areaServed": {
                "@type": "City",
                "name": "Chennai"
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Mobile Development Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Flutter Development",
                            "description": "Cross-platform mobile app development using Flutter"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "iOS Development",
                            "description": "Native iOS app development using Swift"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Android Development",
                            "description": "Native Android app development using Kotlin"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "React Native Development",
                            "description": "Cross-platform development using React Native"
                        }
                    }
                ]
            }
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(serviceSchema);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const services = [
        {
            title: "Mobile Development",
            description: "Native and cross-platform mobile applications built with Flutter, Kotlin, and Swift for exceptional performance and user experience.",
            features: [
                "iOS & Android Development",
                "Cross-platform Solutions",
                "Native Performance",
                "App Store Deployment",
            ],
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12" y2="18" />
                </svg>
            ),
        },
        {
            title: "UI/UX Design",
            description: "Intuitive interfaces and seamless user experiences that drive engagement and conversions.",
            features: [
                "User Research & Testing",
                "Wireframing & Prototyping",
                "Design Systems",
                "Responsive Design",
            ],
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
            ),
        },
        {
            title: "Web Development",
            description: "Modern, responsive websites and web applications optimized for performance and search engines.",
            features: [
                "React & Next.js",
                "Responsive Design",
                "SEO Optimization",
                "Performance Tuning",
            ],
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            ),
        },
        {
            title: "Backend & APIs",
            description: "Scalable backend solutions and APIs designed for reliability, security, and growth.",
            features: [
                "REST & GraphQL APIs",
                "Database Architecture",
                "Cloud Infrastructure",
                "Real-time Features",
            ],
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m18.2 5.2l-4.2-4.2m0-6l4.2-4.2" />
                </svg>
            ),
        },
    ];

    const process = [
        {
            number: "01",
            title: "Discovery",
            description: "Understanding your goals and requirements through detailed consultation.",
        },
        {
            number: "02",
            title: "Design",
            description: "Creating prototypes and designs that align with your vision.",
        },
        {
            number: "03",
            title: "Development",
            description: "Building robust solutions with clean code and best practices.",
        },
        {
            number: "04",
            title: "Delivery",
            description: "Testing, deployment, and ongoing support for success.",
        },
    ];

    return (
        <div className="services-page-new">
            {/* Hero Section */}
            <section className="services-hero-new">
                <h1 className="services-title-new">
                    Services <span className="gradient">I Offer</span>
                </h1>
                <p className="services-subtitle-new">
                    End-to-end digital solutions from concept to deployment
                </p>
            </section>

            {/* Services Grid */}
            <section className="services-grid-section-new">
                <div className="services-grid-new">
                    {services.map((service) => (
                        <div key={service.title} className="service-card-new">
                            <div className="service-icon-new">{service.icon}</div>
                            <h3 className="service-title-new">{service.title}</h3>
                            <p className="service-description-new">{service.description}</p>
                            <ul className="service-features-new">
                                {service.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="services-process-new">
                <h2 className="process-title-new">My Process</h2>
                <div className="process-grid-new">
                    {process.map((step) => (
                        <div key={step.number} className="process-step-new">
                            <div className="step-number-new">{step.number}</div>
                            <h3 className="step-title-new">{step.title}</h3>
                            <p className="step-description-new">{step.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="services-cta-new">
                <div className="cta-content-new">
                    <h2 className="cta-title-new">Let's Build Something Great</h2>
                    <p className="cta-subtitle-new">
                        Ready to bring your project to life? Let's discuss your ideas.
                    </p>
                    <div className="cta-buttons-new">
                        <Link href="/contact" className="cta-button-primary-new">
                            Start a Project
                        </Link>
                        <Link href="/projects" className="cta-button-secondary-new">
                            View Work
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
