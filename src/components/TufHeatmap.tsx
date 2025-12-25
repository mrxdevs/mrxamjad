'use client';

import { useState, useEffect, useRef } from 'react';

interface ActivityData {
    dsa_practice_problem?: number;
    dsa_theory?: number;
    core_concepts?: number;
    streak_restore?: number;
    total: number;
}

interface MonthData {
    [day: string]: ActivityData;
}

interface HeatmapData {
    success: boolean;
    message: string;
    data: {
        total: number;
        months: {
            [month: string]: MonthData;
        };
    };
}

interface TufHeatmapProps {
    username?: string;
}

export default function TufHeatmap({ username = 'mrxamjad' }: TufHeatmapProps) {
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [heatmapData, setHeatmapData] = useState<HeatmapData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Drag to scroll state
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Year options: 2026 and 2025 only
    const yearOptions = [2026, 2025];

    useEffect(() => {
        async function fetchHeatmap() {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/tuf-heatmap?username=${username}&year=${selectedYear}`);
                const data = await response.json();

                if (data.success) {
                    setHeatmapData(data);
                } else {
                    setError(data.message || 'Failed to load heatmap');
                }
            } catch (err) {
                setError('Failed to fetch heatmap data');
                console.error('Heatmap fetch error:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchHeatmap();
    }, [username, selectedYear]);

    // Calculate DSA practice and theory counts separately
    const getActivityCounts = () => {
        if (!heatmapData?.data?.months) {
            return { dsaPractice: 0, dsaTheory: 0, total: 0 };
        }

        let dsaPractice = 0;
        let dsaTheory = 0;

        Object.values(heatmapData.data.months).forEach((month: any) => {
            Object.values(month).forEach((day: any) => {
                // Activity types are direct properties of the day object
                if (day.dsa_practice_problem) {
                    dsaPractice += day.dsa_practice_problem;
                }
                if (day.dsa_theory) {
                    dsaTheory += day.dsa_theory;
                }
            });
        });

        return { dsaPractice, dsaTheory, total: dsaPractice + dsaTheory };
    };

    const activityCounts = getActivityCounts();

    // Drag to scroll handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        scrollContainerRef.current.style.cursor = 'grabbing';
        scrollContainerRef.current.style.userSelect = 'none';
    };

    const handleMouseLeave = () => {
        if (!scrollContainerRef.current) return;
        setIsDragging(false);
        scrollContainerRef.current.style.cursor = 'grab';
        scrollContainerRef.current.style.userSelect = 'auto';
    };

    const handleMouseUp = () => {
        if (!scrollContainerRef.current) return;
        setIsDragging(false);
        scrollContainerRef.current.style.cursor = 'grab';
        scrollContainerRef.current.style.userSelect = 'auto';
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const getActivityLevel = (total: number): number => {
        if (total === 0) return 0;
        if (total <= 2) return 1;
        if (total <= 4) return 2;
        if (total <= 6) return 3;
        return 4;
    };

    const getActivityColor = (level: number): string => {
        const colors = [
            'rgba(22, 27, 34, 0.8)',      // Level 0 - dark background (no activity)
            'rgba(14, 68, 41, 0.8)',      // Level 1 - dark green
            'rgba(0, 109, 50, 0.8)',      // Level 2 - medium green
            'rgba(38, 166, 65, 0.8)',     // Level 3 - bright green
            'rgba(57, 211, 83, 0.9)',     // Level 4 - very bright green
        ];
        return colors[level] || colors[0];
    };

    const generateCalendarGrid = () => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const grid: React.JSX.Element[] = [];

        if (!heatmapData?.data?.months) return null;

        months.forEach((monthName, monthIndex) => {
            const monthNumber = (monthIndex + 1).toString();
            const monthData = heatmapData.data.months[monthNumber];

            const daysInMonth = new Date(selectedYear, monthIndex + 1, 0).getDate();
            const monthCells: React.JSX.Element[] = [];

            for (let day = 1; day <= daysInMonth; day++) {
                const dayData = monthData?.[day.toString()];
                const total = dayData?.total || 0;
                const level = getActivityLevel(total);
                const color = getActivityColor(level);

                monthCells.push(
                    <div
                        key={`${monthNumber}-${day}`}
                        className="heatmap-cell"
                        style={{ backgroundColor: color }}
                        title={dayData ? `${monthName} ${day}: ${total} activities` : `${monthName} ${day}: No activity`}
                    />
                );
            }

            grid.push(
                <div key={monthNumber} className="heatmap-month">
                    <div className="month-label">{monthName}</div>
                    <div className="month-grid">{monthCells}</div>
                </div>
            );
        });

        return grid;
    };

    if (loading) {
        return (
            <div className="tuf-heatmap-container">
                <div className="heatmap-loading">
                    <div className="loading-spinner"></div>
                    <p>Loading activity data...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="tuf-heatmap-container">
                <div className="heatmap-error">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="tuf-heatmap-container">
            <div className="heatmap-header">
                <div className="heatmap-title-row">
                    <h3 className="heatmap-title">Activity Heatmap</h3>
                    <select
                        className="year-selector"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(Number(e.target.value))}
                    >
                        {yearOptions.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <div className="heatmap-stats">
                    <span className="activity-stat">
                        DSA Practice: <strong>{activityCounts.dsaPractice}</strong>
                    </span>
                    <span className="activity-stat-divider">•</span>
                    <span className="activity-stat">
                        Theory: <strong>{activityCounts.dsaTheory}</strong>
                    </span>
                    <span className="activity-stat-divider">•</span>
                    <span className="activity-stat">
                        Total: <strong>{activityCounts.total}</strong>
                    </span>
                </div>
            </div>
            <div
                ref={scrollContainerRef}
                className="heatmap-grid-wrapper"
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className="heatmap-calendar">{generateCalendarGrid()}</div>
            </div>
            <div className="heatmap-legend">
                <span className="legend-label">Less</span>
                {[0, 1, 2, 3, 4].map((level) => (
                    <div
                        key={level}
                        className="legend-cell"
                        style={{ backgroundColor: getActivityColor(level) }}
                    />
                ))}
                <span className="legend-label">More</span>
            </div>
        </div>
    );
}
