import React, { useState, useLayoutEffect, useEffect } from "react";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

import * as apiClient from "./api-call-admin";
import Card from "../components/Card";
import ReviewQuiz from "./ReviewQuiz";
import Table from "./table/Table";
import TableHead from "./table/TableHead";
import TableBody from "./table/TableBody";
import TableRow from "./table/TableRow";
import TableCell from "./table/TableCell";
import MuiReviewScoresTable from "./MuiReviewScoresTable";

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

const rowdata = (scoreArr, userArr) => {
  let newTable = [];
  scoreArr.map(score => {
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

  const headCells = [
    {
      id: "name",
      label: "Employee Name"
    },
    { id: "quiz", label: "Quiz" },
    { id: "score", label: "Quiz Score" },
    {
      id: "submit",
      label: "Completed Date"
    },
    { id: "review", label: "Admin Review" }
  ];

  return (
    <div>
      {!isClicked ? (
        <Card header="Employee Quiz Scores">
          <Table>
            <TableHead>
              <TableRow>
                {headCells.map(headCell => (
                  <TableCell key={headCell.id}>{headCell.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {scoreArray.map((rowdata, index) => {
                let date = new Date(rowdata.signed_date);
                return (
                  <TableRow key={index}>
                    {userArray.map((user, index) => {
                      const userFullName =
                        user.last_name + ", " + user.first_name;
                      return (
                        rowdata.signed_by == user.id && (
                          <TableCell key={index} align="left">
                            {userFullName}
                          </TableCell>
                        )
                      );
                    })}

                    <TableCell>{rowdata.related_quiz.title}</TableCell>
                    <TableCell>
                      {rowdata.score}/{rowdata.related_quiz.num_questions}
                    </TableCell>
                    <TableCell>{date.toDateString()}</TableCell>
                    <TableCell>
                      {rowdata.related_quiz.review_required ? (
                        <button
                          id={rowdata.related_quiz.id}
                          name={rowdata.id}
                          onClick={handleOnClick}
                        >
                          Review Quiz
                        </button>
                      ) : (
                        "Not Required"
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Card>
      ) : (
        <ReviewQuiz quizId={quizId} scoreId={scoreId} back={back} />
      )}
    </div>
  );
}

// <Card>
//   <MuiReviewScoresTable tableData={tableData} />
// </Card>
