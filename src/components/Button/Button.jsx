import React from 'react';

const Button = ({ onClick, imagesLoaded }) => {
  return (
    imagesLoaded && (
      <button className="Button" onClick={onClick}>Load more</button>
    )
  );
};

export default Button;