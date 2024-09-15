import React from 'react';
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from './hooks/useApplicationData';
import "./App.scss";

const App = () => {
  const {
    state: { photos, topics, favourites, isModalOpen, selectedPhoto },
    toggleFavourite,
    openModal,
    closeModal
  } = useApplicationData();  // Destructure the hook

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          closeModal={closeModal}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
