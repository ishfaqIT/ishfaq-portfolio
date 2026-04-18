import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projectsData = [
  {
    title: "My Portfolio",
    description: "A futuristic, sci-fi inspired personal portfolio utilizing React, Vite, and Framer Motion. Features immersive interactive particle grids and purely native CSS glassmorphism.",
    tech: ["React", "CSS3", "Framer Motion", "Vite"],
    link: "#",
    icon: "fa-rocket",
    status: "Live"
  },
  {
    title: "Kawoosa Khalisa Football Club",
    description: "A comprehensive digital web platform developed for Kawoosa Khalisa FC. It manages club information, player roasters, and serves as the primary fan engagement hub.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://kawoosakhalisafootballclub.free.nf/?i=1",
    icon: "fa-futbol",
    status: "Live"
  },
  {
    title: "AI Imtihan Sathi",
    description: "An advanced AI-powered educational application providing students with smart study materials and insights. Currently under active development.",
    tech: ["React", "AI Integration", "Node.js"],
    link: "#",
    icon: "fa-brain",
    status: "Under Process"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="orbitron">Project Arsenal</h2>
        
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={idx} 
              className="project-card glass-panel neon-border"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="project-icon text-gradient">
                <i className={`fa-solid ${project.icon}`}></i>
              </div>
              <h3 className="orbitron project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-pill">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.status === "Under Process" ? (
                  <button disabled className="btn btn-secondary btn-sm" style={{ opacity: 0.7, cursor: 'not-allowed' }}>
                    <i className="fa-solid fa-person-digging"></i> Under Process
                  </button>
                ) : (
                  <a href={project.link} target={project.link !== "#" ? "_blank" : "_self"} rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
