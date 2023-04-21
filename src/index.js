import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
// import {store} from './store'
import {store} from './store'
import Posts from './Posts'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <PostList/> */}
    <Posts/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// https://jsonplaceholder.typicode.com/posts

// Present a list of post in react:
// Use Redux / Context - Reduxers,  Hooks and  Custom Hooks