import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Boards.css';
import Violin from '../Assets/Home page/Violin.jpg';
import Painting from '../Assets/Home page/Painting.jpg';
import Travel from '../Assets/Home page/Travel.jpg';
import Coding from '../Assets/Home page/Coding.jpg';
import Code from '../Assets/Home page/Code.jpg';
import Mac from '../Assets/Home page/Mac.jpg';
import Python from '../Assets/Home page/Python.jpg';
import SQL from '../Assets/Home page/SQL.jpg';
import Html from '../Assets/Home page/Html.jpg';
import Sisa from '../Assets/Home page/SISA.png';
import StartCoding from '../Assets/Home page/StartCoding.jpg';
import CSS from '../Assets/Home page/CSS.jpg';
import PD from '../Assets/Home page/PDgame.png';
import Type from '../Assets/Home page/Type.png';
import Gmail from '../Assets/Home page/Gmail.jpg';
import Linkedin from '../Assets/Home page/Linkedin.jpg';
import GitHub from '../Assets/Home page/GitHub.jpg';


const boards = [
  { title: 'About Me <3', path: 'about-me', pins: '39829', type: 'public', images: [ Mac, Coding, Code ] },
  { title: 'Experience', path: 'experience', pins: '39829', type: 'public', images: [ Mac, Coding, Code ] }, 
  { title: 'Skills', path: 'skills', pins: '55', type: 'public', images: [ SQL, Python, Html ] },
  { title: 'Leadership experience', path: 'leadership-experience', pins: '5', type: 'public', images: [ Sisa, CSS, StartCoding ] },
  { title: 'Projects', path: 'projects', pins: '20', type: 'public', images: [ 'https://unsplash.it/400/400?image=1025', PD, Type ] },
  { title: 'Hobbies', path: 'hobbies', pins: '1092', type: 'public', images: [ Violin, Painting, Travel ] },
  { title: 'My contact', path: 'my-contact', pins: '10', type: 'private', images: [ Gmail, Linkedin, GitHub ] }
  ];


const Boards = () => {
  const [viewType, setViewType] = useState('public');
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(`/${path}`);
  };

  const filteredBoards = boards.filter(board => board.type === viewType);

  const renderBoards = (boardList) =>
    boardList.map((board, index) => (
      <div key={index} className="board-wrapper" 
      onClick={() => handleClick(board.path)}>

        <div className="board-card">
          <div className="board-preview-layout">
            <div className="left-preview">
              <img src={board.images[0]} alt="preview 1" />
            </div>
            <div className="right-preview">
              <img src={board.images[1]} alt="preview 2" />
              <img src={board.images[2]} alt="preview 3" />
            </div>
          </div>
        </div>
        <h4 className="board-title">{board.title}</h4>
        <p className="pin-text">{board.pins} pins</p>
      </div>
    ));

  return (
    <div className="boards-group">
      <div className="board-toggle-buttons">
        <button
          className={viewType === 'public' ? 'active' : ''}
          onClick={() => setViewType('public')}
        >
          Your Boards
        </button>
        <button
          className={viewType === 'private' ? 'active' : ''}
          onClick={() => setViewType('private')}
        >
          Secret Boards
        </button>
      </div>

      <div className="boards-container">
        {renderBoards(filteredBoards)}
      </div>
    </div>
  );
};

export default Boards;