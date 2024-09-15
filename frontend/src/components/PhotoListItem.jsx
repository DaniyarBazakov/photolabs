import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, isFavourite, toggleFavourite, openModal }) => {

  const handleClick = () => {
    openModal(photo);  // Pass the clicked photo to openModal
  };

  return (
    <li className="photo-list__item">
      <PhotoFavButton
        photoId={photo.id}
        isFavourite={isFavourite}
        toggleFavourite={toggleFavourite}
      />
      <div onClick={handleClick}>
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
    </li>
  );
};

export default PhotoListItem;