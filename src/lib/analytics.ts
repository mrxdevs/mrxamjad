import { logEvent, setUserProperties, setUserId } from 'firebase/analytics';
import { analytics } from './firebase';

// Event types for better type safety
export type AnalyticsEventName =
    | 'page_view'
    | 'cta_click'
    | 'project_view'
    | 'contact_click'
    | 'download_resume'
    | 'social_click'
    | 'feedback_submit'
    | 'blog_click';

interface AnalyticsEventParams {
    [key: string]: string | number | boolean;
}

/**
 * Log a custom analytics event to Firebase Analytics
 */
export const logAnalyticsEvent = (
    eventName: AnalyticsEventName | string,
    eventParams?: AnalyticsEventParams
) => {
    if (analytics) {
        try {
            // Send to Firebase Analytics
            logEvent(analytics, eventName, eventParams);
            console.log(`📊 Analytics Event: ${eventName}`, eventParams);
        } catch (error) {
            console.error('Analytics error:', error);
        }
    }
};

/**
 * Track page views
 */
export const logPageView = (pagePath: string, pageTitle?: string) => {
    logAnalyticsEvent('page_view', {
        page_path: pagePath,
        page_title: pageTitle || pagePath,
    });
};

/**
 * Track CTA button clicks
 */
export const logCTAClick = (ctaName: string, ctaLocation?: string) => {
    logAnalyticsEvent('cta_click', {
        cta_name: ctaName,
        cta_location: ctaLocation || 'unknown',
    });
};

/**
 * Track project views
 */
export const logProjectView = (projectName: string, projectId?: string) => {
    logAnalyticsEvent('project_view', {
        project_name: projectName,
        project_id: projectId || projectName,
    });
};

/**
 * Track social media clicks
 */
export const logSocialClick = (platform: string, location?: string) => {
    logAnalyticsEvent('social_click', {
        platform,
        location: location || 'unknown',
    });
};

/**
 * Track contact interactions
 */
export const logContactClick = (contactType: string) => {
    logAnalyticsEvent('contact_click', {
        contact_type: contactType,
    });
};

/**
 * Track resume download
 */
export const logResumeDownload = () => {
    logAnalyticsEvent('download_resume', {
        timestamp: new Date().toISOString(),
    });
};

/**
 * Track feedback submissions
 */
export const logFeedbackSubmit = (rating?: number) => {
    logAnalyticsEvent('feedback_submit', {
        rating: rating || 0,
        timestamp: new Date().toISOString(),
    });
};

/**
 * Track blog post clicks
 */
export const logBlogClick = (blogTitle: string, blogUrl?: string) => {
    logAnalyticsEvent('blog_click', {
        blog_title: blogTitle,
        blog_url: blogUrl || '',
    });
};

/**
 * Set user properties for analytics
 */
export const setAnalyticsUserProperties = (properties: {
    [key: string]: string;
}) => {
    if (analytics) {
        try {
            setUserProperties(analytics, properties);
        } catch (error) {
            console.error('Analytics error:', error);
        }
    }
};

/**
 * Set user ID for analytics
 */
export const setAnalyticsUserId = (userId: string) => {
    if (analytics) {
        try {
            setUserId(analytics, userId);
        } catch (error) {
            console.error('Analytics error:', error);
        }
    }
};
