"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

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
                    description: formData.message,
                    phone: formData.phone,
                }),
            });

            console.log("Response status:", response.status);
            const data = await response.json();
            console.log("Response data:", data);

            // Handle all success status codes (200, 201, etc.)
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
                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
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

    return (
        <div className="contact-page">
            <Toaster
                toastOptions={{
                    className: "",
                    style: {
                        animation: "toast-enter 0.3s ease-out",
                    },
                }}
            />
            <div className="contact-hero">
                <h1 className="contact-title">
                    Let's Create<br />
                    Something <span className="gradient">Amazing</span>
                </h1>
                <p className="contact-subtitle">
                    I'm excited to hear about your project. Fill out the form below and let's get the conversation started.
                </p>
            </div>

            <div className="contact-form-container">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="form-input form-textarea"
                        />
                    </div>

                    <button type="submit" className="form-submit" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message ▷"}
                    </button>
                </form>
            </div>
        </div>
    );
}
