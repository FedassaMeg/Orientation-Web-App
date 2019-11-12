import React from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "../utils/context/AuthContext";
import useCallbackStatus from "../utils/use-callback-status";
import LoginForm from "./LoginForm";

export default function Login() {
  let history = useHistory();

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
