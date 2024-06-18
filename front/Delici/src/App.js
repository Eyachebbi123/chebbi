import { BrowserRouter as Router } from "react-router-dom"
import Routing from './routes';
import './assets/css/style.css';
import './assets/css/responsive.css'
import { Provider } from "react-redux";

import { store } from "./store";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
   
    <Provider store={store}>
      
      <Router>
        <Routing />
   
      </Router>
   
   </Provider>
  );
}
