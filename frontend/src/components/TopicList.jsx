import React from "react";
import TopicListItem from "./TopicListItem";    // Import individual topic list item component
import "../styles/TopicList.scss";    // Import styles for the topic list

const TopicList = ({ topics, onTopicClick }) => {

  return (
    <ul className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}  // Unique key for each list item
          topic={topic}   // Pass the topic data to the TopicListItem
          onTopicClick={onTopicClick}   // Pass the click handler function to each TopicListItem
        />
      ))}
    </ul>
  );
};

export default TopicList;
