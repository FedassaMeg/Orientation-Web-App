import React from "react";
import { Route, useLocation, Redirect } from "react-router-dom";

import { useUser } from "../context/UserContext";
import Login from "../login/Login";
import SignUp from "../login/SignUp";
import TransitionSwitch from "./TransitionSwitch";

export default function LoginRoute() {
  // Access current user [UserContext]
  const user = useUser();

  // Access current location url
  const location = useLocation();

  // Is current user authenticated
  const loggedIn = user.isAuthenticated;

  return (
    <TransitionSwitch location={location}>
      <Route path="/login" key="login">
        {loggedIn ? <Redirect to="/home" /> : <Login />}
      </Route>
      <Route path="/signup" key="signup">
        {loggedIn ? <Redirect to="/home" /> : <SignUp />}
      </Route>
    </TransitionSwitch>
  );
}
