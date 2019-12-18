/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState, useLayoutEffect } from "react";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

import * as apiClient from "./api-call-admin";

// Async wrapper function for api calls
const getUserAnsData = async ({ input }) => {
  let userAns;
  let questions;
  let quiz;
  try {
    userAns = await apiClient.getUserAns(input.scoreId);
    questions = await apiClient.getQuizQuestions(input.quizId);
    quiz = await apiClient.getQuiz(input.quizId);
  } catch (e) {
    throw new Error(e);
  }
  return { userAns, questions, quiz };
};

export default function ReviewQuiz(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false);
  const [userAns, setUserAns] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [quiz, setQuiz] = useState(null);

  const input = {
    scoreId: props.scoreId,
    quizId: props.quizId
  };
  const { data, isSettled, isRejected, isPending, error } = useAsync({
    promiseFn: getUserAnsData,
    input
  });

  useLayoutEffect(() => {
    if (isSettled) {
      setUserAns(data.userAns.data);
      setQuestions(data.questions.data);
      setQuiz(data.quiz.data);
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
  const list = questions.map(question => {
    return userAns.map(ans => {
      if (question.id == ans.question) {
        return (
          <div>
            <div>{question.question}</div>
            <div>{ans.short_answer}</div>
            <button>Correct</button>
            <button>Not Correct</button>
          </div>
        );
      }
    });
  });

  console.log(list);
  return (
    <div>
      <button onClick={props.back}>Back</button>
      {list}
      <button>Done</button>
    </div>
  );
}
