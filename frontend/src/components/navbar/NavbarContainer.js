import React, { useEffect } from "react";

import { useAuth } from "../utils/context/AuthContext";
import { useUser } from "../utils/context/UserContext";
import useCallbackStatus from "../utils/use-callback-status";

import Navigation from "./Navigation";

export default function NavbarContainer(props) {
  const user = useUser();

  console.log(user);

  return (
    <Navigation
      isAuthenticated={user.isAuthenticated}
      isAdmin={user.is_staff}
      admin={props.admin}
    />
  );
}
