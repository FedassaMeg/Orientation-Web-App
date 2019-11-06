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
*/

import React, { useEffect, useState } from "react";

// React Router DOM history hook
import { useHistory } from "react-router-dom";

// Axios
import axios from "axios";

// Local Components
import { ROOT_URL } from "../utils/constants";
import Quiz from "./Quiz";

export default function QuizContainer(props) {
  let history = useHistory();

  // Component state
  const [dataArr, setDataArr] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inputMap, setInputMap] = useState(new Map());
  const [ansArr, setAnsArr] = useState([]);
  const [quiz, setQuiz] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  // const [transtion, setTransition] = useState(false);

  // Runs on component mount
  useEffect(() => {
    axios.all([getQuiz(), getQuestionsByQuizId()]).then(
      axios.spread((qz, qts) => {
        setDataArr(qts.data);
        setQuiz(qz.data);
      })
    );
  }, []);

  let score = 0;

  // Request for Quiz data given an id
  const getQuiz = () => {
    return axios.get(`${ROOT_URL}/quizs/${props.quiz.key}`);
  };

  // Request for Question data given a Quiz id
  const getQuestionsByQuizId = () => {
    return axios.get(`${ROOT_URL}/quizs/${props.quiz.key}/questions`);
  };

  // This funtion is used to iterate forward through questions
  const next = () => {
    if (activeIndex < dataArr.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (activeIndex + 1 === dataArr.length) {
      setIsCompleted(true);
      createAnsArr(dataArr);
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
        id: question.id,
        answer: question.answer
      });
    });
    setAnsArr(newArr);
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
    console.log(score);
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
      handleSubmit={handleSubmit}
      isCompleted={isCompleted}
      answers={inputMap}
    />
  );
}
