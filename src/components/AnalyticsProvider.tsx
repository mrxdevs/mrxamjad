'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { logPageView } from '@/lib/analytics';

/**
 * Analytics Tracker Component (internal)
 * Tracks page views on route changes
 */
function AnalyticsTracker() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // Track page view on route change
        const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');

        // Get page title from document
        const pageTitle = document.title;

        // Log page view
        logPageView(url, pageTitle);
    }, [pathname, searchParams]);

    return null;
}

/**
 * Analytics Provider Component
 * Initializes Firebase Analytics and tracks page views automatically
 */
export default function AnalyticsProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Suspense fallback={null}>
                <AnalyticsTracker />
            </Suspense>
            {children}
        </>
    );
}
