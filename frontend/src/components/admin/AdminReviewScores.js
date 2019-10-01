import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import queryString from "query-string";
import { Link } from "react-router-dom";

const ROOT_URL = "http://localhost:8000/api";

export default function AdminReviewScores(props) {
  const [userArray, setUserArray] = useState([]);
  const [scoreArray, setScoreArray] = useState([]);
  const [quizArray, setQuizArray] = useState([]);
  let values = queryString.parse(props.location.search);
  useEffect(() => {
    getUsers();
    getScores();
    getQuizzes();
  }, []);

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
      .get(`${ROOT_URL}/users/${values.id}/scores/`)
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
  return (
    <div>
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
