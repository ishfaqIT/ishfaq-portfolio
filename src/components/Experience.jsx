import React from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const experienceData = [
  {
    role: "Assistant Professor",
    company: "CASET College of Computer Sciences, Karanagar",
    year: "2024–Present",
    icon: "fa-chalkboard-user"
  },
  {
    role: "Assistant Professor",
    company: "SEM College of Management & Computer Sciences",
    year: "2022–2024",
    icon: "fa-chalkboard-user"
  },
  {
    role: "Assistant Professor",
    company: "SM Iqbal College of Computer Sciences & Management",
    year: "2021–2022",
    icon: "fa-chalkboard-user"
  },
  {
    role: "Technical Support Engineer",
    company: "J&K Govt. Dept. of Information Technology",
    year: "2018–2019",
    icon: "fa-headset"
  },
  {
    role: "Lecturer",
    company: "J&K Government",
    year: "2016–2018",
    icon: "fa-person-chalkboard"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="orbitron">Experience Timeline</h2>
      
      <div className="timeline-container">
        {experienceData.map((item, index) => (
          <motion.div 
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline-dot neon-border-purple">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <div className={`timeline-content glass-panel ${index % 2 === 0 ? 'left' : 'right'}`}>
              <span className="timeline-date orbitron">{item.year}</span>
              <h3 className="orbitron">{item.role}</h3>
              <p>{item.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
