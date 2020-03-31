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

  const url = "/orientation";
  return (
    <TransitionSwitch location={location}>
      <Route path={`${url}/login`} key="login">
        {loggedIn ? <Redirect to={`${url}/home`} /> : <Login />}
      </Route>
      <Route path={`${url}/signup`} key="signup">
        {loggedIn ? <Redirect to={`${url}/home`} /> : <SignUp />}
      </Route>
    </TransitionSwitch>
  );
}
