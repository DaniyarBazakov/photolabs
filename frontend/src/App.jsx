import React from 'react';
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from './hooks/useApplicationData';
import "./App.scss";

const App = () => {
  const {
    state: { photoData, topicData, favourites, isModalOpen, selectedPhoto },
    toggleFavourite,
    openModal,
    closeModal,
    fetchPhotosByTopic
  } = useApplicationData();  // Destructure the hook

  return (
    <div className="App">
      <HomeRoute
        photos={photoData}  // Use photoData instead of photos
        topics={topicData}  // Use topicData instead of topics
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
        fetchPhotosByTopic={fetchPhotosByTopic}
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
