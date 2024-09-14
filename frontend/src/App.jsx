// frontend/src/App.jsx
import React from "react";

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from "./components/PhotoList";
import TopicList from "./components/TopicList";
import TopNavigationBar from "./components/TopNavigationBar";
import HomeRoute from "./components/HomeRoute";
import "./App.scss";

const App = () => (
  <div className="App">
    {/* <TopicList />
     <PhotoList/> */}
    {/* <TopNavigationBar /> */}
    <HomeRoute/>
  </div>
);

export default App;
