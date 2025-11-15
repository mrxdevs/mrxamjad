import Link from "next/link";
import { contact } from "../data/profile";

export default function WhyHireMe() {
    const stats = [
        {
            number: "450+",
            label: "Project Completed",
        },
        {
            number: "450+",
            label: "Project Completed",
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc,
                        posuere in justo vulputate, bibendum sodales
                    </p>

                    {/* Stats */}
                    <div className="why-hire-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item">
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="why-hire-cta">
                        <Link href="/contact" className="hire-me-button">
                            Hire me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
