import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import './Projects.scss';
import { projects } from '../../data/constants'

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-icon">🚀</span>
                    <h2 className="section-title">Featured Projects</h2>
                </div>
                <div className="projects-grid">
                    {projects
                        .filter((project) => project.isVisible)
                        .map((project, idx) => (
                            <ProjectCard
                                key={idx}
                                project={project}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;