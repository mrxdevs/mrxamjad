"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { contact } from "../data/profile";

export default function WhyHireMe() {
    const [imageError, setImageError] = useState(false);

    const stats = [
        {
            number: "25+",
            label: "Project Completed",
        },
        {
            number: "15+",
            label: "Clients",
        },
    ];

    return (
        <div className="why-hire-me">
            <div className="why-hire-content">
                {/* Left Side - Image/Avatar */}
                <div className="why-hire-image">
                    <div >
                        {!imageError ? (
                            <Image
                                src="/women_profile.png"
                                alt={`${contact.name} - Mobile Developer`}
                                width={570}
                                height={570}
                                className="hire-profile-image"
                                onError={() => setImageError(true)}
                                priority
                            />
                        ) : (
                            <div className="hire-avatar">
                                {contact.name.split(" ").map((n) => n[0]).join("")}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="why-hire-text">
                    <h2 className="why-hire-title">
                        Why <span className="gradient">Hire me</span>?
                    </h2>
                    <p className="why-hire-description">
                        I'm a passionate mobile developer who transforms ideas into stunning,
                        user-friendly applications. With expertise in React Native, Flutter, and native
                        development, I create seamless experiences that users love and businesses trust.
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
