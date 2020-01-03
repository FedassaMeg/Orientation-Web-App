import React, { useState, useEffect } from "react";

import { useAsync } from "react-async";

import axios from "axios";

//Local components
import * as apiClient from "./api-home";
import { ROOT_URL } from "../utils/constants";
import { useUser } from "../context/UserContext";
import { useContent } from "../context/ContentContext";
import Dashboard from "./Dashboard";

const getData = async ({ user_id }) => {
  let completedQuizzes;
  let completedSlides;
  try {
    completedQuizzes = await apiClient.getCompletedQuizzes(user_id);
    completedSlides = await apiClient.getCompletedSlides(user_id);
  } catch (e) {
    throw new Error(e);
  }
  return { completedQuizzes, completedSlides };
};

export default function DashboardContainer() {
  const { user } = useUser();
  const { data } = useContent();

  const [quizArray, setQuizArray] = useState([]);
  const [compltArray, setCompltArray] = useState([]);
  const [slideArray, setSlideArray] = useState([]);
  const [comArray, setComArray] = useState([]);
  const [toggle, setToggle] = useState(false);

  const user_id = user.id;

  const getDataState = useAsync({
    watch: toggle,
    promiseFn: getData,
    user_id
  });

  useEffect(() => {
    if (getDataState.isSettled) {
      setQuizArray(data.quizzes.data);
      setSlideArray(data.slides.data);
      setCompltArray(getDataState.data.completedQuizzes.data);
    }
  }, [getDataState.isSettled]);

  useEffect(() => {
    if (getDataState.isSettled) {
      setComArray(getDataState.data.completedSlides.data);
    }
  }, [getDataState.isSettled, toggle]);

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

  if (getDataState.isPending) return null;
  if (getDataState.error) return null;
  if (getDataState.isFulfilled) {
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
