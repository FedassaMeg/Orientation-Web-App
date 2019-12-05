import React, { useEffect, useState } from "react";

import { useAsync } from "react-async";

import * as apiClient from "./api-call-quiz";
import { useUser } from "../context/UserContext";
import Quiz from "./Quiz";

const getData = async () => {
  let quizzes;
  try {
    quizzes = await apiClient.getQuizzes();
  } catch (e) {
    throw new Error(e);
  }
  return { quizzes };
};

export default function QuizContainer(props) {
  const quizUrl = props.match.params.id;

  const { user } = useUser();

  const [quiz, setQuiz] = useState({});

  const { data, error, isPending, isSettled } = useAsync({
    promiseFn: getData
  });

  useEffect(() => {
    if (isSettled) {
      const currQuiz = data.quizzes.data.filter(item => {
        //return item.group[0] === user.role && item.url_value === quizUrl;
        return item.url_value === quizUrl;
      });
      setQuiz(currQuiz[0]);
    }
  }, [isSettled]);

  if (isPending) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data) {
    if (quiz.id === undefined) {
      return <div>You don't have to take this Quiz!</div>;
    } else {
      return <Quiz quiz={quiz} />;
    }
  }

  return null;
}
