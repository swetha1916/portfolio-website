import React from 'react';
import './Boards.css';

const boards = [
  { title: 'About Me'},
  { title: 'Projects'},
  { title: 'Contact'},
  { title: 'Hobbies'},
  { title: 'Education' }
];

const Boards = () => {
  return (
    <div className="boards-container">
        {boards.map((board, index) => (
            <div key={index} className="board-wrapper">
                <div
                    className="board-card"
                    style={{ backgroundColor: "#dfdfd8" }}
                />
                <h4 className="board-title">{board.title}</h4>
            </div>
        ))}
    </div>
  );
};

export default Boards;