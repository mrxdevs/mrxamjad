import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Validate required fields
        const { name, email, message, rating } = body;

        if (!name || !email || !message || !rating) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        // Validate rating
        const ratingNum = parseInt(rating);
        if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
            return NextResponse.json(
                { error: "Rating must be between 1 and 5" },
                { status: 400 }
            );
        }

        // Forward request to external API
        const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://appsail-50035953162.catalystappsail.in';
        const response = await fetch(
            `${apiBaseUrl}/feedback/submit`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Cookie": "ZD_CSRF_TOKEN=4c8ca16d-0231-4d34-adca-9f73a1cc7133; _zcsr_tmp=4c8ca16d-0231-4d34-adca-9f73a1cc7133; zalb_4e1fade73c=666956b2b6a8bdab5824e7c79f70aa46",
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    rating: rating.toString(),
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                { error: data.message || "Failed to submit feedback" },
                { status: response.status }
            );
        }

        return NextResponse.json(
            { message: "Feedback submitted successfully", data },
            { status: 200 }
        );
    } catch (error) {
        console.error("Feedback API error:", error);
        return NextResponse.json(
            { error: "Internal server error. Please try again later." },
            { status: 500 }
        );
    }
}
