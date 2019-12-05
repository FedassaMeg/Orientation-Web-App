import React, { useEffect, useState } from "react";

import axios from "axios";

// React Router DOM history hook
import { useHistory } from "react-router-dom";

import { useAsync } from "react-async";

import * as apiClient from "./api-call-quiz";
import { ROOT_URL } from "../utils/constants";
import QuizContent from "./QuizContent";

const getQuizData = async ({ quizId }) => {
  let questions;
  let answers;
  try {
    questions = await apiClient.getQuizQuestions(quizId);
    answers = await apiClient.getQuizAnswers(quizId);
  } catch (e) {
    throw new Error(e);
  }
  return { questions, answers };
};

export default function NQuizContent(props) {
  let history = useHistory();

  let score = 0;

  const [activeIndex, setActiveIndex] = useState(0);
  const [dataRes, setDataRes] = useState([]);
  const [ansRes, setAnsRes] = useState([]);
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
      setDataRes(data.questions.data);
      setAnsRes(data.answers.data);
    }
  }, [isSettled]);

  // This funtion is used to iterate forward through questions
  const next = () => {
    if (activeIndex < dataRes.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (activeIndex + 1 === dataRes.length) {
      setIsCompleted(true);
      createAnsArr(ansRes);
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
    arr.map((question, index) => {
      if (dataRes[index].type === "TF") {
        newArr.push({
          id: question.question,
          answer: question.true_or_false
        });
      } else if (dataRes[index].type === "MC") {
        newArr.push({
          id: question.question,
          answer: question.multiple_choice
        });
      } else if (dataRes[index].type === "SA") {
        newArr.push({
          id: question.question,
          answer: question.short_answer
        });
      }
    });
    setAnsArr(newArr);
  };

  // Handles user interaction with radio buttons
  const handleOnChange = event => {
    const key = dataRes[activeIndex].id;
    let added;
    if (dataRes[activeIndex].type === "TF") {
      const isSelected = event.target.value === "true";
      added = inputMap.set(key, isSelected);
    }
    if (dataRes[activeIndex].type === "MC") {
      const choice = event.target.value;
      added = inputMap.set(key, choice);
    }
    setInputMap(added);
  };

  // Helper function to evaluate the user input against the answers and determine a score
  const compareAnsToInput = (value, key) => {
    let ansValue = ansArr.find(elm => {
      return elm.id === key;
    });
    if (value == ansValue.answer) {
      score = score + 1;
    }
  };

  // Handles submission of quiz; posts score to the backend
  const handleSubmit = event => {
    event.preventDefault();
    inputMap.forEach(compareAnsToInput);
    console.log(score, quizId);
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    };

    axios
      .post(
        `${ROOT_URL}/scores/`,
        {
          score: score,
          related_quiz: quizId
        },
        config
      )
      .then(res => {
        console.log(res.data);
        alert("Quiz Submitted!");
        history.push("/quizs");
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (error) return <div>Something went wrong: {error}</div>;
  if (data) {
    if (dataRes === undefined) {
      return <div>Question data is null</div>;
    } else {
      return (
        <QuizContent
          activeIndex={activeIndex}
          totCount={dataRes.length}
          quiz={props.quiz}
          isCompleted={isCompleted}
          question={dataRes[activeIndex]}
          questions={dataRes}
          next={next}
          prev={prev}
          back={back}
          handleOnChange={handleOnChange}
          handleSubmit={handleSubmit}
          answers={inputMap}
          ansRes={ansRes[activeIndex]}
        />
      );
    }
  }
}
