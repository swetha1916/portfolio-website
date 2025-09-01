import React, { useState } from 'react';
import './Contact.css';
import Masonry from 'react-masonry-css';

import Gmail from '../Assets/Home page/Gmail.jpg';
import Linkedin from '../Assets/Home page/Linkedin.jpg';
import GitHub from '../Assets/Home page/GitHub.jpg';

const contactStack = [
    { name: 'swetha.ananthak@gmail.com', image: Gmail, type: "Gmail" },
    { name: 'swetha-a-krishnan', image: Linkedin, type: "Linkedin" },
    { name: 'swetha_1916', image: GitHub, type: "GitHub" }
  // add more
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Contact = () => {

  const [isTldrActive, setIsTldrActive] = useState(false);
  const [isPinsActive, setIsPinsActive] = useState(true); // Filter ON by default

  return (
    <div className="contact-page">

      <div className="welcome-bar">
        Welcome to my Pinterest-inspired portfolio website!
      </div>

      <h2 className="contact-heading">My contact</h2>
      <p className="pins-text">{contactStack.length} pins</p>

      <div className="contact-toggle-buttons">
          <button
            className={isPinsActive ? 'active' : ''}
            onClick={() => {
              setIsPinsActive(true);
              setIsTldrActive(false); // disable TLDR
            }}
          >
            Pins
          </button>

          <button
            className={isTldrActive ? 'active' : ''}
            onClick={() => {
              setIsTldrActive(true);
              setIsPinsActive(false); // disable Pins
            }}
          >
            Text Summary
          </button>
      </div>

      {isTldrActive ? (
        <div className="contact-summary">
          <p className="contact-text">
            <b>Gmail:</b> <br/> 
            swetha.ananthak@gmail.com
            <br/> <br/> 
            
            <b>Linkedin:</b> <br/> 
            https://www.linkedin.com/in/swetha-a-krishnan/
            <br/> <br/> 

            <b>GitHub:</b> <br/> 
            swetha_1916
            <br/> <br/> 

            Feel free to contact me! 
          </p>
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="contact-masonry-grid"
          columnClassName="contact-masonry-column"
        >
          {contactStack.map((pin, index) => (
            <div className="contact-pin" key={index}>
              <img src={pin.image} alt={pin.name} className="pin-image" />
              <div className="pin-overlay">
                <div className="pin-label name-label">{pin.name}</div>
                <div className="pin-label type-label">{pin.type}</div>
              </div>
            </div>
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default Contact;