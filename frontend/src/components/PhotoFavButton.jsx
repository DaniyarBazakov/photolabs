import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [isLiked, setIsLiked] = useState(false);  // Initialize state to track "liked" status

  // Toggle the "liked" state when the icon is clicked
  const handleClick = () => {
    setIsLiked(prevState => !prevState);
    console.log("Icon clicked! Liked status:", !isLiked);  // Log the new state
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon className={isLiked ? "fav-icon--active" : "fav-icon--inactive"} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
