import React from "react";
import { Switch, Route } from "react-router-dom";
import Feed from "../pages/Feed";
import LandingPage from "../pages/landingPage/LandingPage";
import LoginPage from "../pages/loginPage/LoginPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/feed" component={Feed} />
      <Route path="/login" component={LoginPage} />
      {/* 404 ROUTE */}
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
};
export default Routes;
