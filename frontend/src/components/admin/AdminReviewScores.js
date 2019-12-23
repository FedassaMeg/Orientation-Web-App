import React, { useState, useLayoutEffect, useEffect } from "react";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

import * as apiClient from "./api-call-admin";

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

export default function AdminReviewScores(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false);
  const [userArray, setUserArray] = useState([]);
  const [scoreArray, setScoreArray] = useState([]);
  const [quizArray, setQuizArray] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [quizId, setQuizId] = useState(0);
  const [scoreId, setScoreId] = useState(0);

  const getInitialDataState = useAsync({
    promiseFn: getInitialData
  });

  useLayoutEffect(() => {
    if (getInitialDataState.isSettled) {
      setFirstAttemptFinished(true);
      setQuizArray(getInitialDataState.data.quizzes.data);
      setUserArray(getInitialDataState.data.users.data);
      setScoreArray(getInitialDataState.data.scores.data);
    }
  }, [getInitialDataState.isSettled]);

  useEffect(() => {
    setTableData(rowdata(scoreArray, userArray));
  }, [scoreArray, userArray]);

  const handleOnClick = e => {
    setQuizId(e.target.id);
    setScoreId(e.target.name);
    setIsClicked(true);
  };

  const back = () => {
    setIsClicked(false);
  };

  if (!firstAttemptFinished) {
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
  }

  return (
    <ReviewScores
      isClicked={isClicked}
      scoreArray={scoreArray}
      userArray={userArray}
      quizId={quizId}
      scoreId={scoreId}
      handleOnClick={handleOnClick}
      back={back}
    />
  );
}

// <Card>
//   <MuiReviewScoresTable tableData={tableData} />
// </Card>
