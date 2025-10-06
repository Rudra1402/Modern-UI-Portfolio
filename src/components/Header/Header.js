import React from 'react';
import './Header.scss';

const Header = ({ scrolled, activeSection, scrollToSection, mobileMenuOpen, setMobileMenuOpen }) => {
    return (
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

                    <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;