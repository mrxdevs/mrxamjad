import { experience } from "../../data/profile";
export const metadata = { title: "Experience — Amjad Ali" };

export default function ExperiencePage() {
  return (
    <div className="experience-page">
      {/* Hero Section */}
      <div className="experience-hero">
        <h1 className="experience-title">
          My <span className="gradient">Work Experience</span>
        </h1>
      </div>

      {/* Timeline */}
      <div className="experience-timeline">
        {experience.map((exp, index) => (
          <div key={exp.company} className="timeline-item">
            {/* Left Side - Company & Date */}
            <div className="timeline-left">
              <h3 className="timeline-company">{exp.company}</h3>
              <p className="timeline-period">{exp.period}</p>
              <p className="timeline-location">{exp.location}</p>
            </div>

            {/* Center - Timeline Dot */}
            <div className="timeline-center">
              <div className="timeline-line"></div>
              <div className={`timeline-dot ${index % 2 === 0 ? 'accent' : ''}`}>
                <div className="timeline-dot-inner"></div>
              </div>
            </div>

            {/* Right Side - Role & Description */}
            <div className="timeline-right">
              <div className="timeline-mobile-company">
                <h4 className="mobile-company-name">{exp.company}</h4>
                <p className="mobile-period">{exp.period}</p>
              </div>
              <h3 className="timeline-role">{exp.role}</h3>
              {exp.type && <span className="timeline-type">{exp.type}</span>}
              <ul className="timeline-bullets">
                {exp.bullets.map((bullet, idx) => (
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