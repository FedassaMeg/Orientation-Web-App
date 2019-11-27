import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState
} from "react";
import { useAsync } from "react-async";

import * as authClient from "../utils/auth-client";
import { bootstrapData } from "../utils/bootstrap-data";

const AuthContext = createContext();

function AuthProvider(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false);
  console.log("AuthContext rendered");
  const {
    data = { user: null },
    error,
    isRejected,
    isPending,
    isSettled,
    reload
  } = useAsync({
    promiseFn: bootstrapData
  });

  useLayoutEffect(() => {
    console.log("UseLayoutEffect for AuthContext rendered");
    if (isSettled) {
      setFirstAttemptFinished(true);
    }
  }, [isSettled]);

  if (!firstAttemptFinished) {
    if (isPending) {
      return <h3>Loading...</h3>;
    }
    if (isRejected) {
      return (
        <div>
          <pre>{error.message}</pre>
        </div>
      );
    }
  }

  const login = form => authClient.login(form).then(reload);
  const register = form => authClient.register(form).then(reload);
  const logout = () => authClient.logout().then(reload);

  return (
    <AuthContext.Provider
      value={{ data, login, logout, register }}
      {...props}
    />
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };