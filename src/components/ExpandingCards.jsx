import React, { useState } from 'react';
import '../styles/style.css';

import img1 from "../assets/images/img1.jpeg";
import img2 from "../assets/images/img2.jpeg";
import img3 from "../assets/images/img3.jpeg";
import img4 from "../assets/images/img4.jpeg";
import img5 from "../assets/images/img5.jpeg";

const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const panels = [
    { title: 'Div 1', image: img1 },
    { title: 'Div 2', image: img2 },
    { title: 'Div 3', image: img3 },
    { title: 'Div 4', image: img4 },
    { title: 'Div 5', image: img5 },
  ];

  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      {panels.map((panel, index) => (
        <div
          key={index}
          className={`panel ${activeIndex === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${panel.image})` }}
          onClick={() => setActiveIndex(index)}
          onMouseOver={() => handleMouseOver(index)}
        >
          <h3>{panel.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ExpandingCards;