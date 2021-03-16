import React from "react";
import { Switch, Route } from "react-router-dom";
import MainFeed from "../pages/feed/MainFeed";
import LandingPage from "../pages/landingPage/LandingPage";
import LoginPage from "../pages/loginPage/LoginPage";
import MessagePage from "../pages/messagesPage/MessagePage";
import Profile from "../pages/profile/Profile";
// import SettingsPage from "../pages/settings/SettingsPage";
import CommentShow from "../pages/commentShow/CommentShow";

const Routes = () => {
  return (
    <Switch>
      {/* landing page */}
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      {/* main pages */}
      <Route exact path="/feed" component={MainFeed} />
      <Route exact path="/messages" component={MessagePage} />
      {/* <Route exact path="/settings" component={SettingsPage} /> */}

      <Route exact path="/tweets/:id" component={CommentShow} />

      {/*   <Route path="/explore" component={Explore} /> */}
      <Route exact path="/tweets/profile/:id" component={Profile} />
      {/* 404 ROUTE */}
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
};
export default Routes;
