import React from 'react';
import '../styles/LikedPhotosModal.scss';

const LikedPhotosModal = ({ toggleLikedPhotosModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Hello World</h2>
        <button onClick={toggleLikedPhotosModal}>Close</button>  {/* Close button */}
      </div>
    </div>
  );
};

export default LikedPhotosModal;
