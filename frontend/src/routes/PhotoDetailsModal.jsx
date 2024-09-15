import React, { useEffect } from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ photo , closeModal }) => {

  // Log the photo details when the modal is opened
  useEffect(() => {
    console.log('Selected Photo:', photo);
  }, [photo]);
  
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
