import React, { useState } from 'react';
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";  // Import mock photos data
import topics from "./mocks/topics";
import "./App.scss";

const App = () => {
  const [favourites, setFavourites] = useState([]);

  // Function to handle toggle favourite
  const toggleFavourite = (photoId) => {
    if (favourites.includes(photoId)) {
      setFavourites(favourites.filter(id => id !== photoId));
    } else {
      setFavourites([...favourites, photoId]);
    }
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
};

export default App;