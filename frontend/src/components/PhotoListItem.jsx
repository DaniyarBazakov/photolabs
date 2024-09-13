import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div className="photo-list-item">
      <img src={props.imageSource} alt="Sample"/>
      <img src={props.profile} alt="Profile"/>
      <h4>{props.username}</h4>
      <p>{`${props.location.city}, ${props.location.country}`}</p>
    </div>
  );
};

export default PhotoListItem;
