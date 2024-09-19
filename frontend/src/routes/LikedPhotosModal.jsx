import React from 'react';
import PhotoList from '../components/PhotoList';  // Import the PhotoList component
import '../styles/LikedPhotosModal.scss';  // Import the CSS for the modal
import closeSymbol from '../assets/closeSymbol.svg';

const LikedPhotosModal = ({ favourites, photoData, toggleLikedPhotosModal, toggleFavourite, openModal }) => {
  // Filter photoData to get only the photos that are in the favourites array
  const favouritePhotos = photoData.filter(photo => favourites.includes(photo.id));
  console.log('Favourite Photos:', favouritePhotos);

  return (
    <div className="modal">
      
      {/* Close button */}
      <button className="photo-details-modal__close-button" onClick={toggleLikedPhotosModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <h2 className="photo-details-modal__header">Liked Photos</h2>

      {/* Use the PhotoList component to display the list of favourite photos */}
      <div className="photo-details-modal__images">
        <PhotoList
          photos={favouritePhotos}  // Pass the filtered list of favourite photos
          favourites={favourites}   // Pass the list of favourites (photo IDs)
          toggleFavourite={toggleFavourite}  // Pass the toggleFavourite function
          openModal={openModal}  // Pass the function to open the modal for individual photos
        />
      </div>
     
    </div>
  );
};

export default LikedPhotosModal;


