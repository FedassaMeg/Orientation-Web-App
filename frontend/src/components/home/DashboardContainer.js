import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

import Dashboard from "./Dashboard";

import { ROOT_URL } from "../utils/constants";

export default function DashboardContainer() {
  const [quizArray, setQuizArray] = useState([]);
  const [compltArray, setCompltArray] = useState([]);
  const [slideArray, setSlideArray] = useState([]);
  const [comArray, setComArray] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .all([
        getQuizzes(),
        getCompletedQuizzes(),
        getSlides(),
        getCompletedSlides()
      ])
      .then(
        axios.spread((qzs, comQzs, slds, comSlds) => {
          setQuizArray(qzs.data);
          setCompltArray(comQzs.data);
          setSlideArray(slds.data);
          setComArray(comSlds.data);
          setToggle(false);
        })
      );
  }, [toggle]);

  const getQuizzes = () => {
    return axios.get(`${ROOT_URL}/quizs/`);
  };

  const getCompletedQuizzes = () => {
    return axios.get(`${ROOT_URL}/users/${user_id}/scores/`);
  };

  const getSlides = () => {
    return axios.get(`${ROOT_URL}/slides/`);
  };

  const getCompletedSlides = () => {
    return axios.get(`${ROOT_URL}/users/${user_id}/lookuptableslideusers/`);
  };

  const getUserIdfromToken = () => {
    const token = localStorage.getItem("access_token");
    const decode = jwt.decode(token);
    return decode.user_id;
  };
  const user_id = getUserIdfromToken();

  const handleOnClick = event => {
    const slideId = event.target.id;
    setToggle(true);
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    };

    axios
      .post(
        `${ROOT_URL}/lookuptableslideusers/`,
        {
          slide: slideId,
          completed: true
        },
        config
      )
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Dashboard
      quizArray={quizArray}
      compltArray={compltArray}
      slideArray={slideArray}
      comArray={comArray}
      handleOnClick={handleOnClick}
    />
  );
}
