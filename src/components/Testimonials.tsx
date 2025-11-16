"use client";

export default function Testimonials() {
    const testimonials = [
        {
            quote: "Impressed by their creative vision and technical prowess. They delivered a powerful digital solution that has revolutionized our business operations and customer experience.",
            author: "Navneet Shukla",
            role: "Manager @ Goldie Masale",
            avatar: "NS",
            rating: 5.0,
        },
        {
            quote: "Outstanding digital expertise combined with exceptional project management. Their solution elevated our brand presence while streamlining our operations. Truly a game-changing partnership.",
            author: "Abhinav Singh",
            role: "Team Lead @ Impression",
            avatar: "AS",
            rating: 5.0,
        },
        {
            quote: "Remarkable technical innovation and flawless execution. Their development expertise created a robust platform that exceeded our expectations in both performance and scalability.",
            author: "Rechit",
            role: "Software Engineer",
            avatar: "R",
            rating: 5.0,
        },
        {
            quote: "Exceptional digital solutions that transformed our online presence. Their innovative approach and strategic thinking delivered results beyond expectations. A truly outstanding partner for any business looking to excel digitally.",
            author: "Sunny Yadav",
            role: "Director @ MegaMind",
            avatar: "SY",
            rating: 5.0,
        },
        {
            quote: "Brilliantly executed web design that perfectly captures our brand essence. The seamless functionality and stunning visuals have significantly boosted our online engagement and customer satisfaction.",
            author: "Saddam Hussain",
            role: "Director @ Cake Choices",
            avatar: "SH",
            rating: 5.0,
        },
    ];

    return (
        <div className="testimonials-section-scroll">
            {/* Header */}
            <div className="testimonials-header-scroll">
                <h2 className="testimonials-title-scroll">
                    Testimonials That<br />
                    Speak to <span className="gradient">My Results</span>
                </h2>
                <p className="testimonials-subtitle-scroll">
                    Discover what clients say about working with me. These testimonials reflect
                    the quality, dedication, and results I deliver in every project.
                </p>
            </div>

            {/* Infinite Scroll Container */}
            <div className="testimonials-scroll-container">
                <div className="testimonials-scroll-track">
                    {/* First set of testimonials */}
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={`first-${index}`}
                            className="testimonial-card-scroll"
                        >
                            <div className="testimonial-quote-icon-scroll">❝</div>

                            <div className="testimonial-author-info-scroll">
                                <div className="testimonial-avatar-scroll">
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${testimonial.author}&background=a855f7&color=fff&size=48`}
                                        alt={testimonial.author}
                                    />
                                </div>
                                <div className="testimonial-author-details-scroll">
                                    <h4 className="testimonial-author-name-scroll">{testimonial.author}</h4>
                                    <p className="testimonial-author-role-scroll">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="testimonial-rating-scroll">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="star-filled-scroll">⭐</span>
                                ))}
                            </div>

                            <p className="testimonial-text-scroll">{testimonial.quote}</p>
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={`second-${index}`}
                            className="testimonial-card-scroll"
                        >
                            <div className="testimonial-quote-icon-scroll">❝</div>

                            <div className="testimonial-author-info-scroll">
                                <div className="testimonial-avatar-scroll">
                                    <img
                                        src={`https://ui-avatars.com/api/?name=${testimonial.author}&background=a855f7&color=fff&size=48`}
                                        alt={testimonial.author}
                                    />
                                </div>
                                <div className="testimonial-author-details-scroll">
                                    <h4 className="testimonial-author-name-scroll">{testimonial.author}</h4>
                                    <p className="testimonial-author-role-scroll">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="testimonial-rating-scroll">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="star-filled-scroll">⭐</span>
                                ))}
                            </div>

                            <p className="testimonial-text-scroll">{testimonial.quote}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
