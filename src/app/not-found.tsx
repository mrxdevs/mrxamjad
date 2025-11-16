"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
    const router = useRouter();
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        if (countdown === 0) {
            router.push("/");
            return;
        }

        const timer = setTimeout(() => {
            setCountdown(countdown - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [countdown, router]);

    return (
        <div className="not-found-page">
            <div className="not-found-content">
                {/* Animated 404 */}
                <div className="error-code">
                    <span className="digit">4</span>
                    <span className="digit animated">0</span>
                    <span className="digit">4</span>
                </div>

                {/* Message */}
                <h1 className="error-title">Oops! Page Not Found</h1>
                <p className="error-description">
                    Looks like you've ventured into uncharted territory.
                    The page you're looking for doesn't exist or has been moved.
                </p>

                {/* Countdown */}
                <div className="redirect-info">
                    <p>Redirecting to home in <span className="countdown">{countdown}</span> seconds...</p>
                </div>

                {/* Action Buttons */}
                <div className="error-actions">
                    <Link href="/" className="btn-primary">
                        Go Home
                    </Link>
                    <Link href="/projects" className="btn-secondary">
                        View Projects
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                        Contact Me
                    </Link>
                </div>

                {/* Decorative Elements */}
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>
        </div>
    );
}
