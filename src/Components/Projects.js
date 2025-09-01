import React, { useState } from 'react';
import './Projects.css';
import Masonry from 'react-masonry-css';

/*
import Summary from '../Assets/Projects board/Summary.jpg';
*/
import Portfolio from '../Assets/Projects board/Portfolio.jpeg';
import Game from '../Assets/Projects board/Game.png';

const projectsStack = [
    { name: 'GitHub Repo Summarizer', image: Game, demo: "Link" },
    { name: 'Personal Portfolio', image: Portfolio, demo: "Link" },
    { name: 'Multiplayer Game', image: Game, demo: "Link" }
  // add more
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Projects = () => {

  const [isTldrActive, setIsTldrActive] = useState(false);
  const [isPinsActive, setIsPinsActive] = useState(true); // Filter ON by default

  return (
    <div className="projects-page">

      <div className="welcome-bar">
        Welcome to my Pinterest-inspired portfolio website!
      </div>

      <h2 className="projects-heading">Projects</h2>
      <p className="pins-text">{projectsStack.length} pins</p>

      <div className="projects-toggle-buttons">
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
        <div className="projects-summary">
          <p className="projects-text">
            <b>Pinterest-themed Personal Portfolio Website </b> <br/> 
            <i>Link: https://swetha1916.github.io/portfolio-website/#/</i> <br/>
            • Designed and built a responsive, Pinterest-style personal portfolio using React, CSS, and JavaScript.<br/>
            • Showcases sections about me, skills, experience, projects, leadership experience, hobbies, achievements with a clean UI/UX and interactive design.<br/>
            <br/> <br/> 

            <b>GitHub Repo Summarizer</b> <br/> 
            <i>Link</i> <br/>
            • Developed a full-stack tool to generate summaries of GitHub repositories using a local LLaMA 3B LLM via Ollama. <br/>
            • Retrieved repository contents with the GitHub API, determined file MIME types with python-magic, and streamed file contents for incremental summarization. <br/>
            • Built a React-based UI for interactive user input and integrated with a FastAPI backend to serve Python summarization logic as an API.<br/>
            <br/> <br/> 
            
            <b>Multiplayer game for detecting Parkinson’s Disease symptoms</b> <br/> 
            <i>Link: https://stabl.rocks/ShowModulePublish?modulePublishId=51db9092-93e6-4267-b1fb-c4a70b776ea8</i> <br/>
            • Developed mini-games (Wordle, Whack-a-Mole, Typing Test, Memory Game, and Painting) with diverse game locations and award systems.<br/>
            • Detects 10+ Parkinson’s symptoms like bradykinesia and cognitive impairment. <br/>
            • Designed prototypes, conducted multi-stage user interviews, and ensured Norman’s design principles were followed for enhanced UI/UX.<br/>
            <br/> <br/> 
          </p>
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="projects-masonry-grid"
          columnClassName="projects-masonry-column"
        >
          {projectsStack.map((project, index) => (
            <div className="project-pin" key={index}>
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="project-overlay">
                <div className="pin-label name-label">{project.name}</div>
                <div className="pin-label type-label">{project.demo}</div>
              </div>
            </div>
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default Projects;