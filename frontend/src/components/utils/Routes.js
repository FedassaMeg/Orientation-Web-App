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
import PdfViewer from "../slides/PdfViewer";
import Carousel from "../muitest/Carousel";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/pdf" component={PdfViewer} />
        <PrivateRoute path="/quiz/:id" component={QuizPage} />
        <PrivateRoute path="/quizs" component={QuizzesPage} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/slide/:id" component={SlidePage} />
        <PrivateRoute path="/slides" component={SlidesPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/test" component={Carousel} />
        <Route path="/p df" component={PdfViewer} />
      </Switch>
    </Router>
  );
}
