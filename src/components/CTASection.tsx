"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function CTASection() {
    const router = useRouter();
    const [showForm, setShowForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        description: "",
    });

    const handleQuickSubmit = () => {
        setShowForm(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    description: formData.description,
                    phone: formData.phone,
                }),
            });

            const data = await response.json();

            if (response.status === 200 || response.status === 201 || response.ok) {
                toast.success("Message sent successfully! I'll get back to you soon.", {
                    duration: 5000,
                    position: "top-center",
                    icon: "✨",
                    style: {
                        background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                        color: "#fff",
                        padding: "18px 24px",
                        borderRadius: "16px",
                        fontSize: "15px",
                        fontWeight: "500",
                        boxShadow: "0 10px 40px rgba(16, 185, 129, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        maxWidth: "500px",
                    },
                });
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    description: "",
                });
                setShowForm(false);
            } else {
                const errorMessage = data.error || data.message || "Something went wrong. Please try again.";
                toast.error(errorMessage, {
                    duration: 5000,
                    position: "top-center",
                    icon: "⚠️",
                    style: {
                        background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                        color: "#fff",
                        padding: "18px 24px",
                        borderRadius: "16px",
                        fontSize: "15px",
                        fontWeight: "500",
                        boxShadow: "0 10px 40px rgba(239, 68, 68, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        maxWidth: "500px",
                    },
                });
            }
        } catch (error) {
            console.error("Contact form error:", error);
            toast.error("Failed to send message. Please check your connection.", {
                duration: 5000,
                position: "top-center",
                icon: "🔌",
                style: {
                    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                    color: "#fff",
                    padding: "18px 24px",
                    borderRadius: "16px",
                    fontSize: "15px",
                    fontWeight: "500",
                    boxShadow: "0 10px 40px rgba(239, 68, 68, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    maxWidth: "500px",
                },
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
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
        { icon: "🎯", text: "25+ Projects Delivered" },
        { icon: "✓", text: "Certified Product Designer" },
    ];

    return (
        <div className="cta-section">
            <Toaster />
            <div className="cta-content">
                <h2 className="cta-heading">
                    Have an Awesome Project<br />
                    Idea? <span className="gradient">Let's Discuss</span>
                </h2>

                {!showForm ? (
                    <div className="cta-quick-action">
                        <button onClick={handleQuickSubmit} className="cta-quick-btn">
                            <svg className="cta-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <span>Start a Conversation</span>
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="cta-form-expanded">
                        <div className="cta-form-grid">
                            <div className="cta-form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="cta-form-input"
                                />
                            </div>
                            <div className="cta-form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="cta-form-input"
                                />
                            </div>
                            <div className="cta-form-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="cta-form-input"
                                />
                            </div>
                            <div className="cta-form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="cta-form-input"
                                />
                            </div>
                        </div>
                        <div className="cta-form-group-full">
                            <textarea
                                name="description"
                                placeholder="Tell me about your project..."
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="cta-form-textarea"
                            />
                        </div>
                        <div className="cta-form-actions">
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="cta-cancel-btn"
                            >
                                Cancel
                            </button>
                            <button type="submit" disabled={isSubmitting} className="cta-submit-btn-new">
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}

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
