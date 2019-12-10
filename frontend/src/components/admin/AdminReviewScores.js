import React, { useState, useLayoutEffect, useEffect } from "react";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

import { find, intersectionWith, assign, cloneDeep } from "lodash";

import Card from "../components/Card";
import axios from "axios";
import queryString from "query-string";
import { Link } from "react-router-dom";
import MuiReviewScoresTable from "./MuiReviewScoresTable";
import Table from "./table/Table";
import TableHead from "./table/TableHead";
import TableBody from "./table/TableBody";
import TableRow from "./table/TableRow";
import TableCell from "./table/TableCell";

import { ROOT_URL } from "../utils/constants";
import * as apiClient from "./api-call-admin";

import * as jsPDF from "jspdf";

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
  if (!firstAttemptFinished) {
    if (getInitialDataState.isPending) {
      return <h3>Loading...</h3>;
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
    { id: "review", label: "Admin Review" },
    { id: "report", label: "Generate Report" }
  ];

  const file = event => {
    const user_id = event.target.name;
    const doc = new jsPDF();
    const user = find(userArray, { id: Number(`${user_id}`) });
    if (user !== undefined) {
      doc.text(user.first_name, 10, 10);
      doc.text(user.last_name, 25, 10);
      doc.text("Employee Quiz Scores", 10, 25);
      doc.save("scores.pdf");
      console.log(doc.output("datauristring"));
    }
  };

  console.log(getInitialDataState.data);

  return (
    <div>
      <div>
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
              {scoreArray.map((rowdata, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{rowdata.signed_by}</TableCell>
                  <TableCell align="left">
                    {rowdata.related_quiz.title}
                  </TableCell>
                  <TableCell align="center">
                    {rowdata.score}/{rowdata.related_quiz.num_questions}
                  </TableCell>
                  <TableCell align="right">
                    {rowdata.signed_date.slice(0, 19)}
                  </TableCell>
                  <TableCell align="right">
                    {rowdata.related_quiz.review_required
                      ? "Required"
                      : "Not Required"}
                  </TableCell>
                  <TableCell>
                    <button name={rowdata.id} onClick={file}>
                      Report
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  );
}
