import { useReducer, useEffect } from 'react';
import { ACTIONS } from '../actions/actions';  // Import ACTIONS from the actions.js file

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return { ...state, favourites: [...state.favourites, action.photoId] };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return { ...state, favourites: state.favourites.filter(id => id !== action.photoId) };
  case ACTIONS.SELECT_PHOTO:
    return { ...state, selectedPhoto: action.photo, isModalOpen: true };
  case ACTIONS.CLOSE_MODAL:
    return { ...state, isModalOpen: false };
  case ACTIONS.SET_PHOTO_DATA:
    return { ...state, photoData: action.payload };
  case ACTIONS.SET_TOPIC_DATA:
    return { ...state, topicData: action.payload };
  default:
    throw new Error(`Unsupported action type: ${action.type}`);
  }
};

// Initial state
const initialState = {
  favourites: [],
  isModalOpen: false,
  selectedPhoto: null,
  photoData: [],
  topicData: []
};

// Custom Hook using useReducer
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch photo and topic data from the API using async/await
  useEffect(() => {
    const fetchData = async() => {
      try {
        // Fetch photo data
        const photoResponse = await fetch('/api/photos');
        const photoData = await photoResponse.json();
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });

        // Fetch topic data
        const topicResponse = await fetch('/api/topics');
        const topicData = await topicResponse.json();
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });

      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);  // Empty dependency array to run the effect only once

  const fetchPhotosByTopic = async(topicId) => {
    try {
      console.log(`Fetching photos for topic: ${topicId}`);
      const response = await fetch(`/api/topics/photos/${topicId}`);
      const data = await response.json();
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
    } catch (err) {
      console.error("Error fetching photos by topic:", err);
    }
  };

  return {
    state,
    toggleFavourite: (photoId) => {
      if (state.favourites.includes(photoId)) {
        dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
      } else {
        dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
      }
    },
    openModal: (photo) => dispatch({ type: ACTIONS.SELECT_PHOTO, photo }),
    closeModal: () => dispatch({ type: ACTIONS.CLOSE_MODAL }),
    fetchPhotosByTopic
  };
};

export default useApplicationData;
