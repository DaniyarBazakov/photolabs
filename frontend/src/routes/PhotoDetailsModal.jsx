import React, { useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss';
// import "../styles/PhotoListItem.scss";
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ photo , closeModal, isFavourite, toggleFavourite, favourites, openModal }) => {


  console.log(photo.similar_photos);
  const photos = Object.values(photo.similar_photos);
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          photoId={photo.id}
          isFavourite={isFavourite}
          toggleFavourite={toggleFavourite}
        />
        <img src={photo.urls.regular} alt="User's photo" className="photo-details-modal__image" />
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
      <div>
        <h3 className="photo-details-modal__header">Similar Photos</h3>
      
        <div className="photo-details-modal__images">
          <PhotoList
            photos={photos}
            favourites={favourites}
            toggleFavourite={toggleFavourite}
            openModal={openModal}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
