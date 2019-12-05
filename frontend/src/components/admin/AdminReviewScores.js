import React, { useState, useEffect } from "react";

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

import * as jsPDF from "jspdf";

export default function AdminReviewScores(props) {
  const [userArray, setUserArray] = useState([]);
  const [scoreArray, setScoreArray] = useState([]);
  const [quizArray, setQuizArray] = useState([]);
  let values = queryString.parse(props.location.search);
  useEffect(() => {
    getUsers();
    getScores();
    getQuizzes();
  }, [values.id]);

  const getUsers = () => {
    axios
      .get(`${ROOT_URL}/users/`)
      .then(res => {
        setUserArray(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getQuizzes = () => {
    axios
      .get(`${ROOT_URL}/quizs/`)
      .then(res => {
        setQuizArray(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getScores = () => {
    axios
      .get(`${ROOT_URL}/scores/`)
      .then(res => {
        setScoreArray(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const usrsArr = userArray.map((user, index) => {
    return (
      <li key={index}>
        <Link
          to={{
            search: `?id=${user.id}`
          }}
        >
          {user.first_name}
          {"  "}
          {user.last_name}
        </Link>
      </li>
    );
  });

  const quizScores = quizArray.map((quiz, index) => {
    let quizScore = 0;
    return (
      <div key={index}>
        <div>{quiz.title}</div>
        {scoreArray.map(score => {
          quiz.id === score.related_quiz
            ? (quizScore = score.score)
            : (quizScore = quizScore);
        })}
        <div>{quizScore}</div>
      </div>
    );
  });

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
    console.log(user_id);
    const doc = new jsPDF();
    const user = find(userArray, { id: 2 });
    console.log(user);
    if (user !== undefined) {
      doc.text(user.first_name, 10, 10);
      doc.text(user.last_name, 25, 10);
      doc.text("Employee Quiz Scores", 10, 25);
      doc.save("scores.pdf");
      console.log(doc.output("datauristring"));
    }
  };

  const tableData = scoreArray.map(quiz => {});
  console.log("here");
  return (
    <div>
      <div>
        <Card header="MUI Table"></Card>
      </div>

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

      <div>
        <Card header="All Employees">
          <ul>{usrsArr}</ul>
        </Card>
      </div>
      <div>
        <Card header={values.id}>
          <ul>{quizScores}</ul>
        </Card>
      </div>
    </div>
  );
}
