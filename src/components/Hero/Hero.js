
import React from 'react';
import './Hero.scss';
import { socials } from '../../data/constants';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="badge">Available for opportunities</div>
          <h1 className="hero-title">
            Full-Stack Developer
            <br />
            <span className="gradient-text">& Software Engineer</span>
          </h1>
          <p className="hero-subtitle">
            Building scalable web applications with modern technologies.
            Specializing in React, Node.js, and cloud infrastructure.
          </p>
          <div className="hero-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              View Projects
              <span className="arrow">→</span>
            </button>
            <a href="mailto:rudrapatel0214@gmail.com" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>
          <div className="social-links">
            {socials.map((social, idx) => (
              <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link">
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-bg">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;