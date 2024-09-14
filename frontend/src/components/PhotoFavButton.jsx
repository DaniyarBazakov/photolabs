import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ photoId, isFavourite, toggleFavourite }) => {
  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => {
        toggleFavourite(photoId);
      }}
    >
      <div className="photo-list__fav-icon-svg">
        {/* Use the isFavourite prop to determine the selected state */}
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
};

export default PhotoFavButton;