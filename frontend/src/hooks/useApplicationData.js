import { useState } from 'react';
import photos from "../mocks/photos";
import topics from "../mocks/topics";

const useApplicationData = () => {
  const [favourites, setFavourites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Function to handle toggle favourite
  const toggleFavourite = (photoId) => {
    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter(id => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };

  // Function to open the modal
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    state: {
      photos,
      topics,
      favourites,
      isModalOpen,
      selectedPhoto,
    },
    toggleFavourite,
    openModal,
    closeModal
  };
};

export default useApplicationData;
