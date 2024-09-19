import { useReducer, useEffect } from 'react';
import { ACTIONS } from '../actions/actions';  // Import ACTIONS from the actions.js file

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    // Add the selected photo ID to favourites
    return { ...state, favourites: [...state.favourites, action.photoId] };
  case ACTIONS.FAV_PHOTO_REMOVED:
    // Remove the selected photo ID from favourites
    return { ...state, favourites: state.favourites.filter(id => id !== action.photoId) };
  case ACTIONS.SELECT_PHOTO:
    // Set the selected photo and open the modal
    return { ...state, selectedPhoto: action.photo, isModalOpen: true };
  case ACTIONS.CLOSE_MODAL:
    // Close the modal
    return { ...state, isModalOpen: false };
  case ACTIONS.SET_PHOTO_DATA:
    // Set the fetched photo data into state
    return { ...state, photoData: action.payload };
  case ACTIONS.SET_TOPIC_DATA:
    // Set the fetched topic data into state
    return { ...state, topicData: action.payload };
  case ACTIONS.TOGGLE_LIKED_PHOTOS_MODAL:
    return { ...state, isLikedPhotosModalOpen: !state.isLikedPhotosModalOpen };  // Toggle modal state
  default:
    // Throw an error if an unsupported action type is dispatched
    throw new Error(`Unsupported action type: ${action.type}`);
  }
};

// Initial state values for the application
const initialState = {
  favourites: [],         // List of favourite photos
  isModalOpen: false,     // Whether the photo details modal is open
  selectedPhoto: null,    // The currently selected photo for modal view
  photoData: [],          // Array of photos fetched from the API
  topicData: [],           // Array of topics fetched from the API
  isLikedPhotosModalOpen: false,
};
// Custom hook using useReducer to manage application state and actions
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch photo and topic data from the API using async/await
  useEffect(() => {
    const fetchData = async() => {
      try {
        // Use Promise.all to fetch photo and topic data concurrently
        const [photoResponse, topicResponse] = await Promise.all([
          fetch('/api/photos'),
          fetch('/api/topics')
        ]);
  
        const photoData = await photoResponse.json();
        const topicData = await topicResponse.json();
  
        // Dispatch actions to update state with the fetched data
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
  
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    
    // Trigger the data fetch on component mount
    fetchData();
  }, []);

  // Fetch photos for a specific topic by topicId
  const fetchPhotosByTopic = async(topicId) => {
    try {
      console.log(`Fetching photos for topic: ${topicId}`);
      const response = await fetch(`/api/topics/photos/${topicId}`);
      const data = await response.json();
      // Dispatch action to update the photo data for the selected topic
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
    } catch (err) {
      console.error("Error fetching photos by topic:", err);
    }
  };

  const toggleLikedPhotosModal = () => {
    dispatch({ type: ACTIONS.TOGGLE_LIKED_PHOTOS_MODAL });
  };

  return {
    state,      // Return the current state
    toggleFavourite: (photoId) => {
      // Add/remove photo from favourites based on its current state
      if (state.favourites.includes(photoId)) {
        dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
      } else {
        dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
      }
    },
    openModal: (photo) => dispatch({ type: ACTIONS.SELECT_PHOTO, photo }),       // Open the modal with the selected photo
    closeModal: () => dispatch({ type: ACTIONS.CLOSE_MODAL }),      // Close the modal
    fetchPhotosByTopic,      // Return the function to fetch photos by topic
    toggleLikedPhotosModal,
  };
};

export default useApplicationData;
