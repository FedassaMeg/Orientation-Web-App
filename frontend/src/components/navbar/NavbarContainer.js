import React from "react";

import { useUser } from "../context/UserContext";
import Navigation from "./Navigation";

export default function NavbarContainer(props) {
  const user = useUser();
  console.log(user);
  return (
    <Navigation
      isAuthenticated={user.isAuthenticated}
      isAdmin={user.user.is_staff}
      admin={props.admin}
    />
  );
}
