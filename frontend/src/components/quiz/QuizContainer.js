import React, { useEffect, useState, useReducer } from "react";

//Axios HTTP Client
//TODO: Add post functionality to api-client
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

  const initialState = {
    activeIndex: 0,
    currInput: null,
    inputMap: new Map(),
    isCompleted: false
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "next":
        return { ...state, activeIndex: state.activeIndex + 1 };
      case "prev":
        return { ...state, activeIndex: state.activeIndex - 1 };
      case "complete":
        return { ...state, isCompleted: true };
      case "back":
        return {
          ...state,
          activeIndex: 0,
          isCompleted: false
        };
      case "addInput":
        return { ...state, inputMap: action.inputMap };
      case "setCurrInput":
        return { ...state, currInput: action.currInput };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { activeIndex, currInput, inputMap, isCompleted } = state;

  // const [activeIndex, setActiveIndex] = useState(0);
  // const [inputMap, setInputMap] = useState(new Map());
  // const [isCompleted, setIsCompleted] = useState(false);
  // const [currInput, setCurrInput] = useState(null);

  //Pose animation direction
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    dispatch({
      type: "setCurrInput",
      currInput: inputMap.get(questions[activeIndex].id)
    });
  }, [activeIndex, inputMap]);

  // Handles click event on next button
  const next = () => {
    if (activeIndex < questions.length - 1) {
      dispatch({ type: "next" });
      setAnimate(false);
    } else if (activeIndex + 1 === questions.length) {
      dispatch({ type: "complete" });
      console.log(inputMap);
    }
  };

  // Handles click event on prev button
  const prev = () => {
    if (activeIndex > 0) {
      dispatch({ type: "prev" });
    }
  };

  // Handles click event on back button
  const back = () => {
    if (activeIndex > 0) {
      dispatch({ type: "back" });
    }
  };

  // Handles user interaction with radio buttons ***Change Comment make it more explicit and focused on the function***
  const handleOnChange = event => {
    const key = questions[activeIndex].id;

    if (questions[activeIndex].question_type === 3) {
      const value = event.target.value === "true";
      const added = inputMap.set(key, value);
      dispatch({ type: "setCurrInput", currInput: value });
      dispatch({ type: "addInput", inputMap: added });
    } else if (questions[activeIndex].question_type === 2) {
      const value = event.target.value;
      const added = inputMap.set(key, value);
      dispatch({ type: "setCurrInput", currInput: value });
      dispatch({ type: "addInput", inputMap: added });
    } else if (questions[activeIndex].question_type === 1) {
      const value = event.target.value;
      const added = inputMap.set(key, value);
      dispatch({ type: "setCurrInput", currInput: value });
      dispatch({ type: "addInput", inputMap: added });
    }
  };

  const sendQuestionAns = (id, config) => {
    if (quiz.review_required) {
      questions.map((question, index) => {
        console.log(questions);
        if (question.question_type === 1) {
          const value = inputMap.get(question.id);
          axios.post(
            `${ROOT_URL}/sauseranswers/`,
            {
              quiz_score: id,
              question: question.id,
              answer: value
            },
            config
          );
        } else if (question.question_type === 3) {
          const value = inputMap.get(question.id);
          axios.post(
            `${ROOT_URL}/tfuseranswers/`,
            {
              quiz_score: id,
              question: question.id,
              answer: value
            },
            config
          );
        } else if (question.question_type === 2) {
          const value = inputMap.get(question.id);
          axios.post(
            `${ROOT_URL}/mcuseranswers/`,
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
        sendQuestionAns(res.data.id, config);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Helper function to evaluate the user input against the answers and determine a score
  const compareAnsToInput = (value, key) => {
    let ansValue = answers.find(elm => {
      return elm.question === key;
    });
    if (value == ansValue.answer) {
      score = score + 1;
    }
  };
  return (
    <Quiz
      activeIndex={activeIndex}
      animate={animate}
      answer={currInput}
      answers={inputMap}
      back={back}
      handleOnChange={handleOnChange}
      handleSubmit={handleSubmit}
      isCompleted={isCompleted}
      next={next}
      prev={prev}
    />
  );
}
