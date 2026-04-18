import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/ishfaq25malik@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
          _subject: "New submission from Portfolio!"
        })
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset(); // clear form
        setTimeout(() => setStatus(""), 5000); // hide message after 5s
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="orbitron">Get In Touch</h2>
        
        <div className="contact-container">
          <div className="contact-info glass-panel">
            <h3 className="orbitron text-gradient">Let's Connect</h3>
            <p>I'm always open to discussing tech, education, or new opportunities.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="icon-wrapper neon-border"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <h4 className="orbitron">Location</h4>
                  <p>📍 Srinagar, Jammu & Kashmir, India</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-wrapper neon-border"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <h4 className="orbitron">Email</h4>
                  <p>ishfaq25malik@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/ishfaq-ahmad-malik-403a7a137/" target="_blank" rel="noopener noreferrer" className="social-icon neon-border-purple"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://github.com/ishfaqIT/" target="_blank" rel="noopener noreferrer" className="social-icon neon-border-purple"><i className="fa-brands fa-github"></i></a>
              <a href="mailto:ishfaq25malik@gmail.com" className="social-icon neon-border-purple"><i className="fa-solid fa-envelope"></i></a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form glass-panel">
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required className="neon-focus" />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required className="neon-focus" />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required className="neon-focus"></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"} <i className="fa-regular fa-paper-plane"></i>
            </button>
            
            {status === "success" && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="success-message">
                <i className="fa-solid fa-circle-check"></i> Message sent successfully!
              </motion.div>
            )}
            {status === "error" && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="error-message">
                <i className="fa-solid fa-triangle-exclamation"></i> Something went wrong.
              </motion.div>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
}
