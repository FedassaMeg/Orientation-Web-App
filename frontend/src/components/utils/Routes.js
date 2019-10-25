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

//Test Pages
import Carousel from "../muitest/Carousel";
import PdfComponent from "../slides/PdfComponent";
import EmbeddedSlide from "../slides/EmbeddedSlide";
import Choices from "../question/Choices";
import QuestionContent from "../question/QuestionContent";
import Question from "../question/Question";
import Quiz from "../quiz/Quiz";
import QuizContainer from "../quiz/QuizContainer";
import ReviewAnswers from "../quiz/ReviewAnswers";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/pdf" component={PdfComponent} />
        <PrivateRoute path="/quiz/:id" component={QuizPage} />
        <PrivateRoute path="/quizs" component={QuizzesPage} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/slide/:id" component={SlidePage} />
        <PrivateRoute path="/slides" component={SlidesPage} />
        <Route path="/admin" component={AdminPage} />

        {/* Test Pages */}
        <Route path="/test" component={ReviewAnswers} />
        <Route path="/ebd" component={EmbeddedSlide} />
      </Switch>
    </Router>
  );
}
