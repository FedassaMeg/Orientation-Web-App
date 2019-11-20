import React from "react";
import { Route, withRouter, Redirect } from "react-router-dom";

import { useUser } from "../context/UserContext";
import Login from "../login/Login";
import SignUp from "../login/SignUp";
import TransitionSwitch from "./TransitionSwitch";

export const LoginRoute = withRouter(({ location }) => {
  // Access current user [UserContext]
  const user = useUser();

  // Is current user authenticated
  const loggedIn = user.isAuthenticated;
  return (
    <TransitionSwitch location={location}>
      <Route path="/login" key="login">
        {loggedIn ? <Redirect to="/home" /> : <Login />}
      </Route>
      <Route path="/signup" component={SignUp} key="signup" />
    </TransitionSwitch>
  );
});

export default LoginRoute;
