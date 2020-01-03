import React from "react";

import { AuthProvider } from "./AuthContext";
import { UserProvider } from "./UserContext";
import { ContentProvider } from "./ContentContext";

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <UserProvider>
        <ContentProvider>{children}</ContentProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default AppProviders;
