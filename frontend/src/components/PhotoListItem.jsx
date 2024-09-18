import React from "react";
import PhotoFavButton from "./PhotoFavButton";    // Import the favourite button component
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, isFavourite, toggleFavourite, openModal }) => {

  const handleClick = () => {
    openModal(photo);  // Pass the clicked photo to openModal
  };

  return (
    <li className="photo-list__item">
      {/* Render the favourite button for the photo */}
      <PhotoFavButton
        photoId={photo.id}    // Pass the photo ID
        isFavourite={isFavourite}   // Pass the favourite status
        toggleFavourite={toggleFavourite}   // Pass the function to toggle the favourite status
      />
      {/* Click handler for opening the photo in a modal */}
      <div onClick={handleClick}>
        {/* Display the photo */}
        <img src={photo.urls.regular} alt="User's photo" className="photo-list__image" />
        {/* Display the user details */}
        <div className="photo-list__user-details">
          {/* User profile picture */}
          <img src={photo.user.profile} alt="User's profile picture" className="photo-list__user-profile" />
          {/* User name and location */}
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