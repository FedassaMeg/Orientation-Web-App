/*
  TODO: 
    - Get Quiz info along with related questions [axios.get(`${ROOT_URL}/quizs/${quiz.key}/questions`)] ***DONE***
    - Get Quiz info [axios.get(`${ROOT_URL}/quizs/${quiz.key}`)] ***DONE***
    - Pass quiz data to children [use props to pass response data or sanitized version of the response data] ***DONE***
    - Provide logic to determine score [  maintain score in state, update after each question is answered;
        compareAnsToScr = (value, key) => {
          if (value === state.ansArray[key - 1]) {
            scr = scr + 1;
          }
        };
        Store array with all the question answers from response data

        ] ***DONE*** 

    - Maintain state of user input [ Store answers to each question ] ***DONE***
    - Provide logic to handle next and previous ***DONE***
    - Handle Question card transitions
    - Hide prev button on first slide
    - Update page numeration ***DONE***
    - Handles post request to submit completed quiz to backend
*/

import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import axios from "axios";

//Local Components
import { ROOT_URL } from "../utils/constants";
import Quiz from "./Quiz";
import ReviewAnswers from "./ReviewAnswers";

export default function QuizContainer(props) {
  const [dataArr, setDataArr] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [inputMap, setInputMap] = useState(new Map());
  const [radioValue, setRadioValue] = useState("none");
  const [ansArr, setAnsArr] = useState([]);
  const [scr, setScr] = useState(0);
  const [quiz, setQuiz] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);
  // const [transtion, setTransition] = useState(false);

  useEffect(() => {
    axios.all([getQuiz(), getQuestionsByQuizId()]).then(
      axios.spread((qz, qts) => {
        setDataArr(qts.data);
        setQuiz(qz.data);
      })
    );

    createAnsArr(dataArr);
  }, []);

  const getQuiz = () => {
    return axios.get(`${ROOT_URL}/quizs/${props.quiz.key}`);
  };

  const getQuestionsByQuizId = () => {
    return axios.get(`${ROOT_URL}/quizs/${props.quiz.key}/questions`);
  };

  const next = () => {
    if (activeIndex < dataArr.length - 1) {
      setActiveIndex(activeIndex + 1);
      setRadioValue("none");
    } else if (activeIndex + 1 === dataArr.length) {
      setIsCompleted(true);
    } else {
      return;
    }

    console.log(activeIndex);
    console.log(isCompleted);
  };

  const prev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else {
      return;
    }
  };

  const handleOnChange = event => {
    const key = dataArr[activeIndex].id;
    const isSelected = event.target.value;
    const added = inputMap.set(key, isSelected);
    setRadioValue(isSelected);
    if (isSelected) {
      setInputMap(added);
    }
  };

  // const onEnter = () => {
  //   setTransition(true);
  // };

  // const onExit = () => {
  //   setTransition(false);
  // };

  const createAnsArr = arr => {
    let newArr = [];
    arr.map(question => {
      newArr.push({
        id: question.id,
        question: question.question
      });
    });
    setAnsArr(newArr);
  };

  // Use in handleSubmit func
  const compareAnsToScr = (value, key) => {
    if (value === ansArr[key - 1]) {
      setScr(scr + 1);
    }
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
      radioValue={radioValue}
      handleOnChange={handleOnChange}
      isCompleted={isCompleted}
    />
  );
}

// import React, { Component } from "react";
// import axios from "axios";
// import { parseInt } from "lodash";

// import Quiz from "./Quiz";
// import { ROOT_URL } from "../utils/constants";

// let scr = 0;
// export default class QuizPost extends Component {
//   constructor() {
//     super();
//     this.state = {
//       answers: new Map(),
//       questions: [],
//       ansArray: []
//     };
//   }
//   getQuestionsByQuizId = async () => {
//     try {
//       const { data } = await axios.get(
//         `${ROOT_URL}/quizs/${this.props.quiz.key}/questions`
//       );
//       return data;
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   async componentDidMount() {
//     const quizData = await this.getQuestionsByQuizId();
//     this.setState({ questions: quizData });
//     this.state.questions.map((question, index) => {
//       this.setState({ ansArray: [...this.state.ansArray, question.answer] });
//       this.setState({ answers: this.state.answers.set(index + 1, false) });
//     });

//     console.log(this.state);
//     console.log(this.props.quiz.key);
//   }
//   handleChange = event => {
//     const key = parseInt(event.target.id, 10);
//     const checked = event.target.checked;
//     const added = this.state.answers.set(key, checked);
//     if (checked) {
//       this.setState({
//         added
//       });
//     }
//     console.log(key);
//     console.log(this.state.answers);
//   };

// compareAnsToScr = (value, key) => {
//   if (value === this.state.ansArray[key - 1]) {
//     scr = scr + 1;
//   }
// };

//   handleSubmit = event => {
//     event.preventDefault();
//     const quizId = this.props.quiz.key;
//     this.state.answers.forEach(this.compareAnsToScr);
//     console.log(this.state.answers);
//     console.log(scr);
//     let config = {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`
//       }
//     };

//     axios
//       .post(
//         `${ROOT_URL}scores/`,
//         {
//           score: scr,
//           related_quiz: quizId
//         },
//         config
//       )
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   render() {
//     return (
//       <Quiz
//         quiz={this.props.quiz}
//         // questions={this.state.questions}
//         handleChange={this.handleChange}
//         handleSubmit={this.handleSubmit}
//       />
//     );
//   }
// }
