import LandingPage from "./pages/landingPage/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <Router>
      <>
        <LandingPage />
        {/* <Feed /> */}
      </>
    </Router>
  );
}

export default App;
