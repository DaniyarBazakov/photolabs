import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ topics, hasFavourites, fetchPhotosByTopic }) => {

  const handleTopicClick = (topicId) => {
    fetchPhotosByTopic(topicId);  // Call the function when a topic is clicked
  };

  console.log('handleTopicClick in TopNavigationBar:', handleTopicClick);

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={handleTopicClick}/>
      <FavBadge hasFavourites={hasFavourites}/>
    </div>
  );
};

export default TopNavigation;