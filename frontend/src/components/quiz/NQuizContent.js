import React, { useEffect, useState } from "react";

import { useAsync } from "react-async";

import * as apiClient from "./api-call-quiz";
import QuizContent from "./QuizContent";

const getQuizData = async ({ quizId }) => {
  let questions;
  let questiontypes;
  let tfanswers;
  let mcanswers;
  let saanswers;
  try {
    questions = await apiClient.getQuizQuestions(quizId);
    questiontypes = await apiClient.getQuizQuestionType(quizId);
    tfanswers = await apiClient.getQuizTFAnswers(quizId);
    mcanswers = await apiClient.getQuizMCAnswers(quizId);
    saanswers = await apiClient.getQuizSAAnswers(quizId);
  } catch (e) {
    throw new Error(e);
  }
  return { questions, questiontypes, tfanswers, mcanswers, saanswers };
};

export default function NQuizContent(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dataArr, setDataArr] = useState([]);
  const [qstTypeRes, setQstTypeRes] = useState([]);
  const [tfaRes, setTfaRes] = useState([]);
  const [mcaRes, setMcaRes] = useState([]);
  const [saaRes, setSaaRes] = useState([]);
  const [inputMap, setInputMap] = useState(new Map());
  const [ansArr, setAnsArr] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const quizId = props.quiz.id;

  const { data, error, isPending, isSettled } = useAsync({
    watch: quizId,
    promiseFn: getQuizData,
    quizId
  });

  useEffect(() => {
    if (isSettled) {
      setDataArr(data.questions.data);
      setQstTypeRes(data.questiontypes.data);
      setTfaRes(data.tfanswers.data);
      setMcaRes(data.mcanswers.data);
      setSaaRes(data.saanswers.data);
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
    let added;
    if (qstTypeRes[activeIndex].type === "TF") {
      const isSelected = event.target.value === "true";
      added = inputMap.set(key, isSelected);
    }
    if (qstTypeRes[activeIndex].type === "MC") {
      const choice = event.target.value;
      added = inputMap.set(key, choice);
    }
    setInputMap(added);
  };

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (error) return <div>Something went wrong: {error}</div>;
  if (data) {
    if (dataArr === undefined) {
      return <div>Question data is null</div>;
    } else {
      return (
        <QuizContent
          activeIndex={activeIndex}
          totCount={dataArr.length}
          quiz={props.quiz}
          isCompleted={isCompleted}
          question={dataArr[activeIndex]}
          questions={dataArr}
          next={next}
          prev={prev}
          back={back}
          handleOnChange={handleOnChange}
          answers={inputMap}
          qstTypeRes={qstTypeRes[activeIndex]}
          tfaRes={tfaRes[activeIndex]}
          mcaRes={mcaRes[activeIndex]}
          saaRes={saaRes[activeIndex]}
        />
      );
    }
  }
}
