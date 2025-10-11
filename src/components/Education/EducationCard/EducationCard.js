import React from 'react';
import './EducationCard.scss';

const EducationCard = ({ edu }) => {
    return (
        <div className="education-card">
            <h3 className="edu-institute">{edu.institute}</h3>
            <p className="edu-degree">{edu.courseDegree} in {edu.major}</p>
            <p className="edu-location">{edu.city}</p>
            <div className="edu-footer">
                <span className="tag tag-green">{edu.duration}</span>
                <span className="edu-cgpa">CGPA: {edu.cgpa}</span>
            </div>
        </div>
    );
};

export default EducationCard;