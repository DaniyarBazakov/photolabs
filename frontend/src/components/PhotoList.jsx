import React from 'react';
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, toggleFavourite, openModal }) => {

  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          photo={photo}
          isFavourite={favourites.includes(photo.id)}
          toggleFavourite={toggleFavourite}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;