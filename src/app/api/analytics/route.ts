import { NextResponse } from 'next/server';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

// Initialize the Google Analytics Data API client
// Note: This requires a service account key file
// For development, you can use Application Default Credentials or provide a key file path

let analyticsDataClient: BetaAnalyticsDataClient | null = null;

try {
    // Initialize the client
    // In production, use service account credentials from environment variables
    analyticsDataClient = new BetaAnalyticsDataClient({
        credentials: process.env.GOOGLE_APPLICATION_CREDENTIALS
            ? JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)
            : undefined,
    });
} catch (error) {
    console.error('Error initializing Analytics Data Client:', error);
}

const PROPERTY_ID = process.env.GA4_PROPERTY_ID || '464633595'; // Your GA4 property ID

export async function GET() {
    try {
        if (!analyticsDataClient) {
            // Return mock data if Analytics Data API is not configured yet
            return NextResponse.json({
                totalPageViews: 0,
                totalEvents: 0,
                topPages: [],
                recentEvents: [],
                message: 'Google Analytics Data API not configured. Add service account credentials to enable real data.',
            });
        }

        // Fetch page views data
        const [pageViewsResponse] = await analyticsDataClient.runReport({
            property: `properties/${PROPERTY_ID}`,
            dateRanges: [
                {
                    startDate: '30daysAgo',
                    endDate: 'today',
                },
            ],
            dimensions: [
                {
                    name: 'pagePath',
                },
                {
                    name: 'pageTitle',
                },
            ],
            metrics: [
                {
                    name: 'screenPageViews',
                },
            ],
            orderBys: [
                {
                    metric: {
                        metricName: 'screenPageViews',
                    },
                    desc: true,
                },
            ],
            limit: 10,
        });

        // Fetch total events
        const [eventsResponse] = await analyticsDataClient.runReport({
            property: `properties/${PROPERTY_ID}`,
            dateRanges: [
                {
                    startDate: '30daysAgo',
                    endDate: 'today',
                },
            ],
            metrics: [
                {
                    name: 'eventCount',
                },
            ],
        });

        // Fetch recent events
        const [recentEventsResponse] = await analyticsDataClient.runReport({
            property: `properties/${PROPERTY_ID}`,
            dateRanges: [
                {
                    startDate: '7daysAgo',
                    endDate: 'today',
                },
            ],
            dimensions: [
                {
                    name: 'eventName',
                },
                {
                    name: 'date',
                },
            ],
            metrics: [
                {
                    name: 'eventCount',
                },
            ],
            orderBys: [
                {
                    dimension: {
                        dimensionName: 'date',
                    },
                    desc: true,
                },
            ],
            limit: 20,
        });

        // Process top pages
        const topPages = pageViewsResponse.rows?.map((row) => ({
            page: row.dimensionValues?.[0]?.value || '',
            title: row.dimensionValues?.[1]?.value || '',
            views: parseInt(row.metricValues?.[0]?.value || '0', 10),
        })) || [];

        // Calculate total page views
        const totalPageViews = topPages.reduce((sum, page) => sum + page.views, 0);

        // Get total events
        const totalEvents = parseInt(
            eventsResponse.rows?.[0]?.metricValues?.[0]?.value || '0',
            10
        );

        // Process recent events
        const recentEvents = recentEventsResponse.rows?.map((row) => ({
            name: row.dimensionValues?.[0]?.value || '',
            date: row.dimensionValues?.[1]?.value || '',
            count: parseInt(row.metricValues?.[0]?.value || '0', 10),
        })) || [];

        return NextResponse.json({
            totalPageViews,
            totalEvents,
            topPages,
            recentEvents,
        });
    } catch (error: unknown) {
        console.error('Error fetching analytics data:', error);

        // Return friendly error with mock data for development
        return NextResponse.json({
            totalPageViews: 0,
            totalEvents: 0,
            topPages: [],
            recentEvents: [],
            error: 'Failed to fetch analytics data. Please configure Google Analytics Data API credentials.',
            details: error instanceof Error ? error.message : 'Unknown error',
        }, { status: 500 });
    }
}
