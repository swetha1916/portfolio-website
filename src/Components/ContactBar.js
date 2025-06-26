import React from 'react';
import './ContactBar.css';

const ContactBar = () => {
  return (
    // to associate each icon with a link 
    <div className="contact-bar">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" title="GitHub">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="mailto:yourgmail@gmail.com" title="Gmail">
        <i className="fas fa-envelope"></i>
      </a>
      <a href="mailto:you@outlook.com" title="Outlook">
        <i className="fas fa-paper-plane"></i>
      </a>
    </div>
  );
};

export default ContactBar;