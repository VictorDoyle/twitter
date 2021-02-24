import LandingPage from "./pages/landingPage/LandingPage";
import LoginPage from "./pages/loginPage/LoginPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <Router>
      <>
        {/* change to desired route to hit */}
        <Route path="/feed" component={Feed} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={LandingPage} exact />
      </>
    </Router>
  );
}

export default App;
