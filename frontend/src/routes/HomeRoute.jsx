import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from "../components/PhotoList";

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favourites, toggleFavourite, openModal, fetchPhotosByTopic }) => {

  const hasFavourites = favourites.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        hasFavourites={hasFavourites}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      <PhotoList
        photos={photos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;