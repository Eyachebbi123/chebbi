import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from "react-use-cart";
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <CartProvider>
      <App />
      <ToastContainer />

    </CartProvider>
  </React.StrictMode>

);
reportWebVitals();
