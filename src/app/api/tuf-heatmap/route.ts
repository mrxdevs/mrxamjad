import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username') || 'mrxamjad';
    const year = searchParams.get('year') || new Date().getFullYear().toString();

    try {
        const response = await fetch(
            `https://backend-go.takeuforward.org/api/v1/streak/heatmap/${username}?year=${year}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                next: { revalidate: 3600 }, // Cache for 1 hour
            }
        );

        if (!response.ok) {
            throw new Error(`TUF API returned ${response.status}`);
        }

        const data = await response.json();

        return NextResponse.json(data, {
            headers: {
                'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
            },
        });
    } catch (error) {
        console.error('Error fetching TUF heatmap:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Failed to fetch heatmap data',
                error: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
