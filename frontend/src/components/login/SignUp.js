import React from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

import SignUpForm from "./SignUpForm";

const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    createUser(
      password: $password
      firstName: $firstName
      lastName: $lastName
      siteAdmin: false
    ) {
      user {
        username
      }
    }
  }
`;

export default function SignUp() {
  const [signUp, { loading, error }] = useMutation(SIGNUP_MUTATION);
  if (loading) return <p>...Loading</p>;
  if (error) return <p>An Error Occurred</p>;
  return <SignUpForm signUp={signUp} />;
}
