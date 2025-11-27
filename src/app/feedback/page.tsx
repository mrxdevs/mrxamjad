"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function FeedbackPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        rating: 0,
    });
    const [hoveredStar, setHoveredStar] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRatingClick = (rating: number) => {
        setFormData((prev) => ({ ...prev, rating }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.rating === 0) {
            toast.error("Please select a rating", {
                duration: 3000,
                position: "top-center",
                icon: "⭐",
                style: {
                    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                    color: "#fff",
                    padding: "16px 20px",
                    borderRadius: "12px",
                    fontSize: "14px",
                    fontWeight: "500",
                    boxShadow: "0 8px 32px rgba(239, 68, 68, 0.3)",
                },
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Thank you for your feedback! 🎉", {
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
                    },
                });

                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                    rating: 0,
                });
            } else {
                toast.error(data.error || "Failed to submit feedback", {
                    duration: 5000,
                    position: "top-center",
                    icon: "❌",
                    style: {
                        background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                        color: "#fff",
                        padding: "18px 24px",
                        borderRadius: "16px",
                        fontSize: "15px",
                        fontWeight: "500",
                        boxShadow: "0 10px 40px rgba(239, 68, 68, 0.3)",
                    },
                });
            }
        } catch (error) {
            console.error("Feedback submission error:", error);
            toast.error("Network error. Please try again.", {
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
                    boxShadow: "0 10px 40px rgba(239, 68, 68, 0.3)",
                },
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="feedback-page">
            <Toaster />

            {/* Hero Section */}
            <div className="feedback-hero">
                <div className="feedback-hero-content">
                    <h1 className="feedback-title">
                        We Value Your
                        <span className="feedback-title-gradient"> Feedback</span>
                    </h1>
                    <p className="feedback-subtitle">
                        Your insights help us improve and deliver better experiences. Share your thoughts with us!
                    </p>
                </div>

                {/* Decorative Elements */}
                <div className="feedback-hero-decoration">
                    <div className="feedback-blur feedback-blur-1"></div>
                    <div className="feedback-blur feedback-blur-2"></div>
                    <div className="feedback-blur feedback-blur-3"></div>
                </div>
            </div>

            {/* Feedback Form */}
            <div className="feedback-form-container">
                <form onSubmit={handleSubmit} className="feedback-form">
                    {/* Name Input */}
                    <div className="feedback-form-group">
                        <label htmlFor="name" className="feedback-label">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="feedback-input"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="feedback-form-group">
                        <label htmlFor="email" className="feedback-label">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="feedback-input"
                            placeholder="john@example.com"
                        />
                    </div>

                    {/* Message Textarea */}
                    <div className="feedback-form-group">
                        <label htmlFor="message" className="feedback-label">
                            Your Feedback
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            className="feedback-textarea"
                            placeholder="Tell us what you think..."
                            rows={5}
                        />
                    </div>

                    {/* Star Rating */}
                    <div className="feedback-form-group">
                        <label className="feedback-label">
                            Rate Your Experience
                        </label>
                        <div className="feedback-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    className={`feedback-star ${(hoveredStar || formData.rating) >= star ? "active" : ""
                                        }`}
                                    onMouseEnter={() => setHoveredStar(star)}
                                    onMouseLeave={() => setHoveredStar(0)}
                                    onClick={() => handleRatingClick(star)}
                                    aria-label={`Rate ${star} stars`}
                                >
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                </button>
                            ))}
                        </div>
                        {formData.rating > 0 && (
                            <p className="feedback-rating-text">
                                You rated: {formData.rating} {formData.rating === 1 ? "star" : "stars"}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="feedback-submit"
                    >
                        {isSubmitting ? (
                            <span className="feedback-submit-loading">
                                <svg
                                    className="feedback-spinner"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                </svg>
                                Submitting...
                            </span>
                        ) : (
                            <span>
                                Submit Feedback
                                <svg
                                    className="feedback-submit-arrow"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        )}
                    </button>
                </form>

                {/* Info Card */}
                <div className="feedback-info-card">
                    <div className="feedback-info-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                    </div>
                    <h3 className="feedback-info-title">Why Your Feedback Matters</h3>
                    <p className="feedback-info-description">
                        Every piece of feedback helps us understand your needs better and improve our services.
                        We carefully review all submissions and use them to enhance your experience.
                    </p>
                </div>
            </div>

            <style jsx>{`
        .feedback-page {
          min-height: 100vh;
          background: linear-gradient(to bottom, #0a0a0a, #1a1a1a);
          padding: 2rem 1rem;
          position: relative;
          overflow: hidden;
        }

        .feedback-hero {
          max-width: 1200px;
          margin: 0 auto 4rem;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .feedback-hero-content {
          position: relative;
          z-index: 2;
          padding: 4rem 1rem;
        }

        .feedback-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .feedback-title-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .feedback-subtitle {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .feedback-hero-decoration {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 0;
        }

        .feedback-blur {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
        }

        .feedback-blur-1 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          top: -200px;
          left: -100px;
          animation: float 20s ease-in-out infinite;
        }

        .feedback-blur-2 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #f093fb, #f5576c);
          top: -100px;
          right: -50px;
          animation: float 15s ease-in-out infinite reverse;
        }

        .feedback-blur-3 {
          width: 350px;
          height: 350px;
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
          animation: float 18s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, 30px);
          }
        }

        .feedback-form-container {
          max-width: 700px;
          margin: 0 auto;
          display: grid;
          gap: 2rem;
        }

        .feedback-form {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .feedback-form-group {
          margin-bottom: 2rem;
        }

        .feedback-label {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 0.75rem;
          letter-spacing: 0.3px;
        }

        .feedback-input,
        .feedback-textarea {
          width: 100%;
          padding: 1rem 1.25rem;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #ffffff;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.3s ease;
          outline: none;
        }

        .feedback-input:focus,
        .feedback-textarea:focus {
          background: rgba(255, 255, 255, 0.08);
          border-color: #667eea;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }

        .feedback-input::placeholder,
        .feedback-textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .feedback-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .feedback-rating {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .feedback-star {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.25rem;
          color: rgba(255, 255, 255, 0.2);
          transition: all 0.2s ease;
          transform: scale(1);
        }

        .feedback-star:hover {
          transform: scale(1.15);
        }

        .feedback-star.active {
          color: #fbbf24;
          filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.5));
        }

        .feedback-rating-text {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 500;
        }

        .feedback-submit {
          width: 100%;
          padding: 1.25rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
        }

        .feedback-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(102, 126, 234, 0.4);
        }

        .feedback-submit:active:not(:disabled) {
          transform: translateY(0);
        }

        .feedback-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .feedback-submit-loading {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .feedback-spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .feedback-submit-arrow {
          transition: transform 0.3s ease;
        }

        .feedback-submit:hover:not(:disabled) .feedback-submit-arrow {
          transform: translateX(4px);
        }

        .feedback-info-card {
          background: rgba(102, 126, 234, 0.08);
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
        }

        .feedback-info-icon {
          width: 56px;
          height: 56px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
        }

        .feedback-info-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .feedback-info-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .feedback-form {
            padding: 2rem 1.5rem;
          }

          .feedback-hero-content {
            padding: 2rem 1rem;
          }
        }
      `}</style>
        </div>
    );
}
