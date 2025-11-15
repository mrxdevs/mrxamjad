"use client";

import { useState } from "react";

export default function CTASection() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        setEmail("");
    };

    const skills = [
        "UI/UX Design",
        "App Design",
        "Dashboard",
        "Wireframe",
        "User Research",
        "Mobile Development",
        "Flutter",
        "React Native",
        "Kotlin",
        "Swift",
        "Web Design",
        "Frontend Development",
        "Backend APIs",
        "Cloud Services",
    ];

    const achievements = [
        { icon: "⭐", text: "4.9/5 Average Ratings" },
        { icon: "🏆", text: "25+ Winning Awards" },
        { icon: "✓", text: "Certified Product Designer" },
    ];

    return (
        <div className="cta-section">
            <div className="cta-content">
                <h2 className="cta-heading">
                    Have an Awesome Project<br />
                    Idea? <span className="gradient">Let's Discuss</span>
                </h2>

                <form onSubmit={handleSubmit} className="cta-form">
                    <div className="cta-input-wrapper">
                        <span className="cta-icon">✉</span>
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="cta-input"
                        />
                    </div>
                    <button type="submit" className="cta-submit-btn">
                        Send
                    </button>
                </form>

                <div className="cta-achievements">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="achievement-item">
                            <span className="achievement-icon">{achievement.icon}</span>
                            <span className="achievement-text">{achievement.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scrolling Skills Banner */}
            <div className="skills-banner">
                <div className="skills-track">
                    {[...skills, ...skills].map((skill, index) => (
                        <div key={index} className="skill-item">
                            <span className="skill-star">✦</span>
                            <span className="skill-text">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
