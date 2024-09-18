import React, { useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';   // Import the PhotoList component to display similar photos
import PhotoFavButton from '../components/PhotoFavButton';  // Import the PhotoFavButton component

const PhotoDetailsModal = ({ photo , closeModal, toggleFavourite, favourites, openModal }) => {

  // Convert the similar_photos object to an array for easier mapping
  const photos = Object.values(photo.similar_photos);

  return (
    <div className="photo-details-modal">
      {/* Button to close the modal */}
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* Section displaying the main photo and photographer details */}
      <div className="photo-details-modal__images">
        {/* Render the favourite button */}
        <PhotoFavButton
          photoId={photo.id}    // Pass the photo ID to the favourite button
          isFavourite={favourites.includes(photo.id)}   // Determine if the photo is marked as favourite
          toggleFavourite={toggleFavourite}   // Function to add/remove the photo from favourites
        />
        {/* Main photo in the modal */}
        <img src={photo.urls.full} alt="User's photo" className="photo-details-modal__image" />
        {/* Photographer details (profile picture, name, and location) */}
        <div className="photo-details-modal__photographer-details">
          <img src={photo.user.profile} alt="User's profile picture" className="photo-details-modal__photographer-profile" />
          <div className="photo-details-modal__photographer-info">
            <span className="photo-details-modal__photographer-details">{photo.user.name}</span>
            <span className="photo-details-modal__photographer-location">
              {`${photo.location.city}, ${photo.location.country}`}
            </span>
          </div>
        </div>
      </div>

      {/* Section for displaying similar photos */}
      <div>
        {/* Header for similar photos section */}
        <h3 className="photo-details-modal__header">Similar Photos</h3>
        {/* List of similar photos */}
        <ul className="photo-details-modal__images">
          <PhotoList
            photos={photos}   // Pass the array of similar photos
            favourites={favourites}   // Pass the list of favourite photo IDs
            toggleFavourite={toggleFavourite}   // Function to toggle favourites
            openModal={openModal}   // Function to open the modal for a selected similar photo
          />
        </ul>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
