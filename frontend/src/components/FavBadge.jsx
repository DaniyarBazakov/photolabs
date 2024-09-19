import React from 'react';
import FavIcon from './FavIcon';    // Import the FavIcon component
import '../styles/FavBadge.scss';

const FavBadge = ({ hasFavourites, onClick }) => {
  return (
    <div className='fav-badge' onClick={onClick}>  {/* Handle the click event to open the modal */}
      {/* Render the FavIcon component, passing in displayAlert based on hasFavourites */}
      <FavIcon displayAlert={hasFavourites} />
    </div>
  );
};

export default FavBadge;
