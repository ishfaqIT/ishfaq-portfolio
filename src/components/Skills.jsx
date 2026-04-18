import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: "devicon-c-plain" },
      { name: "C++", icon: "devicon-cplusplus-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "Python", icon: "devicon-python-plain" },
      { name: "PHP", icon: "devicon-php-plain" }
    ]
  },
  {
    title: "Web Technologies",
    skills: [
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "React", icon: "devicon-react-original" }
    ]
  },
  {
    title: "Database & Cloud / OS",
    skills: [
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "AWS", icon: "devicon-amazonwebservices-original" },
      { name: "Red Hat Linux", icon: "devicon-redhat-plain" }
    ]
  },
  {
    title: "AI Tools",
    skills: [
      { name: "ChatGPT", icon: "fa-solid fa-robot" },
      { name: "Claude", icon: "fa-solid fa-brain" },
      { name: "Cursor", icon: "fa-solid fa-terminal" },
      { name: "BlackBox AI", icon: "fa-solid fa-box-open" },
      { name: "Google AI", icon: "fa-brands fa-google" }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="orbitron">Technical Arsenal</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="skill-category glass-panel"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <h3 className="orbitron category-title text-gradient">{category.title}</h3>
              <div className="skills-container">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-badge neon-border">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
