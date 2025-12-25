import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const username = searchParams.get('username') || 'mrxamjad';

        const response = await fetch(
            `https://backend-go.takeuforward.org/api/v1/shared/profile/dsa-progress/${username}`,
            {
                next: { revalidate: 3600 }, // Cache for 1 hour
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json(
                { success: false, message: 'Failed to fetch DSA progress' },
                { status: response.status }
            );
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching DSA progress:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}
