import React, { useState } from 'react';
import './Hobbies.css';
import Masonry from 'react-masonry-css';

import Coding from '../Assets/Hobbies board/Coding.jpg';
import Cooking from '../Assets/Hobbies board/Cooking.jpg';
import Crafts from '../Assets/Hobbies board/Crafts.jpg';
import Drawing from '../Assets/Hobbies board/Drawing.jpg';
import Exploring from '../Assets/Hobbies board/Exploring.jpeg';
import Fashion from '../Assets/Hobbies board/Fashion.jpg';
import Music from '../Assets/Hobbies board/Listening_to_music.jpg';
import Painting from '../Assets/Hobbies board/Painting.jpg';
import Praying from '../Assets/Hobbies board/Praying.jpg';
import Shopping from '../Assets/Hobbies board/Shopping.jpg';
import Singing from '../Assets/Hobbies board/Singing.jpg';
import Violin from '../Assets/Hobbies board/Violin.jpg';
import WatchingTV from '../Assets/Hobbies board/WatchingTV.jpg';

const hobbiesStack = [
    { name: 'Coding', image: Coding },
    { name: 'Cooking', image: Cooking },
    { name: 'Crafts', image: Crafts },
    { name: 'Drawing', image: Drawing },
    { name: 'Exploring', image: Exploring },
    { name: 'Fashion', image: Fashion },
    { name: 'Listening to Music', image: Music },
    { name: 'Painting', image: Painting },
    { name: 'Praying', image: Praying },
    { name: 'Shopping', image: Shopping },
    { name: 'Singing', image: Singing },
    { name: 'Violin', image: Violin },
    { name: 'Watching TV', image: WatchingTV },
  // add more
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Hobbies = () => {
  return (
    <div className="hobbies-page">

      <div className="welcome-bar">
        Welcome to my Pinterest-inspired portfolio website!
      </div>

      <h2 className="hobbies-heading">Hobbies</h2>
      <p className="pins-text">{hobbiesStack.length} pins</p>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="hobbies-masonry-grid"
        columnClassName="hobbies-masonry-column"
      >
          {hobbiesStack.map((hobby, index) => (
            <div className="hobby-pin" key={index}>
              <img src={hobby.image} alt={hobby.name} className="hobby-image" />
              <div className="hobby-overlay">
                <div className="pin-label name-label">{hobby.name}</div>
              </div>
            </div>
          ))}
        </Masonry>
    </div>
  );
};

export default Hobbies;