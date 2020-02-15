import React, { useState, useEffect } from "react";

import axios from "axios";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

//Local components
import * as apiClient from "./api-admin";
import { ROOT_URL } from "../utils/constants";

//Local components
import ReviewScores from "./ReviewScores";
import PageSpinner from "../components/PageSpinner";

const rowdata = (scoreArr, userArr) => {
  let newTable = [];
  // const srted = scoreArr.filter(score => {
  //   return score.is_completed === true;
  // });
  const srted = scoreArr.reverse();
  srted.map(score => {
    const scoreId = score.id;
    const date = new Date(score.signed_date);
    const quizId = score.related_quiz.id;
    const quizTitle = score.related_quiz.title;
    const quizScore = score.score + "/" + score.related_quiz.num_questions;
    const quizScorePrcnt =
      Math.round((score.score / score.related_quiz.num_questions) * 100) + "%";
    const isReviewRequired = score.related_quiz.review_required;
    let userData;
    userArr.map(user => {
      if (score.signed_by === user.id) {
        userData = user.last_name + ", " + user.first_name;
      }
    });
    newTable.push({
      scoreId: scoreId,
      userData: userData,
      quizId: quizId,
      quizTitle: quizTitle,
      quizScore: quizScore,
      quizScorePrcnt: quizScorePrcnt,
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
  let userTFAnswers;
  let userMCAnswers;
  let userSAAnswers;
  let questions;
  let quiz;
  try {
    userTFAnswers = await apiClient.getUserTFAnswers(input.scoreId);
    userMCAnswers = await apiClient.getUserMCAnswers(input.scoreId);
    userSAAnswers = await apiClient.getUserSAAnswers(input.scoreId);
    questions = await apiClient.getQuizQuestions(input.quizId);
    quiz = await apiClient.getQuiz(input.quizId);
  } catch (e) {
    throw new Error(e);
  }
  return { userTFAnswers, userMCAnswers, userSAAnswers, questions, quiz };
};

export default function AdminReviewScores(props) {
  const [userArray, setUserArray] = useState([]);
  const [scoreArray, setScoreArray] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [input, setInput] = useState({
    quizId: 0,
    scoreId: 0
  });
  const [userTFAnswers, setUserTFAnswers] = useState([]);
  const [userMCAnswers, setUserMCAnswers] = useState([]);
  const [userSAAnswers, setUserSAAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(new Map());

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerRage] = useState(10);

  const getInitialDataState = useAsync({
    promiseFn: getInitialData
  });

  const getUserAnsDataState = useAsync({
    deferFn: getUserAnsData
  });

  useEffect(() => {
    if (getInitialDataState.isSettled) {
      setUserArray(getInitialDataState.data.users.data);
      setScoreArray(getInitialDataState.data.scores.data);
    }
  }, [getInitialDataState.isSettled, getInitialDataState.data]);

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
      setUserTFAnswers(getUserAnsDataState.data.userTFAnswers.data);
      setUserMCAnswers(getUserAnsDataState.data.userMCAnswers.data);
      setUserSAAnswers(getUserAnsDataState.data.userSAAnswers.data);
      setQuestions(getUserAnsDataState.data.questions.data);
      setQuiz(getUserAnsDataState.data.quiz.data);
    }
  }, [getUserAnsDataState.isFulfilled]);

  const handleOnClick = event => {
    const sid = event.target.name;
    const qid = event.target.id;
    setInput({
      scoreId: parseInt(sid),
      quizId: parseInt(qid)
    });
    setIsClicked(true);
  };

  const back = () => {
    setIsClicked(false);
    getInitialDataState.reload();
    setIsSubmitted(false);
  };

  const handleCorrect = event => {
    if (score <= questions.length) {
      setScore(score + 1);
      const key = event.currentTarget.id;
      const value = true;
      const add = isCorrect.set(key, value);
      setIsCorrect(add);
    }
  };

  const handleWrong = event => {
    if (score > 0) {
      setScore(score - 1);
      const key = event.currentTarget.id;
      const value = false;
      const add = isCorrect.set(key, value);
      setIsCorrect(add);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerRage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);

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
    return <PageSpinner />;
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
      userTFAnswers={userTFAnswers}
      userMCAnswers={userMCAnswers}
      userSAAnswers={userSAAnswers}
      handleCorrect={handleCorrect}
      handleWrong={handleWrong}
      handleSubmit={handleSubmit}
      isSubmitted={isSubmitted}
      isCorrect={isCorrect}
      fetchState={getUserAnsDataState}
      page={page}
      rowsPerPage={rowsPerPage}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
      emptyRows={emptyRows}
      tableData={tableData}
    />
  );
}
//<MuiReviewScoresTable tableData={tableData} />
