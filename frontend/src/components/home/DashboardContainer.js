import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

import Dashboard from "./Dashboard";

const ROOT_URL = "http://localhost:8000/api";

export default function DashboardContainer() {
  const [quizArray, setQuizArray] = useState([]);
  const [compltArray, setCompltArray] = useState([]);
  const [slideArray, setSlideArray] = useState([]);
  const [comArray, setComArray] = useState([]);

  useEffect(() => {
    getQuizzes();
    getCompletedQuizzes();
    getSlides();
    getCompletedSlides();
  }, []);

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

  const getCompletedQuizzes = () => {
    axios
      .get(`${ROOT_URL}/users/${user_id}/scores/`)
      .then(res => {
        setCompltArray(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getSlides = () => {
    axios
      .get(`${ROOT_URL}/slides/`)
      .then(res => {
        setSlideArray(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getCompletedSlides = () => {
    axios
      .get(`${ROOT_URL}/users/${user_id}/lookuptableslideusers/`)
      .then(res => {
        setComArray(res.data);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const getUserIdfromToken = () => {
    const token = localStorage.getItem("token");
    const decode = jwt.decode(token);
    return decode.user_id;
  };
  const user_id = getUserIdfromToken();
  return (
    <Dashboard
      quizArray={quizArray}
      compltArray={compltArray}
      slideArray={slideArray}
      comArray={comArray}
    />
  );
}
