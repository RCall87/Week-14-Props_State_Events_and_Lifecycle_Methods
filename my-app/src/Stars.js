import React, { useState } from 'react';

const Stars = ({ rating }) => {
  const [hoverRating, setHoverRating] = useState(null);
  const [selectedRating, setSelectedRating] = useState(rating);

  const handleMouseOver = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(null);
  };

  const handleClick = (index) => {
    setSelectedRating(index);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map(index => (
        <span
          key={index}
          style={{ cursor: 'pointer', color: (hoverRating || selectedRating) >= index ? 'gold' : 'gray' }}
          onMouseOver={() => handleMouseOver(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Stars;
