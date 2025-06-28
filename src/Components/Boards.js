import React from 'react';
import './Boards.css';
import Violin from '../Assets/Violin.jpg';
import Painting from '../Assets/Painting.jpg';
import Travel from '../Assets/Travel.jpg';
import Coding from '../Assets/Coding.jpg'
import Code from '../Assets/Code.jpg'
import Mac from '../Assets/Mac.jpg'
import Python from '../Assets/Python.jpg'
import SQL from '../Assets/SQL.jpg'
import Html from '../Assets/Html.jpg'

const boards = [
  { title: 'About Me',
    pins: '39829',
    images: [ Mac, Coding, Code ]
  },
  { title: 'Skills',
    pins: '55',
    images: [ SQL, Python, Html ]
  },
  { title: 'Hobbies',
    pins: '1092',
    images: [ Violin, Painting, Travel ]
  },
  { title: 'Clubs and Roles',
    pins: '5',
    images: [ 'https://unsplash.it/400/400?image=1025',
              'https://unsplash.it/200/200?image=1005',
              'https://unsplash.it/200/200?image=1031'
            ]
  },
  { title: 'Projects',
    pins: '20',
    images: [ 'https://unsplash.it/400/400?image=1025',
              'https://unsplash.it/200/200?image=1005',
              'https://unsplash.it/200/200?image=1031'
            ]
  },
  { title: 'My Contact',
    pins: '20',
    images: [ 'https://unsplash.it/400/400?image=1025',
              'https://unsplash.it/200/200?image=1005',
              'https://unsplash.it/200/200?image=1031'
            ]
  }
];

const Boards = () => {
  return (
    <div className="boards-container">
      {boards.map((board, index) => (
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
      ))}
    </div>
  );
};

export default Boards;