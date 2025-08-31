import React, { useState } from 'react';
import './Leadership.css';
import Masonry from 'react-masonry-css';

import Saal from '../Assets/Experience board/Saal.jpg';
import Prep from '../Assets/Experience board/Prep101.png';
import MAHE from '../Assets/Experience board/MAHE.jpg';

const experienceStack = [
    { name: 'Prep101', image: Prep, year: "Sept 2025 - Present" },
    { name: 'Saal', image: Saal, year: "June - August 2025" },
    { name: 'MAHE', image: MAHE, year: "May - August 2025" }
  // add more
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Experience = () => {

  const [isTldrActive, setIsTldrActive] = useState(false);
  const [isPinsActive, setIsPinsActive] = useState(true); // Filter ON by default

  return (
    <div className="experience-page">

      <div className="welcome-bar">
        Welcome to my Pinterest-inspired portfolio website!
      </div>

      <h2 className="experience-heading">Experience</h2>
      <p className="pins-text">{experienceStack.length} pins</p>

      <div className="experience-toggle-buttons">
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
        <div className="experience-summary">
          <p className="experience-text">
            <b>On-Campus Marketer - Prep101 </b> <br/> 
            <i>September 2025 - Present</i> <br/>
            • Part time job. <br/>
            • Spread awareness about the service and the midterm and final help they provide to students at McMaster University. <br/>
            <br/> <br/> 
            
            <b>AI & Data Science Intern - Saal.ai</b> <br/> 
            <i>June - August 2025</i> <br/>
            • Applied SDLC and agile practices through active participation in daily standups and team sprints.<br/>
            • Developed and tested multi-agent LLM workflows using agentic AI frameworks such as AutoGen.<br/>
            • Ran and fine-tuned LLMs like Llama locally with LM Studio to enable rapid prototyping and experimentation. <br/>
            • Programmed a GitHub Repository Summarizer to help employees’ time and productivity using the Llama LLM locally through Ollama.  <br/>
            <br/> <br/> 

            <b>ML Research Assistant - Manipal Academy of Higher Education</b> <br/> 
            <i>May - August 2022</i> <br/>
            • Applied image classification techniques using Pytorch, and Python ML libraries like Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn. <br/>
            • Designed and trained custom CNN architectures and achieved 82% accuracy, and conducted experiments with transfer learning to evaluate performance trade-offs on large image datasets such as MNIST. <br/>
            • Led a team of 4 in drafting a research paper, enhancing leadership and communication skills. <br/>
            <br/> <br/> 
          </p>
        </div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="experience-masonry-grid"
          columnClassName="experience-masonry-column"
        >
          {experienceStack.map((exp, index) => (
            <div className="exp-pin" key={index}>
              <img src={exp.image} alt={exp.name} className="exp-image" />
              <div className="exp-overlay">
                <div className="pin-label name-label">{exp.name}</div>
                <div className="pin-label type-label">{exp.year}</div>
              </div>
            </div>
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default Experience;