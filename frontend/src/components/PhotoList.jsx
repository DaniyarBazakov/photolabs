import React from 'react';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({ photos, favourites, toggleFavourite }) => {

  return (
    <div className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavourite={favourites.includes(photo.id)}
          toggleFavourite={toggleFavourite}
        />
      ))}
    </div>
  );
};

export default PhotoList;