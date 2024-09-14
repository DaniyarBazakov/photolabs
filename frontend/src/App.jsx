// frontend/src/App.jsx
import React from 'react';

 // import PhotoListItem from './components/PhotoListItem';
 import PhotoList from './components/PhotoList';
 import TopicList from './components/TopicList';
 import TopNavigationBar from './components/TopNavigationBar';
 import './App.scss';

 const App = () => (
   <div className="App">
     {/* <TopicList />
     <PhotoList/> */}
     <TopNavigationBar />
   </div>
 )

export default App;
