import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list-item">
      <img src={props.photo.imageSource} alt="Sample"/>
      <img src={props.photo.profile} alt="Profile"/>
      <h4>{props.photo.username}</h4>
      <p>{`${props.photo.location.city}, ${props.photo.location.country}`}</p>
    </div>
  );
};

export default PhotoListItem;
