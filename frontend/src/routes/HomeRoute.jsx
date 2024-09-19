import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';  // Import the top navigation bar component
import PhotoList from "../components/PhotoList";  // Import the photo list component

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favourites, toggleFavourite, openModal, fetchPhotosByTopic }) => {

  // Check if there are any favourite photos
  const hasFavourites = favourites.length > 0;

  return (
    <div className="home-route">
      {/* Render the top navigation bar, passing in topics, favourites status, and the function to fetch photos by topic */}
      <TopNavigationBar
        topics={topics}   // Array of topics to display in the navigation
        hasFavourites={hasFavourites}   // Boolean indicating if there are any favourites
        fetchPhotosByTopic={fetchPhotosByTopic}  // Function to fetch photos for the selected topic
        favourites={favourites}
      />
      {/* Render the photo list, passing photos, favourites, and functions to manage them */}
      <PhotoList
        photos={photos}  // Array of photos to display in the list
        favourites={favourites}   // Array of favourite photo IDs
        toggleFavourite={toggleFavourite}   // Function to add/remove photos from favourites
        openModal={openModal}   // Function to open the modal for a selected photo
      />
    </div>
  );
};

export default HomeRoute;