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
        <div className="why-hire-me-redesign">
            <div className="why-hire-container-redesign">
                {/* Left Side - Image with Rounded Background */}
                <div className="why-hire-image-section">
                    <div className="image-rounded-background">
                        <div className="image-person-wrapper">
                            {!imageError ? (
                                <Image
                                    src="/profile-image.png"
                                    alt={`${contact.name} - Mobile Developer`}
                                    width={450}
                                    height={550}
                                    className="hire-person-image"
                                    onError={() => setImageError(true)}
                                    priority
                                />
                            ) : (
                                <div className="hire-avatar-redesign">
                                    {contact.name.split(" ").map((n) => n[0]).join("")}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="why-hire-content-section">
                    <h2 className="why-hire-title-redesign">
                        Why <span className="gradient-orange">Hire me</span>?
                    </h2>
                    <p className="why-hire-description-redesign">
                        I'm a passionate mobile developer who transforms ideas into stunning,
                        user-friendly applications. With expertise in React Native, Flutter, and native
                        development, I create seamless experiences that users love and businesses trust.
                    </p>

                    {/* Stats */}
                    <div className="why-hire-stats-redesign">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-item-redesign">
                                <div className="stat-number-redesign">{stat.number}</div>
                                <div className="stat-label-redesign">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="why-hire-cta-redesign">
                        <Link href="/contact" className="hire-me-button-redesign">
                            Hire me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
