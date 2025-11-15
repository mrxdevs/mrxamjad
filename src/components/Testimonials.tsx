"use client";

import { useState } from "react";

export default function Testimonials() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    const testimonials = [
        {
            quote: "ligula a dignissim. Lorem sed lobortis orci elementum itas lobortis.Sed lobortis orci",
            author: "Fawzl Sayed",
            role: "UI/UX Designer",
            avatar: "FS",
            rating: 5.0,
        },
        {
            quote: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
            author: "Fawzl Sayed",
            role: "UI/UX Designer",
            avatar: "FS",
            rating: 5.0,
        },
        {
            quote: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
            author: "Fawzl Sayed",
            role: "UI/UX Designer",
            avatar: "FS",
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum
                    ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    lobortis orci elementum egestas lobortis.
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
