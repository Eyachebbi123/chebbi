import { BrowserRouter as Router } from "react-router-dom"
import Routing from './routes';
import './assets/css/style.css';
import './assets/css/responsive.css'

export default function App() {
  return (
    <>
      <Router>
        <Routing />
      </Router>
    </>
  );
}
