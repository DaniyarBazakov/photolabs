import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from "../components/PhotoList";

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, favourites, toggleFavourite }) => {

  const hasFavourites = favourites.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        hasFavourites={hasFavourites}
      />
      <PhotoList
        photos={photos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default HomeRoute;