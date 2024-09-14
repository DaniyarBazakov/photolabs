// frontend/src/App.jsx
import React from "react";

// import PhotoListItem from './components/PhotoListItem';
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";  // Import mock photos data
import topics from "./mocks/topics";
import "./App.scss";

const App = () => (
  <div className="App">
    {/* <TopicList />
     <PhotoList/> */}
    {/* <TopNavigationBar /> */}
    <HomeRoute photos={photos} topics={topics}/>
  </div>
);

export default App;
