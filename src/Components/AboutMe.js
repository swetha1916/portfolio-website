import React, { useState } from 'react';
import './AboutMe.css';
import Masonry from 'react-masonry-css';

import AI from '../Assets/About me board/AI.jpg';
import Code from '../Assets/About me board/Code.jpg';
import Code2 from '../Assets/About me board/Code2.jpg';
import Coding from '../Assets/About me board/Coding.jpg';
import Fall from '../Assets/About me board/Fall.jpeg';
import McMaster from '../Assets/About me board/McMaster.jpeg';
import Meme from '../Assets/About me board/Meme.jpg';
import Motivation from '../Assets/About me board/Motivation.jpg';
import Motivation2 from '../Assets/About me board/Motivation2.jpg';
import Motivation3 from '../Assets/About me board/Motivation3.jpg';
import Mypic1 from '../Assets/About me board/Mypic1.jpeg';
import Mypic2 from '../Assets/About me board/Mypic2.jpeg';
import Niagara from '../Assets/About me board/Niagara.jpeg';
import Winter from '../Assets/About me board/Winter.jpeg';

const aboutmeStack = [
    { name: 'My picture', image: Mypic1},
    { name: 'McMaster University', image: McMaster},
    { name: 'Coding', image: Coding},
    { name: 'My picture', image: Mypic2},
    { name: 'Fall at Mac', image: Fall},
    { name: 'My picture', image: Niagara},
    { name: 'Coding', image: Code},
    { name: 'AI', image: AI},
    { name: 'Motivation', image: Motivation},
    { name: 'Motivation', image: Motivation2},
    { name: 'Winter', image: Winter},
    { name: 'Coding', image: Code2},
    { name: 'Motivation', image: Motivation3},
    { name: 'Coding', image: Meme}
  // add more
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const AboutMe = () => {

  const [isTldrActive, setIsTldrActive] = useState(false);
  const [isPinsActive, setIsPinsActive] = useState(true); // Filter ON by default

  return (
    <div className="aboutme-page">

      <div className="welcome-bar">
        Welcome to my Pinterest-inspired portfolio website!
      </div>

      <h2 className="aboutme-heading">About me &lt;3</h2>
      <p className="pins-text">{aboutmeStack.length} pins</p>

      <div className="aboutme-toggle-buttons">
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
        <div className="aboutme-summary">
          <p className="aboutme-text">
          <b>Helloooo! I’m Swetha!!</b> <br/> <br/>
            I’m in my third year of Honours Computer Science at McMaster University. I am especially interested in Artificial Intelligence (AI), Machine Learning (ML) and Data Science. Outside of technology, I’m passionate about astronomy, sustainability, art, and music. I expect to graduate by 2027.
            <br/> <br/>
            Since I love Pinterest, I decided to create my own Pinterest-themed portfolio website from scratch :)
            <br/> <br/>
            I love coding for fun (like this website) but I also love coding impactful things that leave a positive impact on society. 
            <br/> <br/>
            I’m looking for 2026 internships! :D
          </p>
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="aboutme-masonry-grid"
          columnClassName="aboutme-masonry-column"
        >
          {aboutmeStack.map((pin, index) => (
            <div className="aboutme-pin" key={index}>
              <img src={pin.image} alt={pin.name} className="pin-image" />
              <div className="pin-overlay">
                <div className="pin-label name-label">{pin.name}</div>
              </div>
            </div>
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default AboutMe;