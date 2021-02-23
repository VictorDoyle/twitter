import LandingPage from "./pages/landingPage/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <>
        <LandingPage />
      </>
    </Router>
  );
}

export default App;
