import React, { useState, useLayoutEffect, useEffect } from "react";

import axios from "axios";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

//Local components
import * as apiClient from "./api-call-admin";
import { ROOT_URL } from "../utils/constants";

//Local components
import ReviewScores from "./ReviewScores";
import MuiReviewScoresTable from "./MuiReviewScoresTable";

const rowdata = (scoreArr, userArr) => {
  let newTable = [];
  const srted = scoreArr.reverse();
  srted.map(score => {
    const date = new Date(score.signed_date);
    const quizTitle = score.related_quiz.title;
    const quizScore = score.score + "/" + score.related_quiz.num_questions;
    const isReviewRequired = score.related_quiz.review_required;
    let userData;
    userArr.map(user => {
      userData =
        score.signed_by == user.id && user.last_name + ", " + user.first_name;
    });
    newTable.push({
      userData: userData,
      quizTitle: quizTitle,
      quizScore: quizScore,
      date: date.toDateString(),
      isReviewRequired: isReviewRequired
    });
  });
  return newTable;
};

// Async wrapper function for api calls
const getInitialData = async () => {
  let quizzes;
  let users;
  let scores;
  try {
    quizzes = await apiClient.getQuizzes();
    users = await apiClient.getUsers();
    scores = await apiClient.getScores();
  } catch (e) {
    throw new Error(e);
  }
  return { quizzes, users, scores };
};

// Async wrapper function for api calls
const getUserAnsData = async ([input]) => {
  let userAns;
  let questions;
  let quiz;
  try {
    userAns = await apiClient.getUserAns(input.scoreId);
    questions = await apiClient.getQuizQuestions(input.quizId);
    quiz = await apiClient.getQuiz(input.quizId);
  } catch (e) {
    throw new Error(e);
  }
  return { userAns, questions, quiz };
};

export default function AdminReviewScores(props) {
  const [userArray, setUserArray] = useState([]);
  const [scoreArray, setScoreArray] = useState([]);
  const [quizArray, setQuizArray] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [input, setInput] = useState({
    quizId: 0,
    scoreId: 0
  });
  const [userAns, setUserAns] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(new Map());

  const getInitialDataState = useAsync({
    promiseFn: getInitialData
  });

  const getUserAnsDataState = useAsync({
    deferFn: getUserAnsData
  });

  useEffect(() => {
    if (getInitialDataState.isSettled) {
      setQuizArray(getInitialDataState.data.quizzes.data);
      setUserArray(getInitialDataState.data.users.data);
      setScoreArray(getInitialDataState.data.scores.data);
    }
  }, [getInitialDataState.isSettled]);

  useEffect(() => {
    setTableData(rowdata(scoreArray, userArray));
  }, [scoreArray, userArray]);

  useEffect(() => {
    if (input.quizId !== 0 || input.scoreId !== 0) {
      getUserAnsDataState.run(input);
    }
  }, [input]);

  useEffect(() => {
    if (getUserAnsDataState.isFulfilled) {
      setUserAns(getUserAnsDataState.data.userAns.data);
      setQuestions(getUserAnsDataState.data.questions.data);
      setQuiz(getUserAnsDataState.data.quiz.data);
    }
  }, [getUserAnsDataState.isFulfilled]);

  const handleOnClick = e => {
    const sid = e.target.name;
    const qid = e.target.id;
    setInput({
      scoreId: parseInt(sid),
      quizId: parseInt(qid)
    });
    setIsClicked(true);
  };

  const back = () => {
    setIsClicked(false);
    getInitialDataState.reload();
  };

  const handleCorrect = e => {
    if (score <= questions.length) {
      setScore(score + 1);
      const key = e.currentTarget.id;
      const value = true;
      const add = isCorrect.set(key, value);
      setIsCorrect(add);
    }
  };

  const handleWrong = e => {
    // if (score > 0) {
    //   setScore(score - 1);
    //   const key = e.currentTarget.id;
    //   const value = false;
    //   const add = isCorrect.set(key, value);
    //   setIsCorrect(add);
    // }
  };

  const handleSubmit = event => {
    event.preventDefault();
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    };
    axios
      .put(
        `${ROOT_URL}/scores/${input.scoreId}`,
        {
          id: input.scoreId,
          score: score,
          is_completed: true,
          is_reviewed: true
        },
        config
      )
      .then(res => {
        setIsSubmitted(true);
        alert(`You scored this quiz ${score}/${questions.length}!`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (getInitialDataState.isPending) {
    return null;
  }
  if (getInitialDataState.isRejected) {
    return (
      <div>
        <pre>{getInitialDataState.error.message}</pre>
      </div>
    );
  }

  return (
    <ReviewScores
      isClicked={isClicked}
      scoreArray={scoreArray}
      userArray={userArray}
      quizId={input.quizId}
      scoreId={input.scoreId}
      handleOnClick={handleOnClick}
      back={back}
      questions={questions}
      userAns={userAns}
      handleCorrect={handleCorrect}
      handleWrong={handleWrong}
      handleSubmit={handleSubmit}
      isSubmitted={isSubmitted}
      isCorrect={isCorrect}
      fetchState={getUserAnsDataState}
    />
  );
}

// <Card>
//   <MuiReviewScoresTable tableData={tableData} />
// </Card>
