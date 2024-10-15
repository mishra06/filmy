import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store/store';




/**setup axios */
axios.defaults.baseURL = "https://api.themoviedb.org/3";
// axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_ACCESS_TOKEN}`
axios.defaults.headers.common['Authorization'] ='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzY2ZTcwZTkzYTc0ZDRkODY0NmYzNjI0M2QxN2U0ZiIsIm5iZiI6MTcyOTAwNDAxMS45MjE1NzEsInN1YiI6IjY3MGU4MDc0MGI4MDA1MzdkNzVjZmVmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NkbncvXYG1-7aDZviCCIDbejrFCZdmg_D0mFLzscizI'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  </Provider>
  
);

reportWebVitals();
