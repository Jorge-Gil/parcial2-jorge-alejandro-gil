import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import postsReducer from "./postsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: [thunkMiddleware],
});


