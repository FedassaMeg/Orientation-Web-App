import React, { useEffect, Suspense } from "react";

import { useUser } from "./utils/context/UserContext";
import AuthenticatedApp from "./Authenticated";
import UnauthenticatedApp from "./Unauthenticated";

// const loadAuthenticatedApp = () => import("./Authenticated");
// const AuthenticatedApp = React.lazy(loadAuthenticatedApp);
// const UnauthenticatedApp = React.lazy(() => import("./Unauthenticated"));

export default function App() {
  const user = useUser();

  // useEffect(() => {
  //   loadAuthenticatedApp();
  // }, []);

  return (
    // <Suspense fallback={<div>Loading...</div>}>
    //   {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    // </Suspense>
    <>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>
  );
}
