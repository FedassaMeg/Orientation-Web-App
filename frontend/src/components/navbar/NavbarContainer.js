import React, { useEffect } from "react";

import { useUser } from "../utils/context/UserContext";
import Navigation from "./Navigation";
import { truncateSync } from "fs";

export default function NavbarContainer(props) {
  const user = useUser();

  return (
    <Navigation
      isAuthenticated={user.isAuthenticated}
      isAdmin={user.user.is_staff}
      admin={props.admin}
    />
  );
}
