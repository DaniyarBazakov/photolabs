import React, { useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss';
import "../styles/PhotoListItem.scss";
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
      <div className="photo-details-modal__image">
        <div className="photo-list__item">
          <PhotoFavButton
            photoId={photo.id}
            isFavourite={isFavourite}
            toggleFavourite={toggleFavourite}
          />
          <div >
            <img src={photo.urls.regular} alt="User's photo" className="photo-list__image" />
            <div className="photo-list__user-details">
              <img src={photo.user.profile} alt="User's profile picture" className="photo-list__user-profile" />
              <div className="photo-list__user-info">
                <span className="photo-list__user-details">{photo.user.name}</span>
                <span className="photo-list__user-location">
                  {`${photo.location.city}, ${photo.location.country}`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="photo-details-modal__header">
        Similar Photos
      </div>
      <div className="photo-details-modal__images">
        <PhotoList
          photos={photos}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          openModal={openModal}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
