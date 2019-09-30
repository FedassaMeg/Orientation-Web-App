import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import QuizPage from "../../views/QuizPage";
import QuizzesPage from "../../views/QuizzesPage";
import LandingPage from "../../views/LandingPage";
import HomePage from "../../views/HomePage";
import SlidePage from "../../views/SlidePage";
import SlidesPage from "../../views/SlidesPage";
import Login from "../login/Login";
import SignUp from "../login/SignUp";
import AdminPage from "../../views/AdminPage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/quiz/:id" component={QuizPage} />
        <PrivateRoute path="/quizs" component={QuizzesPage} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/slide/:id" component={SlidePage} />
        <PrivateRoute path="/slides" component={SlidesPage} />
        <PrivateRoute path="/admin" component={AdminPage} />
      </Switch>
    </Router>
  );
}
