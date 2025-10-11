import React from 'react';
import './Education.scss';
import EducationCard from './EducationCard/EducationCard';
import { education } from '../../data/constants';

const Education = () => {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-icon">🎓</span>
          <h2 className="section-title">Education</h2>
        </div>
        <div className="education-grid">
          {education.map((edu, idx) => (
            <EducationCard
              key={idx}
              edu={edu}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;