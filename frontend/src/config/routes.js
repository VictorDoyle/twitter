import React from "react";
import { Switch, Route } from "react-router-dom";
import MainFeed from "../pages/feed/MainFeed";
import LandingPage from "../pages/landingPage/LandingPage";
import LoginPage from "../pages/loginPage/LoginPage";
import Profile from "../pages/profile/Profile";


const Routes = () => {
  return (
    <Switch>
      {/* landing page */}
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      {/* main pages */}
      <Route exact path="/feed" component={MainFeed} />

    {/*   <Route path="/explore" component={Explore} /> */}
    <Route path="/profile" component={ Profile } />
      {/* 404 ROUTE */}
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
};
export default Routes;
