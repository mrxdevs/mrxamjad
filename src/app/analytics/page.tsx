import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Analytics Dashboard - Amjad Ali',
    description: 'View analytics data and insights from Firebase Analytics',
};

export default function AnalyticsPage() {
    return <AnalyticsDashboard />;
}
