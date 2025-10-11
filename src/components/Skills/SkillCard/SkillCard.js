import React from 'react';
import './SkillCard.scss';

const SkillCard = ({ category, skills }) => {
    return (
        <div className="skill-card">
            <h3 className="skill-category">{category}</h3>
            <div className="skills-list">
                {skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;