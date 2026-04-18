import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import myImage from '../assets/ishfaq.jpeg';

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="orbitron">About Me</h2>
        
        <div className="about-container">
          <div className="about-image-wrapper neon-border-purple">
            <div className="about-image-inner">
              <img src={myImage} alt="Ishfaq Ahmad Malik" className="profile-img" />
            </div>
          </div>
          
          <div className="about-text glass-panel">
            <p>
              Passion-driven computer science educator and developer based in <span className="highlight">Srinagar, Kashmir</span>. 
              Currently serving as an Assistant Professor at CASET College of Computer Sciences, Karanagar.
            </p>
            <p>
              My journey seamlessly bridges the gap between complex technical problem-solving and educational excellence.
              Whether I am crafting futuristic web interfaces, architecting backend systems, or lecturing on cutting-edge AI technologies, 
              my goal remains the same: <strong>to innovate and inspire the next generation of tech enthusiasts.</strong>
            </p>
            
            <div className="stats-container">
              <div className="stat-item neon-border">
                <h3 className="orbitron">8+</h3>
                <span>Years Experience</span>
              </div>
              <div className="stat-item neon-border">
                <h3 className="orbitron">5k+</h3>
                <span>Students Taught</span>
              </div>
              <div className="stat-item neon-border">
                <h3 className="orbitron">10+</h3>
                <span>Tech Stacks</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
