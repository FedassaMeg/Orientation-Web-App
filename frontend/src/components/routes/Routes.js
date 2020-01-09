import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
import HandoutsPage from "../../views/HandoutsPage";
import HandoutPage from "../../views/HandoutPage";
import TablePagination from "../../components/admin/table/TablePagination";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/test" component={TablePagination} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/quiz/:id" component={QuizPage} />
        <PrivateRoute path="/quizs" component={QuizzesPage} />
        <PrivateRoute path="/slides" component={SlidesPage} />
        <PrivateRoute path="/videos" component={VideosPage} />
        <PrivateRoute path="/handouts" component={HandoutsPage} />
        <PrivateRoute path="/handout/:id" component={HandoutPage} />
        <AdminRoute path="/site-admin" component={AdminPage} />
        <LoginRoute />
      </Switch>
    </Router>
  );
}
