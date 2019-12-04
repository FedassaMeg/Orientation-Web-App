import React, { useState, useEffect } from "react";
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

  const usrsArr = userArray.map(user => {
    return (
      <li>
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

  const quizScores = quizArray.map(quiz => {
    let quizScore = 0;
    return (
      <div>
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
    { id: "review", label: "Admin Review" }
  ];
  const tableData = [
    {
      name: "First User",
      quiz: "HIPPA",
      quiz_score: "85%",
      completed_date: "12/02/2019",
      admin_review: "Not Required"
    },
    {
      name: "First User",
      quiz: "HIPPA",
      quiz_score: "85%",
      completed_date: "12/02/2019",
      admin_review: "Not Required"
    },
    {
      name: "First User",
      quiz: "HIPPA",
      quiz_score: "85%",
      completed_date: "12/02/2019",
      admin_review: "Not Required"
    },
    {
      name: "First User",
      quiz: "HIPPA",
      quiz_score: "85%",
      completed_date: "12/02/2019",
      admin_review: "Not Required"
    },
    {
      name: "First User",
      quiz: "HIPPA",
      quiz_score: "85%",
      completed_date: "12/02/2019",
      admin_review: "Not Required"
    },
    {
      name: "First User",
      quiz: "HIPPA",
      quiz_score: "85%",
      completed_date: "12/02/2019",
      admin_review: "Not Required"
    }
  ];
  return (
    <div>
      <div>
        <Card header="MUI Table">
          <MuiReviewScoresTable />
        </Card>
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
              {tableData.map((rowdata, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{rowdata.name}</TableCell>
                  <TableCell align="left">{rowdata.quiz}</TableCell>
                  <TableCell align="center">{rowdata.quiz_score}</TableCell>
                  <TableCell align="right">{rowdata.completed_date}</TableCell>
                  <TableCell align="right">{rowdata.admin_review}</TableCell>
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
