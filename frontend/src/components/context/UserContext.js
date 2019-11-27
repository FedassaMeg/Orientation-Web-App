import React, { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";

const UserContext = createContext();

function UserProvider(props) {
  const { data } = useAuth();
  console.log("UserContext rendered");
  // Default value for Anonymous User [Fixes null error with Navigation Component]
  if (data.user === null) {
    data.user = { is_staff: false };
  }

  return <UserContext.Provider value={data} {...props} />;
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
}

export { UserProvider, useUser };