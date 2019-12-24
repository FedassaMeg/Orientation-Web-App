import React, { useState, useLayoutEffect, useEffect } from "react";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

//Axios HTTP Client
import axios from "axios";

import * as apiClient from "./api-call-admin";
import { ROOT_URL } from "../utils/constants";
import Reports from "./Reports";

// Async wrapper function for api calls
const getUsersData = async () => {
  let users;
  try {
    users = await apiClient.getUsers();
  } catch (e) {
    throw new Error(e);
  }
  return { users };
};

// Async wrapper function for api calls
const getScoreData = async userId => {
  let scores;
  try {
    scores = await apiClient.getUserScores(userId);
  } catch (e) {
    throw new Error(e);
  }
  return { scores };
};

export default function ReportsContainer() {
  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false);
  const [userArray, setUserArray] = useState([]);
  const [userId, setUserId] = useState(0);
  const [open, setOpen] = useState(false);
  const [scoreData, setScoreData] = useState([]);

  const getUserDataState = useAsync({
    promiseFn: getUsersData
  });

  const getScoreDataState = useAsync({
    deferFn: getScoreData,
    userId
  });

  const handleOnSubmit = event => {
    event.preventDefault();
    const id = event.target.id;
    setOpen(true);
    getScoreDataState.run(id);
    setUserId(Number(id));
  };

  useLayoutEffect(() => {
    if (getUserDataState.isSettled) {
      setFirstAttemptFinished(true);
      setUserArray(getUserDataState.data.users.data);
    }
  }, [getUserDataState.isSettled]);

  useEffect(() => {
    if (getScoreDataState.isFulfilled) {
      setScoreData(getScoreDataState.data.scores.data);
    }
  }, [getScoreDataState.isFulfilled]);

  if (!firstAttemptFinished) {
    if (getUserDataState.isPending) {
      return null;
    }
    if (getUserDataState.isRejected) {
      return (
        <div>
          <pre>{getUserDataState.error.message}</pre>
        </div>
      );
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    const quizScoreId = event.target.id;
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    };

    axios
      .put(
        `${ROOT_URL}/scores/${quizScoreId}`,
        {
          is_completed: false
        },
        config
      )
      .then(res => {
        console.log(res.data);
        alert("User will be prompted to re-take test!");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <Reports
        userArray={userArray}
        open={open}
        handleOnSubmit={handleOnSubmit}
        handleSubmit={handleSubmit}
        scoreArray={scoreData}
        userId={userId}
      />
    </div>
  );
}
