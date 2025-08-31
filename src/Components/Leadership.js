import React, { useState } from 'react';
import './Leadership.css';
import Masonry from 'react-masonry-css';

import SISA from '../Assets/Leadership board/SISA.png';
import StartCoding from '../Assets/Leadership board/StartCoding.jpg';
import PinkInTech from '../Assets/Leadership board/PinkInTech.jpg';
import CSS from '../Assets/Leadership board/CSS.jpg';
import Robotics from '../Assets/Leadership board/Robotics.jpg';

const leadershipStack = [
    { name: 'McMaster Computer Science Society', image: CSS, type: "Club" },
    { name: 'McMaster Start Coding', image: StartCoding, type: "Club" },
    { name: 'McMaster South Indian Students Association', image: SISA, type: "Club" },
    { name: 'McMaster PinkInTech', image: PinkInTech, type: "Club" },
    { name: 'World Robotics Olympiad', image: Robotics, type: "Contest" }
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
          Hellooss
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