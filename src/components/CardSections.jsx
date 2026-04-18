import React from 'react';
import { motion } from 'framer-motion';
import './CardSections.css';

const subjects = [
  "Python Programming", 
  "C Programming", 
  "DBMS", 
  "Data Structures", 
  "Computer Architecture", 
  "AI Fundamentals", 
  "Operating Systems"
];

const certifications = [
  {
    title: "Red Hat Linux Server Administration",
    issuer: "RTS Bangalore",
    icon: "devicon-redhat-plain"
  },
  {
    title: "AWS Cloud Certification",
    issuer: "RTS Bangalore",
    icon: "devicon-amazonwebservices-original"
  }
];

const researchPapers = [
  {
    title: "Role of Artificial Intelligence in Modern Education",
    publisher: "Ongoing Research Study",
    year: "Current",
    link: "#",
    status: "Under Process"
  },
  {
    title: "Next-Gen Web Architecture for Institutional Systems",
    publisher: "Ongoing Research Study",
    year: "Current",
    link: "#",
    status: "Under Process"
  },
  {
    title: "AI integration with Database for query optimization",
    publisher: "Ongoing Research Study",
    year: "Current",
    link: "#",
    status: "Under Process"
  }
];

const newsArticles = [
  {
    title: "The Future of IT in Kashmir",
    newspaper: "Greater Kashmir",
    date: "Coming Soon",
    link: "#"
  },
  {
    title: "Empowering Students Through Tech",
    newspaper: "Rising Kashmir",
    date: "Coming Soon",
    link: "#"
  },
  {
    title: "Quality Governance the backbone of just and progressive Society",
    newspaper: "Kashmir Tribune",
    date: "Published",
    link: "#"
  },
  {
    title: "A Generation Adrift: How Abandoning Books Is Silently Killing Creativity and Critical Thought",
    newspaper: "Kashmir Tribune",
    date: "Published",
    link: "#"
  }
];

export function Subjects() {
  return (
    <section id="subjects" className="section">
      <h2 className="orbitron">Subjects Taught</h2>
      <div className="subjects-container">
        {subjects.map((subject, idx) => (
          <motion.div
            key={idx}
            className="subject-pill neon-border-green"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
          >
            {subject}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2 className="orbitron">Certifications</h2>
      <div className="certs-container">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            className="cert-card glass-panel"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="cert-icon neon-border-purple">
              <i className={cert.icon}></i>
            </div>
            <div className="cert-info">
              <h3 className="orbitron">{cert.title}</h3>
              <p className="text-secondary"><i className="fa-solid fa-award"></i> {cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function ResearchPapers() {
  return (
    <section id="research" className="section">
      <h2 className="orbitron">Research Publications</h2>
      <div className="certs-container">
        {researchPapers.map((paper, idx) => (
          <motion.div
            key={idx}
            className="cert-card glass-panel"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="cert-icon neon-border-green">
              <i className="fa-solid fa-file-invoice"></i>
            </div>
            <div className="cert-info">
              <h3 className="orbitron" style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>{paper.title}</h3>
              <p className="text-secondary"><i className="fa-solid fa-book-open"></i> {paper.publisher} — {paper.year}</p>
              {paper.status === "Under Process" ? (
                <button disabled className="btn btn-secondary" style={{ marginTop: '1.2rem', padding: '0.5rem 1rem', fontSize: '0.9rem', opacity: 0.7, cursor: 'not-allowed' }}>
                  <i className="fa-solid fa-person-digging"></i> Under Process
                </button>
              ) : (
                <a href={paper.link} className="btn btn-primary" style={{ marginTop: '1.2rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                   Read Paper <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Articles() {
  return (
    <section id="articles" className="section">
      <h2 className="orbitron">Articles in J&K Newspapers</h2>
      <div className="certs-container">
        {newsArticles.map((article, idx) => (
          <motion.div
            key={idx}
            className="cert-card glass-panel"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className="cert-icon neon-border-purple">
              <i className="fa-solid fa-newspaper"></i>
            </div>
            <div className="cert-info">
              <h3 className="orbitron" style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>{article.title}</h3>
              <p className="text-secondary"><i className="fa-regular fa-calendar-days"></i> {article.newspaper} — {article.date}</p>
              <a href={article.link} className="btn btn-secondary" style={{ marginTop: '1.2rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                 Read Article <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
