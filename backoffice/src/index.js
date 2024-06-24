import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Router from './router/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import reducer from "./helpers/store/reducer"
import { configureStore } from '@reduxjs/toolkit';
import { ToastContainer, toast,Pro } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const store = configureStore({ reducer })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

      <Router />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
