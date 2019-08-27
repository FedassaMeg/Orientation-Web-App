import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import QuizPage from "../../views/QuizPage";
import LandingPage from "../../views/LandingPage";
import HomePage from "../../views/HomePage";
import Login from "../login/Login";
import SignUp from "../login/SignUp";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/quiz" component={QuizPage} />
        <PrivateRoute path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
}
