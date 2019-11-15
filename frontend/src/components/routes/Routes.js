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
import Login from "../login/Login";
import SignUp from "../login/SignUp";
import AdminPage from "../../views/AdminPage";
import VideosPage from "../../views/VideosPage";

export default function Routes() {
  // Access current user [UserContext]
  const user = useUser();

  // Is current user authenticated
  const loggedIn = user.isAuthenticated;

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login">
          {loggedIn ? <Redirect to="/home" /> : <Login />}
        </Route>
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/quiz/:id" component={QuizPage} />
        <PrivateRoute path="/quizs" component={QuizzesPage} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/slides" component={SlidesPage} />
        <PrivateRoute path="/videos" component={VideosPage} />
        <AdminRoute path="/admin" component={AdminPage} />
      </Switch>
    </Router>
  );
}
