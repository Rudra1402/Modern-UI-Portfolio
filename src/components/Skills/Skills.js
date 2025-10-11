import React from 'react';
import './Skills.scss';
import SkillCard from './SkillCard/SkillCard';
import { techSkills } from '../../data/constants';

const Skills = () => {
    return (
        <section id="skills" className="section section-alt">
            <div className="container">
                <div className="section-header">
                    <span className="section-icon">⚡</span>
                    <h2 className="section-title">Technical Skills</h2>
                </div>
                <div className="skills-grid">
                    {Object.entries(techSkills).map(([category, skills], idx) => (
                        <SkillCard
                            key={idx}
                            category={category}
                            skills={skills}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;