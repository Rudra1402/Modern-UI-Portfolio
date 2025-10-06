import React from 'react';
import './ExperienceCard.scss';

const ExperienceCard = ({ job }) => {
    return (
        <div className="experience-card">
            <div className="exp-header">
                <div className="exp-info">
                    <h3 className="exp-role">{job.role}</h3>
                    <p className="exp-company">{job.company} • {job.location}</p>
                </div>
                <span className="tag tag-blue">{job.duration}</span>
            </div>
            <ul className="exp-desc">
                {job.desc.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExperienceCard;