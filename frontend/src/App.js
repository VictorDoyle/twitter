import LandingPage from "./pages/landingPage/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Route path="/feed" component={Feed} />
        <Route path="/" component={LandingPage} exact />
      </>
    </Router>
  );
}

export default App;
