import React, { useEffect, useState } from "react";

import { useAsync } from "react-async";

import * as apiClient from "./api-call-quiz";
import Quiz from "./Quiz";

const getQuizData = async ({ quizId }) => {
  let questions;
  let answers;
  try {
    questions = await apiClient.getQuizQuestions(quizId);
    //answers = apiClient.getQuizTFAnswers(quizId);
  } catch (e) {
    throw new Error(e);
  }
  return { questions, answers };
};

export default function QuizContent(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dataArr, setDataArr] = useState([]);
  const [tfaRes, setTfaRes] = useState([]);
  const [inputMap, setInputMap] = useState(new Map());
  const [ansArr, setAnsArr] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const quizId = props.quiz.id;

  const { data, error, isPending, isSettled } = useAsync({
    promiseFn: getQuizData,
    quizId
  });

  useEffect(() => {
    if (isSettled) {
      setDataArr(data.questions.data);
    }
  }, [isSettled]);

  // This funtion is used to iterate forward through questions
  const next = () => {
    if (activeIndex < dataArr.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (activeIndex + 1 === dataArr.length) {
      setIsCompleted(true);
      createAnsArr(tfaRes);
    } else {
      return;
    }
  };

  // This funtion is used to iterate backward through questions
  const prev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      return;
    }
  };

  // This funtion is used to navigate back from the Review Answers Page to the quiz questions
  const back = () => {
    if (activeIndex > 0) {
      setActiveIndex(0);
      setIsCompleted(false);
    } else {
      return;
    }
  };

  // Helper function to create an array with the answers to the questions
  const createAnsArr = arr => {
    let newArr = [];
    arr.map(question => {
      newArr.push({
        id: question.question,
        answer: question.answer
      });
    });
    setAnsArr(newArr);
  };

  // Handles user interaction with radio buttons
  const handleOnChange = event => {
    const key = dataArr[activeIndex].id;
    const isSelected = event.target.value === "true";
    const added = inputMap.set(key, isSelected);

    setInputMap(added);
    console.log(inputMap);
  };

  if (isPending) {
    return <div>Loading...</div>;
  } else {
    return (
      <Quiz
        activeIndex={activeIndex}
        totCount={dataArr.length}
        quiz={props.quiz}
        isCompleted={isCompleted}
        question={dataArr[activeIndex]}
        next={next}
        prev={prev}
        back={back}
        handleOnChange={handleOnChange}
        answers={inputMap}
      />
    );
  }
}
