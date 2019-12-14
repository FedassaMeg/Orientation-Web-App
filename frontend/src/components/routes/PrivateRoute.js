import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { data } = useAuth();
  console.log(data.isAuthenticated);
  return (
    <Route
      {...rest}
      render={props =>
        data.isAuthenticated ? (
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
