import { combineReducers } from"@reduxjs/toolkit";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './fetchPosts';

const initState = {
  loading: false,
  posts: [],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_FAILURE:
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
