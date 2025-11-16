"use client";

import Link from "next/link";

export default function ServicesPage() {
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
            icon: "📱",
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
            icon: "🎨",
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
            icon: "💻",
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
            icon: "⚙️",
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
