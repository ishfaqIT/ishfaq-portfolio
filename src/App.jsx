import React from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import { Subjects, Certifications, ResearchPapers, Articles } from './components/CardSections';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Skills />
        <Experience />
        <ResearchPapers />
        <Articles />
        <Subjects />
        <Certifications />
        <Contact />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(0, 212, 255, 0.2)', marginTop: '4rem', background: 'var(--bg-color-glass)', zIndex: 10, position: 'relative' }}>
        <p className="orbitron text-secondary">Ishfaq Ahmad Malik &copy; {new Date().getFullYear()} - Handcrafted with <span style={{color: 'var(--cyber-purple)'}}>♥</span></p>
      </footer>
    </>
  );
}

export default App;
