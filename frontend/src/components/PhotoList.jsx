import React from 'react';
import PhotoListItem from './PhotoListItem';  // Import individual photo list item component
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites, toggleFavourite, openModal }) => {

  return (
    <ul className="photo-list">
      {/* Map over the array of photos and render a PhotoListItem for each */}
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}  // Unique key for each photo
          photo={photo}   // Pass the individual photo data to PhotoListItem
          isFavourite={favourites.includes(photo.id)} // Check if the photo is marked as favourite
          toggleFavourite={toggleFavourite} // Pass the toggleFavourite function
          openModal={openModal} // Pass the function to open the modal with the selected photo
        />
      ))}
    </ul>
  );
};

export default PhotoList;