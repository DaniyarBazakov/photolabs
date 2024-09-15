import React, { useState } from 'react';
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import "./App.scss";

const App = () => {
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
    setIsModalOpen(true);  // Set the modal as open
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // console.log(photos);
  // console.log(selectedPhoto);
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
      {isModalOpen && <PhotoDetailsModal photo={selectedPhoto} closeModal={closeModal} favourites={favourites}
        toggleFavourite={toggleFavourite} openModal={openModal}/>}
    </div>
  );
};


export default App;