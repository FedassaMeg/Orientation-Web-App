import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Util Components
import { useUser } from "../context/UserContext";
import { PrivateRoute } from "../routes/PrivateRoute";
import { AdminRoute } from "../routes/AdminRoute";

// Route Components
import QuizPage from "../../views/QuizPage";
import QuizzesPage from "../../views/QuizzesPage";
import LandingPage from "../../views/LandingPage";
import HomePage from "../../views/HomePage";
import SlidesPage from "../../views/SlidesPage";
import AdminPage from "../../views/AdminPage";
import VideosPage from "../../views/VideosPage";
import HandoutsPage from "../../views/HandoutsPage";
import HandoutPage from "../../views/HandoutPage";
import SignUp from "../login/SignUp";
import Login from "../login/Login";
import LoginRoute from "./LoginRoute";

export default function Routes() {
  // Access current user [UserContext]
  const user = useUser();

  // Is current user authenticated
  const loggedIn = user.isAuthenticated;
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/quiz/:id" component={QuizPage} />
        <PrivateRoute path="/quizs" component={QuizzesPage} />
        <PrivateRoute path="/slides" component={SlidesPage} />
        <PrivateRoute path="/videos" component={VideosPage} />
        <PrivateRoute path="/handouts" component={HandoutsPage} />
        <PrivateRoute path="/handout/:id" component={HandoutPage} />
        <AdminRoute path="/admin" component={AdminPage} />
      </Switch>
      <LoginRoute />
    </Router>
  );
}
