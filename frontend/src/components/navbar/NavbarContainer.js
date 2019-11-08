import React, { useEffect } from "react";
import Navigation from "./Navigation";

export default function NavbarContainer(props) {
  let authToken = localStorage.getItem("access_token");
  let adminUser = localStorage.getItem("userIsStaff");
  return (
    <Navigation authToken={authToken} isAdmin={adminUser} admin={props.admin} />
  );
}
