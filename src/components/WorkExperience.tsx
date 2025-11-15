import Link from "next/link";
import { experience } from "../data/profile";

export default function WorkExperience() {
    return (
        <div className="work-experience-section">
            {/* Header */}
            <div className="work-experience-header">
                <h2 className="work-experience-title">
                    My <span className="gradient">Work Experience</span>
                </h2>
                <Link href="/experience" className="work-experience-see-all">
                    See All
                </Link>
            </div>

            {/* Timeline */}
            <div className="work-experience-timeline">
                {experience.slice(0, 3).map((exp, index) => (
                    <div key={exp.company} className="work-experience-item">
                        {/* Left Side - Company & Date */}
                        <div className="work-exp-left">
                            <h3 className="work-exp-company">{exp.company}</h3>
                            <p className="work-exp-period">{exp.period}</p>
                            <p className="work-exp-location">{exp.location}</p>
                        </div>

                        {/* Center - Timeline Dot */}
                        <div className="work-exp-center">
                            <div className="work-exp-line"></div>
                            <div className={`work-exp-dot ${index % 2 === 0 ? 'accent' : ''}`}>
                                <div className="work-exp-dot-inner"></div>
                            </div>
                        </div>

                        {/* Right Side - Role & Description */}
                        <div className="work-exp-right">
                            <h3 className="work-exp-role">{exp.role}</h3>
                            {exp.type && <span className="work-exp-type">{exp.type}</span>}
                            <ul className="work-exp-bullets">
                                {exp.bullets.slice(0, 2).map((bullet, idx) => (
                                    <li key={idx}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
