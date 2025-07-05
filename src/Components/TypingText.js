import React, { useState, useEffect } from 'react';

const TypingText = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;

    const type = () => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index < text.length) {
        setTimeout(type, speed);
      }
    };

    type();
  }, [text, speed]);

  return <h1>{displayedText}</h1>;
};

export default TypingText;





