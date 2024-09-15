import React, { useState } from 'react';
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import "./App.scss";

const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle toggle favourite
  const toggleFavourite = (photoId) => {
    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter(id => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);  // Set the modal as open
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
      {isModalOpen && <PhotoDetailsModal />}
    </div>
  );
};

export default App;