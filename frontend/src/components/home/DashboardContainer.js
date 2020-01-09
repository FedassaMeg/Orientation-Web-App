import React, { useState, useEffect } from "react";

import { useAsync } from "react-async";

import axios from "axios";

//Local components
import * as apiClient from "./api-home";
import { ROOT_URL } from "../utils/constants";
import { useUser } from "../context/UserContext";
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
  const user_id = user.id;

  const [compltArray, setCompltArray] = useState([]);
  const [comArray, setComArray] = useState([]);
  const [toggle, setToggle] = useState(false);

  const {
    data,
    error,
    isSettled,
    isPending,
    isRejected,
    isFulfilled
  } = useAsync({
    watch: toggle,
    promiseFn: getData,
    user_id
  });

  useEffect(() => {
    if (isSettled) {
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
  if (isRejected) return <pre>{error.message}</pre>;

  return (
    <Dashboard
      compltArray={compltArray}
      comArray={comArray}
      handleOnClick={handleOnClick}
    />
  );
}
