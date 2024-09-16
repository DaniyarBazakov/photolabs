import { useReducer, useEffect } from 'react';
// import photos from "../mocks/photos";
// import topics from "../mocks/topics";

// Define the action types
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA'
};

// Reducer function to handle state changes based on dispatched actions
const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return {
      ...state,
      favourites: [...state.favourites, action.photoId]
    };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return {
      ...state,
      favourites: state.favourites.filter(id => id !== action.photoId)
    };
  case ACTIONS.SELECT_PHOTO:
    return {
      ...state,
      selectedPhoto: action.photo,
      isModalOpen: true
    };
  case ACTIONS.CLOSE_MODAL:
    return {
      ...state,
      isModalOpen: false
    };
  case ACTIONS.SET_PHOTO_DATA:
    return {
      ...state,
      photoData: action.payload
    };
  case ACTIONS.SET_TOPIC_DATA:
    return {
      ...state,
      topicData: action.payload
    };
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

  useEffect(() => {
    // Fetch photo data
    fetch('/api/photos')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch(error => console.error("Error fetching photos:", error));
  
    // Fetch topic data
    fetch('/api/topics')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch(error => console.error("Error fetching topics:", error));
  }, []);  // Empty dependency array to run the effect only once
  
  
  // Function to handle toggle favourite
  const toggleFavourite = (photoId) => {
    if (state.favourites.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, photoId });
    }
  };

  // Function to open the modal
  const openModal = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, photo });
  };

  // Function to close the modal
  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  return {
    state,
    toggleFavourite,
    openModal,
    closeModal
  };
};

export default useApplicationData;
