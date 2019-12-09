/*
  TODO: 
    - Get Quiz info along with related questions [axios.get(`${ROOT_URL}/quizs/${quiz.key}/questions`)] ***DONE***
    - Get Quiz info [axios.get(`${ROOT_URL}/quizs/${quiz.key}`)] ***DONE***
    - Pass quiz data to children [use props to pass response data or sanitized version of the response data] ***DONE***
    - Provide logic to determine score [  maintain score; Store array with all the question answers from response data ] ***DONE*** 
    - Maintain state of user input [ Store answers to each question ] ***DONE***
    - Provide logic to handle next and previous ***DONE***
    - Handle Question card transitions
    - Hide prev button on first slide ***DONE***
    - Update page numeration ***DONE***
    - Handles post request to submit completed quiz to backend ***DONE***
    - [11/05/19] assign value to radio buttons from inputMap
    - Render question type based on the query results
*/

import React, { useEffect, useState } from "react";

import axios from "axios";

// React Router DOM history hook
import { useHistory } from "react-router-dom";

import { useAsync } from "react-async";

// Local Components
import * as apiClient from "../quiz/api-call-quiz";
import { ROOT_URL } from "../utils/constants";
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

const getQstData = async ({ quizId }) => {
  let questions;
  let tfanswers;
  let mcanswers;
  let saanswers;
  try {
    questions = apiClient.getQuizQuestions(quizId);
    tfanswers = apiClient.getQuizTFAnswers(quizId);
    mcanswers = apiClient.getQuizSAAnswers(quizId);
    saanswers = apiClient.getQuizMCAnswers(quizId);
  } catch (e) {
    throw new Error(e);
  }
  return { questions, tfanswers, mcanswers, saanswers };
};

export default function QuizContainer(props) {
  let history = useHistory();

  const { user } = useUser();

  let score;

  // Component state

  const [dataArr, setDataArr] = useState([]);
  const [tfaRes, setTfaRes] = useState([]);
  const [mcaRes, setMcaRes] = useState([]);
  const [saaRes, setSaaRes] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inputMap, setInputMap] = useState(new Map());
  const [ansArr, setAnsArr] = useState([]);
  const [quiz, setQuiz] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  // const [transtion, setTransition] = useState(false);

  const quizUrl = props.match.params.id;

  // Api call to get quiz data
  const stateGetData = useAsync({
    promiseFn: getData
  });

  // API call to get all questions and answers
  const stateGetQstData = useAsync({
    watch: quiz.id,
    promiseFn: getQstData,
    quizId: quiz.id
  });

  useEffect(() => {
    if (stateGetData.isSettled) {
      const currQuiz = stateGetData.data.quizzes.data.filter(item => {
        return item.group === user.role && item.url_value === quizUrl;
      });
      setQuiz(currQuiz[0]);
    }
  }, [stateGetData.isSettled]);

  useEffect(() => {
    if (quiz.id !== undefined && stateGetQstData.isSettled) {
      setDataArr(stateGetQstData.data.questions.data);
      setTfaRes(stateGetQstData.data.tfanswers.data);
      setMcaRes(stateGetQstData.data.mcanswers.data);
      setSaaRes(stateGetQstData.data.saanswers.data);
    }
  }, [stateGetQstData.isSettled]);

  console.log(quiz);

  // This funtion is used to iterate forward through questions
  const next = () => {
    if (activeIndex < dataArr.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (activeIndex + 1 === dataArr.length) {
      setIsCompleted(true);
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

  // Handles user interaction with radio buttons
  const handleOnChange = event => {
    const key = dataArr[activeIndex].id;
    const isSelected = event.target.value === "true";
    const added = inputMap.set(key, isSelected);

    setInputMap(added);
    console.log(inputMap);
  };

  const handleOnClick = event => {
    // const key = id;
    // const isSelected = value;
    // const added = inputMap.set(key, isSelected);

    // setInputMap(added);
    console.log(event.target);
    // console.log(id);
    // console.log(inputMap);
  };
  // const onEnter = () => {
  //   setTransition(true);
  // };

  // const onExit = () => {
  //   setTransition(false);
  // };

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
    console.log(arr);
    console.log(newArr);
  };

  // Helper function to invaluate the user input against the answers and determine a score
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
    const quizId = quiz.id;
    inputMap.forEach(compareAnsToInput);
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

  return (
    <Quiz
      quiz={quiz}
      totCount={dataArr.length}
      data={dataArr}
      question={dataArr[activeIndex]}
      activeIndex={activeIndex}
      next={next}
      prev={prev}
      back={back}
      handleOnChange={handleOnChange}
      handleOnClick={handleOnClick}
      handleSubmit={handleSubmit}
      isCompleted={isCompleted}
      answers={inputMap}
    />
  );
}
