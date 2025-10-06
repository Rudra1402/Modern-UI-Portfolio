import React from 'react';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import './Experience.scss';
import { workExp } from '../../data/constants'

const Experience = () => {
    return (
        <section id="experience" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-icon">💼</span>
                    <h2 className="section-title">Work Experience</h2>
                </div>
                <div className="experience-list">
                    {workExp.map((job, idx) => (
                        <ExperienceCard
                            key={idx}
                            job={job}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;