"use client";

import { useState } from "react";

export default function Testimonials() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            quote: "Working with this developer was an absolute pleasure. They delivered a stunning, responsive website that exceeded our expectations. The attention to detail and commitment to quality was evident throughout the entire project.",
            author: "Sarah Mitchell",
            role: "Marketing Director",
            avatar: "SM",
            rating: 5.0,
        },
        {
            quote: "Exceptional technical skills combined with great communication. The project was completed on time and within budget. I particularly appreciated the proactive approach to solving challenges and the clean, maintainable code delivered.",
            author: "James Chen",
            role: "Product Manager",
            avatar: "JC",
            rating: 5.0,
        },
        {
            quote: "Outstanding work on our e-commerce platform. The developer understood our business needs perfectly and translated them into a seamless user experience. Highly recommend for any web development project.",
            author: "Emily Rodriguez",
            role: "CEO, TechStart Inc",
            avatar: "ER",
            rating: 5.0,
        },
    ];

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="testimonials-section-new">
            {/* Header */}
            <div className="testimonials-header-new">
                <h2 className="testimonials-title-new">
                    Testimonials That<br />
                    Speak to <span className="gradient">My Results</span>
                </h2>
                <p className="testimonials-subtitle-new">
                    Discover what clients say about working with me. These testimonials reflect
                    the quality, dedication, and results I deliver in every project. From concept
                    to completion, I strive to exceed expectations and create lasting partnerships.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="testimonials-grid-new">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="testimonial-card-new"
                    >
                        <div className="testimonial-quote-icon-new">❝</div>

                        <div className="testimonial-author-info-new">
                            <div className="testimonial-avatar-new">
                                <img
                                    src={`https://ui-avatars.com/api/?name=${testimonial.author}&background=a855f7&color=fff&size=48`}
                                    alt={testimonial.author}
                                />
                            </div>
                            <div className="testimonial-author-details-new">
                                <h4 className="testimonial-author-name-new">{testimonial.author}</h4>
                                <p className="testimonial-author-role-new">{testimonial.role}</p>
                            </div>
                        </div>

                        <div className="testimonial-rating-new">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="star-filled">⭐</span>
                            ))}
                            <span className="rating-number">{testimonial.rating}</span>
                        </div>

                        <p className="testimonial-text-new">{testimonial.quote}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
