import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onTopicClick }) => {
  return (
    <div className="topic-list__item">
      {/* Trigger the onTopicClick handler when the topic title is clicked */}
      <span onClick={() => onTopicClick(topic.id)}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
