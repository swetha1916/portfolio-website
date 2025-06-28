import React from 'react';
import './Boards.css';

const boards = [
  { title: 'About Me',
    images: [ 'https://unsplash.it/400/400?image=1025',
              'https://unsplash.it/200/200?image=1005',
              'https://unsplash.it/200/200?image=1031'
            ]
  },
  { title: 'Projects',
    images: [ 'https://unsplash.it/400/400?image=1025',
              'https://unsplash.it/200/200?image=1005',
              'https://unsplash.it/200/200?image=1031'
            ]
  },
  { title: 'Contact',
    images: [ 'https://unsplash.it/400/400?image=1025',
              'https://unsplash.it/200/200?image=1005',
              'https://unsplash.it/200/200?image=1031'
            ]
  },
  { title: 'Hobbies',
    images: [ 'https://unsplash.it/400/400?image=1025',
              'https://unsplash.it/200/200?image=1005',
              'https://unsplash.it/200/200?image=1031'
            ]
  },
  { title: 'Contact',
    images: [ 'https://unsplash.it/400/400?image=1025',
              'https://unsplash.it/200/200?image=1005',
              'https://unsplash.it/200/200?image=1031'
            ]
  },
  { title: 'Hobbies',
    images: [ 'https://unsplash.it/400/400?image=1025',
              'https://unsplash.it/200/200?image=1005',
              'https://unsplash.it/200/200?image=1031'
            ]
  }
  /* ,
  { title: 'Education' }
   */
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
        </div>
      ))}
    </div>
  );
};

export default Boards;