import React, { useState, useEffect } from "react";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

import * as apiClient from "./api-call-admin";

// Async wrapper function for api calls
const getQuizData = async quizId => {
  let quiz;
  try {
    quiz = await apiClient.getQuiz(quizId);
  } catch (e) {
    throw new Error(e);
  }
  return { quiz };
};

export default function EditQuestionContainer(props) {
  const [quiz, setQuiz] = useState([]);
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState(new Map());
  const [ansInput, setAnsInput] = useState([]);
  const [qtsInput, setQtsInput] = useState([]);

  const quizId = props.quizId;

  const { data, isSettled, isRejected, isPending } = useAsync({
    promiseFn: getQuizData,
    quizId
  });

  return (
    <div>
      <div></div>
    </div>
  );
}
