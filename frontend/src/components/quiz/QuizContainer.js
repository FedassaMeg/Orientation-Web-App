import React, { useEffect, useState } from "react";

import ReactDOM from "react-dom";

//Axios HTTP Client
import axios from "axios";

// React Router DOM history hook
import { useHistory } from "react-router-dom";

//Local components
import { useQuiz } from "./QuizContext";
import { ROOT_URL } from "../utils/constants";
import Quiz from "./Quiz";

export default function QuizContainer() {
  const { quiz, questions, answers } = useQuiz();

  let history = useHistory();

  let score = 0;

  const [activeIndex, setActiveIndex] = useState(0);
  const [inputMap, setInputMap] = useState(new Map());
  const [ansArr, setAnsArr] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currInput, setCurrInput] = useState(null);

  //Pose animation direction
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setCurrInput(inputMap.get(activeIndex));
  }, [activeIndex, inputMap]);

  // Handles click event on next button
  const next = () => {
    if (activeIndex < questions.length - 1) {
      setActiveIndex(activeIndex + 1);
      setAnimate(false);
    } else if (activeIndex + 1 === questions.length) {
      setIsCompleted(true);
      setAnsArr(answers);
    } else {
      return;
    }
  };

  // Handles click event on prev button
  const prev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      setAnimate(true);
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

  // Handles user interaction with radio buttons ***Change Comment make it more explicit and focused on the function***
  const handleOnChange = event => {
    const key = questions[activeIndex].id;

    let value;
    let added;

    if (questions[activeIndex].question_type === 3) {
      value = event.target.value === "true";
      added = inputMap.set(key, value);
    }

    if (questions[activeIndex].question_type === 2) {
      value = event.target.value;
      added = inputMap.set(key, value);
    }

    if (questions[activeIndex].question_type === 1) {
      value = event.target.value;
      added = inputMap.set(key, value);
    }

    setInputMap(added);
    setCurrInput(value);
  };

  const sendQuestionAns = (id, config) => {
    if (quiz.review_required) {
      questions.map((question, index) => {
        if (question.type === "SA") {
          const value = inputMap.get(index);
          axios.post(
            `${ROOT_URL}/sauseranswers`,
            {
              quiz_score: id,
              question: question.id,
              answer: value
            },
            config
          );
        } else if (question.type === "TF") {
          const value = inputMap.get(index);
          axios.post(
            `${ROOT_URL}/tfuseranswers`,
            {
              quiz_score: id,
              question: question.id,
              answer: value
            },
            config
          );
        } else if (question.type === "MC") {
          const value = inputMap.get(index);
          axios.post(
            `${ROOT_URL}/mcuseranswers`,
            {
              quiz_score: id,
              question: question.id,
              answer: value
            },
            config
          );
        }
      });
    }
  };

  // Handles submission of quiz; posts score to the backend
  const handleSubmit = event => {
    event.preventDefault();
    if (!quiz.review_required) {
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
          related_quiz: quiz,
          is_completed: true,
          is_active: true
        },
        config
      )
      .then(res => {
        alert("Quiz Submitted!");
        history.push("/home");
        return sendQuestionAns(res.data.id, config);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Helper function to evaluate the user input against the answers and determine a score
  const compareAnsToInput = (value, key) => {
    let ansValue = ansArr.find(elm => {
      return elm.question === key;
    });
    if (value == ansValue.answer) {
      score = score + 1;
    }
  };
  console.log(ansArr);
  console.log(score);
  console.log(inputMap);
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
      animate={animate}
    />
  );
}
