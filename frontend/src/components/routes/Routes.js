import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

// Util Components
import { PrivateRoute } from "../routes/PrivateRoute";
import { AdminRoute } from "../routes/AdminRoute";
import LoginRoute from "./LoginRoute";

// Route Components
import QuizPage from "../../views/QuizPage";
import QuizzesPage from "../../views/QuizzesPage";
import LandingPage from "../../views/LandingPage";
import HomePage from "../../views/HomePage";
import SlidesPage from "../../views/SlidesPage";
import AdminPage from "../../views/AdminPage";
import VideosPage from "../../views/VideosPage";
import VideoPage from "../../views/VideoPage";
import HandoutsPage from "../../views/HandoutsPage";
import HandoutPage from "../../views/HandoutPage";

export default function Routes() {
  const url = "/orientation";
  return (
    <Router>
      <Switch>
        <Route exact path={url} component={LandingPage} />
        <PrivateRoute path={`${url}/home`} component={HomePage} />
        <PrivateRoute path={`${url}/quiz/:id`} component={QuizPage} />
        <PrivateRoute path={`${url}/quizs`} component={QuizzesPage} />
        <PrivateRoute path={`${url}/slides`} component={SlidesPage} />
        <PrivateRoute path={`${url}/videos`} component={VideosPage} />
        <PrivateRoute path={`${url}/video/:id`} component={VideoPage} />
        <PrivateRoute path={`${url}/handouts`} component={HandoutsPage} />
        <PrivateRoute path={`${url}/handout/:id`} component={HandoutPage} />
        <AdminRoute path={`${url}/site-admin`} component={AdminPage} />
        <LoginRoute />
      </Switch>
    </Router>
  );
}
