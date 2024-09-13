import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  return (
    <div className="photo-list__item">
      <img src={props.photo.imageSource} alt="User's photo" className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={props.photo.profile} alt="User's profile picture" className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span>{props.photo.username}</span>
          <span className="photo-list__user-location">
            {`${props.photo.location.city}, ${props.photo.location.country}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
