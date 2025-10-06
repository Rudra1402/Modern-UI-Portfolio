import React, { useState, useEffect } from 'react';
import { projects, socials, workExp, education, techSkills } from './data/constants';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="portfolio">
        <header className={scrolled ? 'header scrolled' : 'header'}>
          <div className="container">
            <div className="header-content">
              <div className="logo">
                <span className="logo-icon">&lt;/&gt;</span>
                <span className="logo-text">Rudra Patel</span>
              </div>

              <nav className={mobileMenuOpen ? 'nav open' : 'nav'}>
                {['home', 'experience', 'projects', 'skills', 'education'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={activeSection === section ? 'nav-link active' : 'nav-link'}
                  >
                    {section}
                  </button>
                ))}
              </nav>

              {/* <div className="social-icons">
                {socials.slice(0, 3).map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    {social.name.charAt(0)}
                  </a>
                ))}
              </div> */}

              <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </header>

        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="badge">Software Engineer at IBM</div>
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

        <section id="experience" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-icon">💼</span>
              <h2 className="section-title">Work Experience</h2>
            </div>
            <div className="experience-list">
              {workExp.map((job, idx) => (
                <div key={idx} className="experience-card">
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
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="section-icon">🚀</span>
              <h2 className="section-title">Featured Projects</h2>
            </div>
            <div className="projects-grid">
              {projects
                .filter((project) => project.isVisible)
                .map((project, idx) => (
                <div key={idx} className="project-card">
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
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-icon">⚡</span>
              <h2 className="section-title">Technical Skills</h2>
            </div>
            <div className="skills-grid">
              {Object.entries(techSkills).map(([category, skills], idx) => (
                <div key={idx} className="skill-card">
                  <h3 className="skill-category">{category}</h3>
                  <div className="skills-list">
                    {skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section section-alt">
          <div className="container">
            <div className="section-header">
              <span className="section-icon">🎓</span>
              <h2 className="section-title">Education</h2>
            </div>
            <div className="education-grid">
              {education.map((edu, idx) => (
                <div key={idx} className="education-card">
                  <h3 className="edu-institute">{edu.institute}</h3>
                  <p className="edu-degree">{edu.courseDegree} in {edu.major}</p>
                  <p className="edu-location">{edu.city}</p>
                  <div className="edu-footer">
                    <span className="tag tag-green">{edu.duration}</span>
                    <span className="edu-cgpa">CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p>© 2024 Rudra Patel. Built with React & Pure CSS.</p>
          </div>
        </footer>
      </div>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .portfolio {
          background: linear-gradient(135deg, #0a0e27 0%, #1a1d3a 50%, #0a0e27 100%);
          min-height: 100vh;
          width: 100vw;
          color: #e2e8f0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(10, 14, 39, 0.95);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 30px rgba(59, 130, 246, 0.1);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 24px;
          font-weight: 700;
        }

        .logo-icon {
          color: #3b82f6;
          font-size: 28px;
        }

        .logo-text {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav {
          display: flex;
          gap: 32px;
        }

        .nav-link {
          background: none;
          border: none;
          color: #94a3b8;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s ease;
          text-transform: capitalize;
          position: relative;
          padding: 8px 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #3b82f6;
          transition: width 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #3b82f6;
          outline: none;
        }

        .nav-link.active::after {
          width: 100%;
        }

        .social-icons {
          display: flex;
          gap: 12px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-2px);
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }

        .menu-toggle span {
          width: 24px;
          height: 2px;
          background: #e2e8f0;
          display: block;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          overflow: hidden;
        }

        .circle {
          position: absolute;
          border-radius: 50%;
          animation: float 20s infinite ease-in-out;
        }

        .circle-1 {
          width: 500px;
          height: 500px;
          top: -200px;
          right: -100px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
        }

        .circle-2 {
          width: 400px;
          height: 400px;
          bottom: -150px;
          left: -100px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%);
        }

        .circle-3 {
          width: 300px;
          height: 300px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%);
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
        }

        .badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          color: #3b82f6;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 20px;
          line-height: 1.7;
          color: #94a3b8;
          margin-bottom: 32px;
          max-width: 600px;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 16px 32px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.4);
        }

        .btn-secondary {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.3);
        }

        .btn-secondary:hover {
          background: rgba(59, 130, 246, 0.2);
          transform: translateY(-2px);
        }

        .social-links {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        .social-link {
          color: #64748b;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .social-link:hover {
          color: #3b82f6;
        }

        .section {
          padding: 100px 0;
        }

        .section-alt {
          background: rgba(255, 255, 255, 0.02);
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 64px;
        }

        .section-icon {
          font-size: 48px;
        }

        .section-title {
          font-size: 48px;
          font-weight: 800;
        }

        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .experience-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .experience-card:hover {
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-4px);
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
          gap: 16px;
          flex-wrap: wrap;
        }

        .exp-role {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .exp-company {
          color: #94a3b8;
          font-size: 18px;
        }

        .exp-desc {
          list-style: none;
        }

        .exp-desc li {
          padding-left: 24px;
          margin-bottom: 12px;
          color: #94a3b8;
          line-height: 1.7;
          position: relative;
        }

        .exp-desc li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #3b82f6;
        }

        .tag {
          padding: 6px 12px;
          border-radius: 8px;
          height: fit-content;
          font-size: 14px;
          font-weight: 600;
        }

        .tag-blue {
          background: rgba(59, 130, 246, 0.1);
          color: #3b82f6;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .tag-purple {
          background: rgba(139, 92, 246, 0.1);
          color: #8b5cf6;
          border: 1px solid rgba(139, 92, 246, 0.2);
        }

        .tag-green {
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 24px;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 28px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-4px);
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
          gap: 12px;
        }

        .project-name {
          font-size: 24px;
          font-weight: 700;
        }

        .project-desc {
          color: #94a3b8;
          line-height: 1.7;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .tech-tag {
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          font-size: 13px;
          color: #cbd5e1;
        }

        .project-link {
          color: #8b5cf6;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
        }

        .project-link:hover {
          color: #a78bfa;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 24px;
        }

        .skill-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 28px;
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          border-color: rgba(34, 197, 94, 0.3);
          transform: translateY(-4px);
        }

        .skill-category {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-tag {
          padding: 8px 16px;
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.2);
          border-radius: 8px;
          font-size: 14px;
        }

        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 24px;
        }

        .education-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 28px;
          transition: all 0.3s ease;
        }

        .education-card:hover {
          border-color: rgba(34, 197, 94, 0.3);
          transform: translateY(-4px);
        }

        .edu-institute {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .edu-degree {
          color: #94a3b8;
          font-size: 18px;
          margin-bottom: 4px;
        }

        .edu-location {
          color: #64748b;
          margin-bottom: 20px;
        }

        .edu-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .edu-cgpa {
          color: #cbd5e1;
          font-weight: 600;
        }

        .footer {
          padding: 40px 0;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #94a3b8;
        }

        @media (max-width: 768px) {
          .nav,
          .social-icons {
            display: none;
          }

          .menu-toggle {
            display: flex;
          }

          .nav.open {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 80px;
            left: 0;
            right: 0;
            background: rgba(10, 14, 39, 0.98);
            padding: 24px;
            gap: 16px;
          }

          .hero-title {
            font-size: 40px;
          }

          .section-title {
            font-size: 32px;
          }

          .projects-grid,
          .skills-grid,
          .education-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

export default App;