import React from "react";

import { Redirect, Route } from "react-router-dom";

import { useUser } from "../context/UserContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useUser();
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
