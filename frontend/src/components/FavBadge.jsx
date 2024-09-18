import React from 'react';
import FavIcon from './FavIcon';    // Import the FavIcon component
import '../styles/FavBadge.scss';

const FavBadge = ({ hasFavourites }) => {
  return (
    <div className='fav-badge'>
      {/* Render the FavIcon component, passing in displayAlert based on hasFavourites */}
      <FavIcon displayAlert={ hasFavourites }/>
    </div>
  );
};

export default FavBadge;