import React, { useState } from 'react';
import './Skills.css';
import Masonry from 'react-masonry-css';

import C from '../Assets/Skills board/C.jpg';
import Cplusplus from '../Assets/Skills board/C++.jpg' 
import CSS from '../Assets/Skills board/CSS.jpg';
import Elm from '../Assets/Skills board/Elm.png';
import Excel from '../Assets/Skills board/Excel.jpg';
import Git from '../Assets/Skills board/Git.jpg';
import Github from '../Assets/Skills board/Github.jpg';
import HTML from '../Assets/Skills board/HTML.jpg';
import IBMDB2 from '../Assets/Skills board/IBMDB2.jpg';
import Java from '../Assets/Skills board/Java.jpg';
import Javascript from '../Assets/Skills board/Javascript.jpg';
import Latex from '../Assets/Skills board/Latex.jpg';
import MySQL from '../Assets/Skills board/MySQL.jpg';
import Nodejs from '../Assets/Skills board/Nodejs.jpg';
import Powerpoint from '../Assets/Skills board/Powerpoint.jpg';
import Python from '../Assets/Skills board/Python.jpg';
import Reactjs from '../Assets/Skills board/React.jpg';
import SQL from '../Assets/Skills board/SQL.jpg';
import Word from '../Assets/Skills board/Word.jpg';

const techStack = [
  { name: 'Python', image: Python, type: 'Programming' },
  { name: 'JavaScript', image: Javascript, type: 'Programming' },
  { name: 'GitHub', image: Github, type: 'Tools' },
  { name: 'CSS', image: CSS, type: 'Programming' },
  { name: 'React', image: Reactjs, type: 'Programming' },
  { name: 'C', image: C, type: 'Programming' },
  { name: 'HTML', image: HTML, type: 'Programming' },
  { name: 'Java', image: Java, type: 'Programming' },
  { name: 'SQL', image: SQL, type: 'Databases' },
  { name: 'Node.js', image: Nodejs, type: 'Programming' },
  { name: 'IBM Db2', image: IBMDB2, type: 'Databases' },
  { name: 'Git', image: Git, type: 'Tools' },
  { name: 'Latex', image: Latex, type: 'Tools' }, 
  { name: 'Microsoft Powerpoint', image: Powerpoint, type: 'Tools' }, 
  { name: 'MySQL', image: MySQL, type: 'Databases' },
  { name: 'Microsoft Excel', image: Excel, type: 'Tools' },
  { name: 'Elm', image: Elm, type: 'Programming' },
  { name: 'C++', image: Cplusplus, type: 'Programming'},
  { name: 'Microsoft Word', image: Word, type: 'Tools'}
  // add more
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Skills = () => {
  const availableTypes = Array.from(new Set(techStack.map((tech) => tech.type)));

  const [isTldrActive, setIsTldrActive] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(true); // Filter ON by default
  const [selectedTypes, setSelectedTypes] = useState(availableTypes); // All types selected
  
  const handleTypeToggle = (type) => {
    setSelectedTypes((prev) => {
      if (prev.includes(type)) {
        // prevent deselecting the last remaining type
        if (prev.length === 1) return prev;
        return prev.filter((t) => t !== type);
      } else {
        return [...prev, type];
      }
    }); 
  };

  const filteredTechStack = selectedTypes.length > 0
    ? techStack.filter((tech) => selectedTypes.includes(tech.type))
    : techStack;

  return (
    <div className="skills-page">

      <div className="welcome-bar">
        Welcome to my Pinterest-inspired portfolio website!
      </div>

      <h2 className="skills-heading">Skills</h2>
      <p className="pins-text">{techStack.length} pins</p>

      <div className="skills-toggle-buttons">
          <button
            className={isFilterActive ? 'active' : ''}
            onClick={() => {
              setIsFilterActive(true);
              setIsTldrActive(false); // disable TLDR
              setSelectedTypes(availableTypes); // reset filters 
            }}
          >
            Filter
          </button>

          <button
            className={isTldrActive ? 'active' : ''}
            onClick={() => {
              setIsTldrActive(true);
              setIsFilterActive(false); // disable Filter
              setSelectedTypes([]); 
            }}
          >
            Text Summary
          </button>
      </div>

      {isFilterActive && (
        <div className="filter-dropdown">
          {availableTypes.map((type) => (
            <button
              key={type}
              onClick={() => handleTypeToggle(type)}
              className={`filter-option ${selectedTypes.includes(type) ? 'selected' : ''}`}
            >
              {type}
            </button>
          ))}
        </div>
      )}

      {isTldrActive ? (
        <div className="skills-summary">
          <p className="skills-text">
          <b>Programming Languages:</b> <br/> 
          Python, Java, C, C++, Elm, ARM Assembly, JavaScript, HTML, CSS <br/> <br/> 
          <b>Frameworks & Libraries:</b> <br/>  
          React.js, Node.js, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, PyTorch, Hugging Face <br/> <br/> 
          <b>Databases:</b> <br/>  
          SQL, MySQL, IBM Db2 <br/> <br/> 
          <b>Tools & Platforms:</b> <br/>   
          Git, GitHub, LaTeX, Microsoft Office (Word, Excel, PowerPoint) <br/> <br/> 
          </p>
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="skills-masonry-grid"
          columnClassName="skills-masonry-column"
        >
          {filteredTechStack.map((tech, index) => (
            <div className="skill-pin" key={index}>
              <img src={tech.image} alt={tech.name} className="skill-image" />
              <div className="skill-overlay">
                <div className="pin-label name-label">{tech.name}</div>
                <div className="pin-label type-label">{tech.type}</div>
              </div>
            </div>
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default Skills;