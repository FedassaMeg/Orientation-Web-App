import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState
} from "react";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

//Local components
import * as authClient from "../utils/auth-client";
import { bootstrapData } from "../utils/bootstrap-data";
import FullPageSpinner from "../components/FullPageSpinner";

const AuthContext = createContext();

function AuthProvider(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false);
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
    if (isSettled) {
      setFirstAttemptFinished(true);
    }
  }, [isSettled]);

  if (!firstAttemptFinished) {
    if (isPending) {
      return <FullPageSpinner />;
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
