import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <span className="tag tag-purple">{project.category}</span>
            </div>
            <p className="project-desc">{project.desc}</p>
            <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                ))}
            </div>
            <a href={project.ghUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
            </a>
        </div>
    );
};

export default ProjectCard;