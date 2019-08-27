import React from "react";
import { useApolloClient, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import LoginForm from "./LoginForm";

const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

export default function Login() {
  const client = useApolloClient();
  const [tokenAuth, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted({ tokenAuth }) {
      localStorage.setItem("token", tokenAuth.token);
      client.writeData({ data: { isLoggedIn: true } });
    }
  });
  if (loading) return <p>...Loading</p>;
  if (error) return <p>An Error Occurred</p>;
  return <LoginForm tokenAuth={tokenAuth} />;
}
