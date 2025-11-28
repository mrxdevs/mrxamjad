'use client';

import { useEffect, useState } from 'react';

interface AnalyticsData {
  totalPageViews: number;
  totalEvents: number;
  topPages: { page: string; title?: string; views: number }[];
  recentEvents: { name: string; date: string; count: number }[];
  message?: string;
  error?: string;
}

export default function AnalyticsDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    totalPageViews: 0,
    totalEvents: 0,
    topPages: [],
    recentEvents: [],
  });

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch('/api/analytics');
        const data = await response.json();

        setAnalyticsData(data);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
        setAnalyticsData({
          totalPageViews: 0,
          totalEvents: 0,
          topPages: [],
          recentEvents: [],
          error: 'Failed to fetch analytics data',
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalyticsData();
  }, []);

  const exportData = (format: 'json' | 'csv') => {
    if (format === 'json') {
      const dataStr = JSON.stringify(analyticsData, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `analytics-${new Date().toISOString()}.json`;
      link.click();
    } else {
      // CSV export
      let csv = 'Page,Title,Views\n';
      analyticsData.topPages.forEach((page) => {
        csv += `${page.page},"${page.title || page.page}",${page.views}\n`;
      });
      const dataBlob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `analytics-${new Date().toISOString()}.csv`;
      link.click();
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="analytics-loader">
          <div className="loader-spinner"></div>
          <p className="mt-4 text-zinc-400">Loading analytics data from Firebase Analytics...</p>
        </div>
      </div>
    );
  }

  // Calculate engagement rate
  const engagementRate = analyticsData.totalPageViews > 0
    ? ((analyticsData.totalEvents / analyticsData.totalPageViews) * 100).toFixed(1)
    : '0.0';

  return (
    <div className="analytics-dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Analytics Dashboard</h1>
          <p className="dashboard-subtitle">
            Real-time insights from Firebase Analytics
            {analyticsData.message && ` • ${analyticsData.message}`}
          </p>
        </div>
        <div className="export-buttons">
          <button onClick={() => exportData('json')} className="export-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export JSON
          </button>
          <button onClick={() => exportData('csv')} className="export-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export CSV
          </button>
        </div>
      </div>

      {analyticsData.error && (
        <div className="error-banner">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span>{analyticsData.error}</span>
        </div>
      )}

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon page-views-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Page Views (30 days)</p>
            <p className="stat-value">{analyticsData.totalPageViews.toLocaleString()}</p>
            <p className="stat-change positive">Firebase Analytics data</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon events-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </div>
          <div className="stat-content">
            <p className="stat-label">Total Events (30 days)</p>
            <p className="stat-value">{analyticsData.totalEvents.toLocaleString()}</p>
            <p className="stat-change positive">Live tracking enabled</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon engagement-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className="stat-content">
            <p className="stat-label">Engagement Rate</p>
            <p className="stat-value">{engagementRate}%</p>
            <p className="stat-change neutral">Events per page view</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon conversion-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <div className="stat-content">
            <p className="stat-label">Tracked Pages</p>
            <p className="stat-value">{analyticsData.topPages.length}</p>
            <p className="stat-change neutral">Unique pages with traffic</p>
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="dashboard-section">
        <h2 className="section-title">Top Pages (Last 30 Days)</h2>
        {analyticsData.topPages.length > 0 ? (
          <div className="pages-list">
            {analyticsData.topPages.map((page, index) => {
              const maxViews = Math.max(...analyticsData.topPages.map(p => p.views));
              const percentage = maxViews > 0 ? (page.views / maxViews) * 100 : 0;
              return (
                <div key={index} className="page-item">
                  <div className="page-info">
                    <span className="page-rank">#{index + 1}</span>
                    <div>
                      <p className="page-path">{page.page}</p>
                      {page.title && <p className="page-title">{page.title}</p>}
                    </div>
                  </div>
                  <div className="page-stats">
                    <span className="page-views">{page.views.toLocaleString()} views</span>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="empty-state">
            <p>No page view data available yet</p>
            <p className="text-sm text-zinc-500 mt-2">
              {analyticsData.message || 'Data will appear here once you have visitor traffic'}
            </p>
          </div>
        )}
      </div>

      {/* Recent Events */}
      <div className="dashboard-section">
        <h2 className="section-title">Recent Events (Last 7 Days)</h2>
        {analyticsData.recentEvents.length > 0 ? (
          <div className="events-list">
            {analyticsData.recentEvents.map((event, index) => (
              <div key={index} className="event-item">
                <div className="event-icon">
                  <div className="event-dot"></div>
                </div>
                <div className="event-content">
                  <div className="event-header">
                    <span className="event-name">{event.name}</span>
                    <span className="event-time">{event.date}</span>
                  </div>
                  <div className="event-params">
                    <span className="event-param">
                      Count: <strong>{event.count.toLocaleString()}</strong>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No recent events to display</p>
            <p className="text-sm text-zinc-500 mt-2">
              Events will appear here as users interact with your site
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .analytics-dashboard {
          padding: 2rem 1rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .dashboard-title {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .dashboard-subtitle {
          color: #a1a1aa;
          font-size: 0.95rem;
        }

        .error-banner {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.5rem;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 0.75rem;
          color: #fca5a5;
          margin-bottom: 1.5rem;
        }

        .export-buttons {
          display: flex;
          gap: 0.75rem;
        }

        .export-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.625rem 1.25rem;
          background: rgba(168, 85, 247, 0.1);
          border: 1px solid rgba(168, 85, 247, 0.2);
          border-radius: 0.5rem;
          color: #a855f7;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .export-btn:hover {
          background: rgba(168, 85, 247, 0.2);
          border-color: rgba(168, 85, 247, 0.4);
          transform: translateY(-2px);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          gap: 1rem;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(168, 85, 247, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(168, 85, 247, 0.2);
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .page-views-icon {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        }

        .events-icon {
          background: linear-gradient(135deg, #a855f7, #7c3aed);
        }

        .engagement-icon {
          background: linear-gradient(135deg, #ec4899, #db2777);
        }

        .conversion-icon {
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .stat-content {
          flex: 1;
        }

        .stat-label {
          color: #a1a1aa;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }

        .stat-value {
          font-size: 1.875rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.25rem;
        }

        .stat-change {
          font-size: 0.8125rem;
          font-weight: 500;
        }

        .stat-change.positive {
          color: #10b981;
        }

        .stat-change.neutral {
          color: #a1a1aa;
        }

        .dashboard-section {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 1.5rem;
        }

        .pages-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .page-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 0.75rem;
          transition: background 0.2s ease;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .page-item:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .page-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
          min-width: 150px;
        }

        .page-rank {
          background: linear-gradient(135deg, #a855f7, #ec4899);
          color: #fff;
          width: 32px;
          height: 32px;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.875rem;
          flex-shrink: 0;
        }

        .page-path {
          color: #e4e4e7;
          font-weight: 500;
          font-size: 0.9375rem;
        }

        .page-title {
          color: #a1a1aa;
          font-size: 0.8125rem;
          margin-top: 0.25rem;
        }

        .page-stats {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 200px;
        }

        .page-views {
          color: #a1a1aa;
          font-size: 0.875rem;
          text-align: right;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #a855f7, #ec4899);
          border-radius: 3px;
          transition: width 0.5s ease;
        }

        .events-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .event-item {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 0.75rem;
          transition: background 0.2s ease;
        }

        .event-item:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .event-icon {
          display: flex;
          align-items: center;
          padding-top: 0.25rem;
        }

        .event-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a855f7, #ec4899);
        }

        .event-content {
          flex: 1;
        }

        .event-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .event-name {
          font-weight: 600;
          color: #e4e4e7;
          font-family: 'Courier New', monospace;
          background: rgba(168, 85, 247, 0.15);
          padding: 0.25rem 0.75rem;
          border-radius: 0.375rem;
          font-size: 0.875rem;
        }

        .event-time {
          color: #a1a1aa;
          font-size: 0.8125rem;
        }

        .event-params {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .event-param {
          color: #a1a1aa;
          font-size: 0.8125rem;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.625rem;
          border-radius: 0.375rem;
        }

        .event-param strong {
          color: #e4e4e7;
        }

        .empty-state {
          text-align: center;
          padding: 3rem 1rem;
          color: #a1a1aa;
        }

        .analytics-loader {
          text-align: center;
        }

        .loader-spinner {
          width: 48px;
          height: 48px;
          border: 4px solid rgba(168, 85, 247, 0.2);
          border-top-color: #a855f7;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
          }

          .export-buttons {
            width: 100%;
          }

          .export-btn {
            flex: 1;
            justify-content: center;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .dashboard-title {
            font-size: 1.75rem;
          }

          .page-item {
            flex-direction: column;
            align-items: flex-start;
          }

          .page-stats {
            width: 100%;
          }

          .page-views {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}
