'use client';

import { useEffect, useState } from 'react';

interface DsaProgressData {
    success: boolean;
    message: string;
    data: {
        success: boolean;
        data: {
            totalEasy: number;
            totalMedium: number;
            totalHard: number;
            solvedEasy: number;
            solvedMedium: number;
            solvedHard: number;
        };
    };
}

interface TufDsaProgressProps {
    username?: string;
}

export default function TufDsaProgress({ username = 'mrxamjad' }: TufDsaProgressProps) {
    const [progressData, setProgressData] = useState<DsaProgressData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProgress() {
            try {
                const response = await fetch(`/api/tuf-dsa-progress?username=${username}`);
                const data = await response.json();

                if (data.success) {
                    setProgressData(data);
                } else {
                    setError(data.message || 'Failed to load DSA progress');
                }
            } catch (err) {
                setError('Failed to fetch DSA progress');
                console.error('DSA progress fetch error:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchProgress();
    }, [username]);

    if (loading) {
        return (
            <div className="dsa-progress-loading">
                <div className="spinner"></div>
            </div>
        );
    }

    if (error || !progressData) {
        return (
            <div className="dsa-progress-error">
                <p>{error || 'Failed to load DSA progress'}</p>
            </div>
        );
    }

    const { data: { data: stats } } = progressData;
    const totalSolved = stats.solvedEasy + stats.solvedMedium + stats.solvedHard;
    const totalProblems = stats.totalEasy + stats.totalMedium + stats.totalHard;

    return (
        <div className="dsa-progress-container">
            <div className="dsa-progress-header">
                <h3 className="dsa-progress-title">DSA Problem Solving Progress</h3>
                <div className="total-solved">
                    <span className="solved-count">{totalSolved}</span>
                    <span className="total-count">/ {totalProblems}</span>
                </div>
            </div>

            <div className="dsa-progress-grid">
                <div className="difficulty-card easy">
                    <div className="difficulty-header">
                        <span className="difficulty-label">Easy</span>
                        <span className="difficulty-count">
                            {stats.solvedEasy} / {stats.totalEasy}
                        </span>
                    </div>
                    <div className="progress-bar">
                        <div
                            className="progress-fill easy-fill"
                            style={{ width: `${(stats.solvedEasy / stats.totalEasy) * 100}%` }}
                        />
                    </div>
                    <div className="percentage">
                        {Math.round((stats.solvedEasy / stats.totalEasy) * 100)}%
                    </div>
                </div>

                <div className="difficulty-card medium">
                    <div className="difficulty-header">
                        <span className="difficulty-label">Medium</span>
                        <span className="difficulty-count">
                            {stats.solvedMedium} / {stats.totalMedium}
                        </span>
                    </div>
                    <div className="progress-bar">
                        <div
                            className="progress-fill medium-fill"
                            style={{ width: `${(stats.solvedMedium / stats.totalMedium) * 100}%` }}
                        />
                    </div>
                    <div className="percentage">
                        {Math.round((stats.solvedMedium / stats.totalMedium) * 100)}%
                    </div>
                </div>

                <div className="difficulty-card hard">
                    <div className="difficulty-header">
                        <span className="difficulty-label">Hard</span>
                        <span className="difficulty-count">
                            {stats.solvedHard} / {stats.totalHard}
                        </span>
                    </div>
                    <div className="progress-bar">
                        <div
                            className="progress-fill hard-fill"
                            style={{ width: `${(stats.solvedHard / stats.totalHard) * 100}%` }}
                        />
                    </div>
                    <div className="percentage">
                        {Math.round((stats.solvedHard / stats.totalHard) * 100)}%
                    </div>
                </div>
            </div>
        </div>
    );
}
