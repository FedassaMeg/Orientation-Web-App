import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useUser } from "../context/UserContext";

export const AdminRoute = ({ component: Component, ...rest }) => {
  const user = useUser();
  return (
    <Route
      {...rest}
      render={props =>
        user.user.is_staff ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/home", state: { from: props.location } }}
          />
        )
      }
    />
  );
};
