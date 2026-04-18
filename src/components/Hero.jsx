import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="hero-greeting text-gradient orbitron">WELCOME TO MY CYBERSPACE</h3>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight-blue orbitron text-shadow-blue">Ishfaq Ahmad Malik</span>
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-subtitle-container"
        >
          <TypeAnimation
            sequence={[
              'Assistant Professor',
              2000,
              'Developer',
              2000,
              'Tech Educator',
              2000,
              'AI Enthusiast',
              2000
            ]}
            wrapper="h2"
            speed={50}
            className="hero-subtitle"
            repeat={Infinity}
          />
        </motion.div>

        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <a href="#projects" className="btn btn-primary">
            <i className="fa-solid fa-code"></i> View My Work
          </a>
          {/*
          <a href="/CV.docx" download="Ishfaq_Ahmad_Malik_CV.docx" className="btn btn-secondary">
            <i className="fa-solid fa-download"></i> Download CV
          </a>
          */}
        </motion.div>
      </div>
    </section>
  );
}
