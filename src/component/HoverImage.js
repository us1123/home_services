import React from 'react';

const HoverImage = ({ imagePath }) => {
  return (
<div className="relative overflow-hidden group py-1 rounded-lg shadow-md">
     
      <img
        src={imagePath}
        className="max-w-full max-h-full transition-transform duration-300 transform-gpu group-hover:scale-105 rounded-lg"
        alt=""
      />
    </div>
  );
};

export default HoverImage;
