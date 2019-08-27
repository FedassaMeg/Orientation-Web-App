import React, { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import Question from "./Question";

const GET_ALL_QUESTIONS_QUERY = gql`
  {
    getAllQuestions {
      id
      question
      answer
    }
  }
`;

export default function QuestionList() {
  const { data, loading, error } = useQuery(GET_ALL_QUESTIONS_QUERY);
  if (loading) return <p>...loading</p>;
  if (error) return <p>Error</p>;
  return (
    <Fragment>
      {data.getAllQuestions.map(question => (
        <Question key={question.id} question={question} />
      ))}
    </Fragment>
  );
}
