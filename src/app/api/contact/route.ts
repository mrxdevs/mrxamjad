import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const response = await fetch(
            "https://appsail-50035953162.development.catalystappsail.in/contact/submit",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }
        );

        const data = await response.json();

        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: "Failed to submit contact form" },
            { status: 500 }
        );
    }
}
