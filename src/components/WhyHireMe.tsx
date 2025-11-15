import Link from "next/link";
import { contact, projects, experience } from "../data/profile";

export default function WhyHireMe() {
    // Calculate stats
    const totalProjects = projects.length;
    const yearsOfExperience = new Date().getFullYear() - 2022; // Started in 2022
    const completedProjects = 15; // You can adjust this number

    const stats = [
        {
            number: `${completedProjects}+`,
            label: "Projects Completed",
        },
        {
            number: `${yearsOfExperience}+`,
            label: "Years Experience",
        },
        {
            number: "10K+",
            label: "Active Users",
        },
    ];

    const reasons = [
        {
            icon: "🚀",
            title: "Fast Delivery",
            description: "Quick turnaround without compromising quality. I value your time and deadlines.",
        },
        {
            icon: "💡",
            title: "Creative Solutions",
            description: "Innovative approaches to complex problems. I think outside the box.",
        },
        {
            icon: "🎯",
            title: "Result Focused",
            description: "Committed to delivering measurable results that drive your business forward.",
        },
        {
            icon: "🤝",
            title: "Great Communication",
            description: "Clear, transparent communication throughout the project lifecycle.",
        },
    ];

    return (
        <div className="why-hire-me">
            <div className="why-hire-content">
                {/* Left Side - Image/Avatar */}
                <div className="why-hire-image">
                    <div className="hire-avatar-circle">
                        <div className="hire-avatar">
                            {contact.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="why-hire-text">
                    <h2 className="why-hire-title">
                        Why <span className="gradient">Hire me</span>?
                    </h2>
                    <p className="why-hire-description">
                        With over {yearsOfExperience} years of experience in mobile and web development,
                        I bring a unique blend of technical expertise and creative problem-solving.
                        I'm passionate about building products that users love and businesses rely on.
                    </p>

                    {/* Stats */}
                    <div className="why-hire-stats">
                        {stats.map((stat) => (
                            <div key={stat.label} className="stat-item">
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Reasons Grid */}
                    <div className="hire-reasons">
                        {reasons.map((reason) => (
                            <div key={reason.title} className="reason-item">
                                <span className="reason-icon">{reason.icon}</span>
                                <div>
                                    <h4 className="reason-title">{reason.title}</h4>
                                    <p className="reason-description">{reason.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="why-hire-cta">
                        <Link href="/contact" className="hire-me-button">
                            Hire me →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
