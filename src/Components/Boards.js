import React from 'react';
import './Boards.css';

const boards = [
  { title: 'About Me'},
  { title: 'Projects'},
  { title: 'Contact'},
  { title: 'Hobbies'},
];

const Boards = () => {
  return (
    <div className="boards-container">
      {boards.map((board, index) => (
        <div
          key={index}
          className="board-card"
          style={{ backgroundColor: "#dcdcdc"}}
        >
          <h2>{board.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Boards;