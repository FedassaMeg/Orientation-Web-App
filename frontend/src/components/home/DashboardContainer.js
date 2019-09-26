import React, { useState, useEffect } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";

const ROOT_URL = "http://localhost:8000/api";

export default function DashboardContainer() {
  const [quizArray, setQuizArray] = useState([]);

  useEffect(() => {
    getQuizzes();
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

  return <Dashboard quizArray={quizArray} />;
}
