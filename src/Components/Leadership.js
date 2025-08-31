import React, { useState } from 'react';
import './Leadership.css';
import Masonry from 'react-masonry-css';

import SISA from '../Assets/Leadership board/SISA.jpeg';
import StartCoding from '../Assets/Leadership board/StartCoding.jpeg';
import PinkInTech from '../Assets/Leadership board/PinkInTech.jpeg';
import CSS from '../Assets/Leadership board/CSS.jpg';
import Robotics from '../Assets/Leadership board/Robotics.png';

const leadershipStack = [
    { name: 'McMaster PinkInTech', image: PinkInTech, type: "Club" },
    { name: 'McMaster Start Coding', image: StartCoding, type: "Club" },
    { name: 'World Robotics Olympiad', image: Robotics, type: "Contest" },
    { name: 'McMaster Computer Science Society', image: CSS, type: "Club" },
    { name: 'McMaster South Indian Students Association', image: SISA, type: "Club" },
  // add more
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Leadership = () => {

  const [isTldrActive, setIsTldrActive] = useState(false);
  const [isPinsActive, setIsPinsActive] = useState(true); // Filter ON by default

  return (
    <div className="leadership-page">

      <div className="welcome-bar">
        Welcome to my Pinterest-inspired portfolio website!
      </div>

      <h2 className="leadership-heading">Leadership experience</h2>
      <p className="pins-text">{leadershipStack.length} pins</p>

      <div className="leadership-toggle-buttons">
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
        <div className="leadership-summary">
          <p className="leadership-text">
            <b>Coding Mentor - McMaster Start Coding </b> <br/> 
            • Taught programming to 4th-8th graders in St. Luke Catholic Elementary School, Sandhills Public School and Pauline Johnson Elementary School. <br/>
            • Introduced students to the fundamentals of coding and functional programming concepts.<br/>
            • Assisted with debugging, answered questions, and helped make programming more engaging. <br/>
            <br/> <br/> 
            
            <b>Event Programming and Partnerships Lead - McMaster Computer Science Society</b> <br/> 
            • Previously a year representative where I communicated the concerns of students in my year and helped in planning academic help sessions.<br/>
            • Designed the structure and flow of events, making sure they were impactful and meaningful to the Computer Science community.<br/>
            • Communicated with event guests, partners, sponsors, and other clubs regarding event details. <br/>
            <br/> <br/> 

            <b>Technical Team Member - McMaster PinkInTech</b> <br/> 
            • Was the lead speaker at a lecture where I delivered an in-depth presentation about version control and how to use Git and GitHub, including live demos. <br/>
            • Assisted in planning help sessions and other tech-related events aimed to empower women and other minorities in tech. <br/>
            <br/> <br/> 

            <b>Director of Events - McMaster South Indian Students Association </b> <br/> 
            • Led the planning and execution of cultural south indian events like Onam, Diwali, Pongal, and Ugadi.<br/>
            • Designed interactive activities to engage the audience and coordinated cross-club collaborations.<br/>
            • Ensured the events celebrated diversity by making it inclusive to all types of students through events like game nights, karaoke nights, bonfires and murder mysteries.<br/>
            <br/> <br/> 

            <b>World Robotics Olympiad </b> <br/> 
            • Led a team of 3 in building and programming a color-sensing and obstacle avoiding autonomous robot from scratch using Lego EV3 Mindstorm.<br/>
            <br/> <br/> 
          </p>
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="leadership-masonry-grid"
          columnClassName="leadership-masonry-column"
        >
          {leadershipStack.map((leader, index) => (
            <div className="leader-pin" key={index}>
              <img src={leader.image} alt={leader.name} className="leader-image" />
              <div className="leader-overlay">
                <div className="pin-label name-label">{leader.name}</div>
                <div className="pin-label type-label">{leader.type}</div>
              </div>
            </div>
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default Leadership;