import React, { useState, useEffect } from "react";

import { useAsync } from "react-async";

import * as apiClient from "./api-call-home";

import axios from "axios";
import jwt from "jsonwebtoken";

import Dashboard from "./Dashboard";

import { ROOT_URL } from "../utils/constants";

const getData = async ({ user_id }) => {
  let quizzes;
  let slides;
  let completedQuizzes;
  let completedSlides;
  try {
    quizzes = await apiClient.getQuizzes(user_id);
    slides = await apiClient.getSlides(user_id);
    completedQuizzes = await apiClient.getCompletedQuizzes(user_id);
    completedSlides = await apiClient.getCompletedSlides(user_id);
  } catch (e) {
    throw new Error(e);
  }
  return { quizzes, slides, completedQuizzes, completedSlides };
};

export default function DashboardContainer() {
  const [quizArray, setQuizArray] = useState([]);
  const [compltArray, setCompltArray] = useState([]);
  const [slideArray, setSlideArray] = useState([]);
  const [comArray, setComArray] = useState([]);
  const [toggle, setToggle] = useState(false);

  const getUserIdfromToken = () => {
    const token = localStorage.getItem("access_token");
    const decode = jwt.decode(token);
    return decode.user_id;
  };

  const user_id = getUserIdfromToken();

  const { data, error, isPending, isSettled } = useAsync({
    promiseFn: getData,
    user_id
  });

  useEffect(() => {
    if (isSettled) {
      setQuizArray(data.quizzes.data);
      setSlideArray(data.slides.data);
      setComArray(data.completedSlides.data);
      setCompltArray(data.completedQuizzes.data);
    }
  }, [isSettled, toggle]);

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
        `${ROOT_URL}/completedslides/`,
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

  if (isPending) return null;
  if (error) return null;
  if (data) {
    if (quizArray === undefined) {
      return null;
    } else {
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
  }
}
