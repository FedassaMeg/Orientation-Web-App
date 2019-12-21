import React, { useEffect, useState } from "react";

//Axios HTTP Client
import axios from "axios";

// React Router DOM history hook
import { useHistory } from "react-router-dom";

//Local components
import { useQuiz } from "./QuizContext";
import { ROOT_URL } from "../utils/constants";
import Quiz from "./Quiz";

export default function QuizContainer() {
  const { data } = useQuiz();

  let history = useHistory();

  let score = 0;

  const initialState = {
    tf: false,
    mc: "a",
    sa: ""
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [inputMap, setInputMap] = useState(new Map());
  const [ansArr, setAnsArr] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currInput, setCurrInput] = useState(null);

  useEffect(() => {
    setCurrInput(inputMap.get(activeIndex));
  }, [activeIndex, inputMap]);

  // Handles click event on next button
  const next = () => {
    if (activeIndex < data.questions.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (activeIndex + 1 === data.questions.length) {
      setIsCompleted(true);
      createAnsArr(data.answers);
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
    const key = activeIndex;
    let value;
    let added;
    if (data.questions[activeIndex].type === "TF") {
      value = event.target.value === "true";
      added = inputMap.set(key, value);
    }
    if (data.questions[activeIndex].type === "MC") {
      value = event.target.value;
      added = inputMap.set(key, value);
    }
    if (data.questions[activeIndex].type === "SA") {
      value = event.target.value;
      added = inputMap.set(key, value);
    }
    setInputMap(added);
    setCurrInput(value);
    console.log(inputMap);
  };

  const sendQuestionAns = (id, config) => {
    data.questions.map((question, index) => {
      if (question.type === "SA") {
        const value = inputMap.get(index);
        axios.post(
          `${ROOT_URL}/useranswers`,
          {
            quiz_score: id,
            question: question.id,
            short_answer: value
          },
          config
        );
      }
    });
  };

  // Handles submission of quiz; posts score to the backend
  const handleSubmit = event => {
    event.preventDefault();
    if (!data.quiz.review_required) {
      inputMap.forEach(compareAnsToInput);
    }

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
          related_quiz: {
            id: data.quiz.id,
            title: data.quiz.title,
            group: data.quiz.group
          },
          is_completed: true
        },
        config
      )
      .then(res => {
        alert("Quiz Submitted!");
        history.push("/quizs");
        console.log(res);
        return sendQuestionAns(res.data.id, config);
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
          id: index,
          answer: question.true_or_false
        });
      } else if (data.questions[index].type === "MC") {
        newArr.push({
          id: index,
          answer: question.multiple_choice
        });
      } else if (data.questions[index].type === "SA") {
        newArr.push({
          id: index,
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
    console.log(ansValue);
    if (value == ansValue.answer) {
      score = score + 1;
    }
  };

  return (
    <Quiz
      activeIndex={activeIndex}
      isCompleted={isCompleted}
      next={next}
      prev={prev}
      back={back}
      handleOnChange={handleOnChange}
      handleSubmit={handleSubmit}
      answers={inputMap}
      answer={currInput}
    />
  );
}
