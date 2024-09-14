import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [isLiked, setIsLiked] = useState(false);  // Initialize state to track "liked" status

  // Toggle the "liked" state when the icon is clicked
  const handleClick = () => {
    setIsLiked(prevState => !prevState);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
