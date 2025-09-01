import React from 'react';
import './ContactBar.css';
import Slogo from '../Assets/Slogo.png';

const ContactBar = () => {
  return (
    // to associate each icon with a link 
    <div className="contact-bar">

      <a href="#/" title="Home">
        <img src={Slogo} alt="Logo" className="contact-logo" />
      </a>

      <a href="https://github.com/swetha1916" target="_blank" rel="noopener noreferrer" title="GitHub">
        <i className="fab fa-github"></i>
      </a>

      <a href="https://linkedin.com/in/swetha-a-krishnan" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <i className="fab fa-linkedin-in"></i>
      </a>

      <a href="mailto:swetha.ananthak@gmail.com" title="Gmail">
        <i className="fas fa-envelope"></i>
      </a>

    </div>
  );
};

export default ContactBar;