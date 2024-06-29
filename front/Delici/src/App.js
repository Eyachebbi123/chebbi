import { BrowserRouter as Router } from "react-router-dom"
import Routing from './routes';
import './assets/css/style.css';
import './assets/css/responsive.css'
import { Provider } from "react-redux";

import { store } from "./store";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
   
    <Provider store={store}>
      
      <Router>
        <Routing />
        <ToastContainer />
   
      </Router>
   
   </Provider>
  );
}
