import React from "react";

import { useAuth } from "../context/AuthContext";
import useCallbackStatus from "../utils/use-callback-status";
import LoginForm from "./LoginForm";

export default function Login() {
  const { login } = useAuth();

  const { isPending, isRejected, error, run } = useCallbackStatus();

  function handleOnSubmit(event) {
    event.preventDefault();
    const { username, password } = event.target.elements;

    run(
      login({
        username: username.value,
        password: password.value
      })
    );
  }

  return (
    <LoginForm
      handleOnSubmit={handleOnSubmit}
      isPending={isPending}
      isRejected={isRejected}
      error={error}
    />
  );
}
