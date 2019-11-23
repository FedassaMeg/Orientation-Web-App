import React, { useEffect, useState } from "react";

import { useAsync } from "react-async";

import filter from "lodash/filter";

import * as apiClient from "./api-call-quiz";
import { useUser } from "../context/UserContext";

//Attempt to use render props for data fetching

export default function Resource(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false);
  const [finalData, setFinalData] = useState({});

  const quizUrl = props.url;
  const { user } = useUser();

  // const { data, error, isRejected, isPending, isSettled } = useAsync({
  //   promiseFn: bootstrapQuizData
  // });

  // // Runs on component mount
  // useLayoutEffect(() => {
  //   if (isSettled) {
  //     setFirstAttemptFinished(true);
  //   }
  // }, [isSettled]);
  let data;
  useEffect(() => {
    data = bootstrapQuizData();
  }, []);

  const getQuizInfo = (qzs, url) => {
    filter(qzs, obj => {
      return obj.url_value == url;
    });
  };

  async function bootstrapQuizData() {
    console.log("bootstrap Started!");
    const user_role = user.role;
    const quizzes = await apiClient.getQuizzes();
    const quiz = getQuizInfo(quizzes.data, quizUrl);
    console.log(quiz[0]);
    const questions = await apiClient.getQuizQuestions(quiz.id);
    return { quiz, questions, user_role };
  }
  return <>{props.render({ data })}</>;
}
