import React from "react";

//Local components
import { useUser } from "../context/UserContext";
import NavLinks from "./NavLinks";

export default function NavbarContainer({ admin }) {
  const user = useUser();

  return (
    <NavLinks
      isAuthenticated={user.isAuthenticated}
      isAdmin={user.user.is_staff}
      admin={admin}
    />
  );
}
