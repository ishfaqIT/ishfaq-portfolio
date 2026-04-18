import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mainContent = document.querySelector('main');
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      if (mainContent) mainContent.classList.add('content-blur');
    } else {
      document.body.style.overflow = 'unset';
      if (mainContent) mainContent.classList.remove('content-blur');
    }
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled glass-panel' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="logo">
          <img src={logo} alt="Logo" className="nav-logo" />
        </a>
        
        <div className={`nav-links ${menuOpen ? 'open glass-panel' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#research" onClick={() => setMenuOpen(false)}>Research</a>
          <a href="#articles" onClick={() => setMenuOpen(false)}>Articles</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="mailto:ishfaq25malik@gmail.com?subject=Hire Me Inquiry" onClick={() => setMenuOpen(false)} className="btn btn-primary nav-contact-btn">Hire Me</a>
        </div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>
      </div>
    </nav>
  );
}
