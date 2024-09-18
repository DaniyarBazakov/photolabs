import React from 'react';
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from './hooks/useApplicationData';  // Import custom hook for state management
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
        photos={photoData}      // List of photos fetched from API
        topics={topicData}      // List of topics fetched from API
        favourites={favourites}     // List of favourite photos
        toggleFavourite={toggleFavourite}     // Function to add/remove a photo from favourites
        openModal={openModal}     // Function to open photo details modal
        fetchPhotosByTopic={fetchPhotosByTopic}     // Function to fetch photos by selected topic
      />
      {isModalOpen && (
        <PhotoDetailsModal
          photo={selectedPhoto}     // Photo selected to view in the modal
          closeModal={closeModal}     // Function to close the modal
          favourites={favourites}     // List of favourite photos to manage within the modal
          toggleFavourite={toggleFavourite}     // Function to add/remove a photo from favourites
        />
      )}
    </div>
  );
};

export default App;
