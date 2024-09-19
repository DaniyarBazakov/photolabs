import React from 'react';
import FavBadge from './FavBadge';    // Import component to display favourite badge
import TopicList from './TopicList';  // Import component to display list of topics
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ topics, hasFavourites, fetchPhotosByTopic, toggleLikedPhotosModal }) => {

  // Handle topic selection by calling the fetchPhotosByTopic function with the selected topic's ID
  const handleTopicClick = (topicId) => {
    // Fetch photos associated with the selected topic
    fetchPhotosByTopic(topicId);
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList
        topics={topics}  // Pass the list of topics to the TopicList component
        onTopicClick={handleTopicClick}  // Pass the handler for topic click events
      />
      <FavBadge hasFavourites={hasFavourites} onClick={toggleLikedPhotosModal}/> {/* Display badge if there are favourites */}
    </div>
  );
};

export default TopNavigation;