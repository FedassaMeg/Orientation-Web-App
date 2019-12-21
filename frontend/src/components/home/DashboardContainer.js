import React, { useState, useEffect } from "react";

import { useAsync } from "react-async";

import axios from "axios";

//Local components
import * as apiClient from "./api-home";
import { ROOT_URL } from "../utils/constants";
import { useUser } from "../context/UserContext";
import Dashboard from "./Dashboard";

const getData = async ({ user_id }) => {
  let quizzes;
  let slides;
  let completedQuizzes;
  let completedSlides;
  try {
    quizzes = await apiClient.getQuizzes();
    slides = await apiClient.getSlides();
    completedQuizzes = await apiClient.getCompletedQuizzes(user_id);
    completedSlides = await apiClient.getCompletedSlides(user_id);
  } catch (e) {
    throw new Error(e);
  }
  return { quizzes, slides, completedQuizzes, completedSlides };
};

export default function DashboardContainer() {
  const { user } = useUser();

  const [quizArray, setQuizArray] = useState([]);
  const [compltArray, setCompltArray] = useState([]);
  const [slideArray, setSlideArray] = useState([]);
  const [comArray, setComArray] = useState([]);
  const [toggle, setToggle] = useState(false);

  const user_id = user.id;

  const { data, error, isPending, isSettled, isFulfilled } = useAsync({
    watch: toggle,
    promiseFn: getData,
    user_id
  });

  useEffect(() => {
    if (isSettled) {
      setQuizArray(data.quizzes.data);
      setSlideArray(data.slides.data);
      setCompltArray(data.completedQuizzes.data);
    }
  }, [isSettled]);

  useEffect(() => {
    if (isSettled) {
      setComArray(data.completedSlides.data);
    }
  }, [isSettled, toggle]);

  //Handle api post request for slide links that have been clicked on
  const handleOnClick = event => {
    const slideId = event.target.id;

    setToggle(prevState => !prevState);

    const config = {
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
  if (isFulfilled) {
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
  return null;
}
