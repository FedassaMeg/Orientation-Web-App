//TODO: Implement check on user access to quiz

import React, { useEffect, useState } from "react";

//Axios HTTP Client
import axios from "axios";

// React Router DOM history hook
import { useHistory } from "react-router-dom";

//Local components
import { useQuiz } from "./QuizContext";
import { ROOT_URL } from "../utils/constants";
import QuizContent from "./QuizContent";

// Return array of object with properties id -> key and user_input -> value
const createUserInputArr = map => {
  let newArr = new Array();
  map.forEach((value, key) => {
    newArr.push({
      id: key,
      user_input: value
    });
  });

  return newArr;
};

export default function QuizContainer(props) {
  const { data } = useQuiz();

  let history = useHistory();

  let score = 0;

  const [activeIndex, setActiveIndex] = useState(0);
  const [inputMap, setInputMap] = useState(new Map());
  const [ansArr, setAnsArr] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  let currAns;

  // Handles click event on next button
  const next = () => {
    if (activeIndex < data.questions.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (activeIndex + 1 === data.questions.length) {
      setIsCompleted(true);
      createAnsArr(data.answers);
      const userAnsArray = createUserInputArr(inputMap);
      console.log(userAnsArray);
    } else {
      return;
    }
  };

  // Handles click event on prev button
  const prev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      return;
    }
  };

  // Handles click event on back button
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
    const key = data.questions[activeIndex].id;
    let added;
    if (data.questions[activeIndex].type === "TF") {
      const isSelected = event.target.value === "true";
      added = inputMap.set(key, isSelected);
    }
    if (data.questions[activeIndex].type === "MC") {
      const choice = event.target.value;
      added = inputMap.set(key, choice);
    }
    setInputMap(added);
    console.log(inputMap);
  };

  // Handles submission of quiz; posts score to the backend
  const handleSubmit = event => {
    event.preventDefault();
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
          related_quiz: data.quiz.id
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

  // Helper function to create an array with the answers to the questions
  const createAnsArr = arr => {
    let newArr = [];
    arr.map((question, index) => {
      if (data.questions[index].type === "TF") {
        newArr.push({
          id: question.question,
          answer: question.true_or_false
        });
      } else if (data.questions[index].type === "MC") {
        newArr.push({
          id: question.question,
          answer: question.multiple_choice
        });
      } else if (data.questions[index].type === "SA") {
        newArr.push({
          id: question.question,
          answer: question.short_answer
        });
      }
    });
    setAnsArr(newArr);
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

  return (
    <QuizContent
      activeIndex={activeIndex}
      isCompleted={isCompleted}
      next={next}
      prev={prev}
      back={back}
      handleOnChange={handleOnChange}
      handleSubmit={handleSubmit}
      answers={inputMap}
      answer={currAns}
    />
  );
}
