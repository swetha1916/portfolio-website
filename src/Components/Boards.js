import React, {useState} from 'react';
import './Boards.css';
import Violin from '../Assets/Violin.jpg';
import Painting from '../Assets/Painting.jpg';
import Travel from '../Assets/Travel.jpg';
import Coding from '../Assets/Coding.jpg';
import Code from '../Assets/Code.jpg';
import Mac from '../Assets/Mac.jpg';
import Python from '../Assets/Python.jpg';
import SQL from '../Assets/SQL.jpg';
import Html from '../Assets/Html.jpg';
import Sisa from '../Assets/SISA.png';
import StartCoding from '../Assets/StartCoding.jpg';
import CSS from '../Assets/CSS.jpg';
import PD from '../Assets/PDgame.png';
import Type from '../Assets/Type.png';
import Gmail from '../Assets/Gmail.jpg';
import Linkedin from '../Assets/Linkedin.jpg';
import GitHub from '../Assets/GitHub.jpg';


const boards = [
  { title: 'About Me <3', pins: '39829', type: 'public', images: [ Mac, Coding, Code ] },
  { title: 'Skills', pins: '55', type: 'public', images: [ SQL, Python, Html ] },
  { title: 'Hobbies', pins: '1092', type: 'public', images: [ Violin, Painting, Travel ] },
  { title: 'Clubs and Roles', pins: '5', type: 'public', images: [ Sisa, CSS, StartCoding ] },
  { title: 'Projects', pins: '20', type: 'public', 
    images: [ 'https://unsplash.it/400/400?image=1025', PD, Type ]
  },
  { title: 'My contact', pins: '10', type: 'private', 
    images: [ Gmail, Linkedin, GitHub ]
  }
];

const Boards = () => {
  const [viewType, setViewType] = useState('public');

  const filteredBoards = boards.filter(board => board.type === viewType);

  const renderBoards = (boardList) =>
    boardList.map((board, index) => (
      <div key={index} className="board-wrapper">
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