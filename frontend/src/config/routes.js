import React from "react";
import { Switch, Route } from "react-router-dom";
import Feed from "../pages/feed/Feed";
import LandingPage from "../pages/landingPage/LandingPage";
import LoginPage from "../pages/loginPage/LoginPage";

const Routes = () => {
  return (
    <Switch>
      {/* landing page */}
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      {/* main pages */}
      <Route exact path="/feed" component={Feed} />

    {/*   <Route path="/explore" component={Explore} /> */}
      {/* 404 ROUTE */}
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
};
export default Routes;
