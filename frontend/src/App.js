import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./config/routes";

import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Routes />
      </>
    </Router>
  );
}

export default App;
