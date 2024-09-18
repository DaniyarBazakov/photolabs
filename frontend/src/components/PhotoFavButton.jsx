import React from 'react';
import FavIcon from './FavIcon';    // Import the favourite icon component
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ photoId, isFavourite, toggleFavourite }) => {
  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => {
        toggleFavourite(photoId);   // Toggle the favourite status for the photo
      }}
    >
      <div className="photo-list__fav-icon-svg">
        {/* Render the favourite icon, passing the selected state based on isFavourite */}
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
};

export default PhotoFavButton;