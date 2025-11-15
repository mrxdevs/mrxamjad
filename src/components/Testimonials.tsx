"use client";

import { useState } from "react";

export default function Testimonials() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            quote: "Amjad is an exceptional talent. His attention to detail and creative vision transformed our project. He's not just a developer, he's a true partner who invests in the success of the product. Highly recommended!",
            author: "Sarah Johnson",
            role: "CEO @ TechCorp",
            company: "TechCorp",
            avatar: "SJ",
            rating: 5,
        },
        {
            quote: "Working with Amjad was a game-changer for our mobile app. His expertise in Flutter and native development helped us achieve 99.9% uptime and exceptional performance. A true professional!",
            author: "Michael Chen",
            role: "CTO @ StartupHub",
            company: "StartupHub",
            avatar: "MC",
            rating: 5,
        },
        {
            quote: "Amjad's ability to turn complex requirements into elegant solutions is remarkable. His code quality and attention to user experience set him apart from other developers.",
            author: "Emily Rodriguez",
            role: "Product Manager @ InnovateLabs",
            company: "InnovateLabs",
            avatar: "ER",
            rating: 5,
        },
        {
            quote: "Outstanding work! Amjad delivered our project on time and exceeded all expectations. His communication throughout the process was excellent, and the final product was exactly what we needed.",
            author: "David Kumar",
            role: "Founder @ AppVentures",
            company: "AppVentures",
            avatar: "DK",
            rating: 5,
        },
    ];

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="testimonials-section">
            <div className="testimonials-header">
                <h2 className="testimonials-title">
                    What <span className="gradient">Clients Say</span>
                </h2>
                <p className="testimonials-subtitle">
                    Don't just take my word for it - hear from some of the clients I've worked with
                </p>
            </div>

            <div className="testimonials-container">
                <button
                    className="testimonial-arrow testimonial-prev"
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                >
                    ‹
                </button>

                <div className="testimonials-track">
                    {testimonials.map((testimonial, index) => {
                        const offset = index - activeTestimonial;
                        const isActive = index === activeTestimonial;

                        return (
                            <div
                                key={testimonial.author}
                                className={`testimonial-card ${isActive ? "active" : ""}`}
                                style={{
                                    transform: `translateX(${offset * 105}%) scale(${isActive ? 1 : 0.9})`,
                                    opacity: Math.abs(offset) > 1 ? 0 : isActive ? 1 : 0.4,
                                    zIndex: isActive ? 10 : 5 - Math.abs(offset),
                                }}
                            >
                                <div className="testimonial-content">
                                    <div className="quote-icon-large">❝</div>

                                    <div className="testimonial-rating">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="star-icon">⭐</span>
                                        ))}
                                    </div>

                                    <p className="testimonial-text">{testimonial.quote}</p>

                                    <div className="testimonial-author-section">
                                        <div className="author-avatar-large">
                                            {testimonial.avatar}
                                        </div>
                                        <div className="author-details">
                                            <h4 className="author-name-large">{testimonial.author}</h4>
                                            <p className="author-role-large">{testimonial.role}</p>
                                            <p className="author-company">{testimonial.company}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    className="testimonial-arrow testimonial-next"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                >
                    ›
                </button>
            </div>

            <div className="testimonials-dots">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        className={`testimonial-dot-btn ${index === activeTestimonial ? "active" : ""}`}
                        onClick={() => setActiveTestimonial(index)}
                        aria-label={`View testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
