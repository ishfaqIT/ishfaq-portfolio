import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const educationData = [
  {
    degree: "Master's in Information Technology",
    institution: "University of Kashmir",
    icon: "fa-graduation-cap"
  },
  {
    degree: "B.Ed",
    institution: "University of Kashmir",
    icon: "fa-book"
  },
  {
    degree: "Bachelor's in Computer Applications",
    institution: "CASET College of Computer Sciences",
    icon: "fa-laptop-code"
  },
  {
    degree: "AWS Certification",
    institution: "RTS, Bangalore",
    icon: "fa-cloud"
  },
  {
    degree: "Red Hat Linux Server Administration",
    institution: "Real Time Signals (RTS), Bangalore",
    icon: "fa-server"
  }
];

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="orbitron">Education Profile</h2>
      
      <div className="timeline-container">
        {educationData.map((item, index) => (
          <motion.div 
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="timeline-dot neon-border">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <div className={`timeline-content glass-panel ${index % 2 === 0 ? 'left' : 'right'}`}>
              <h3 className="orbitron text-gradient">{item.degree}</h3>
              <p>{item.institution}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
