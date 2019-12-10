import React, { useState, useLayoutEffect, useEffect } from "react";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

import * as apiClient from "./api-call-admin";
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
  const [state, setState] = useState(0);
  const [open, setOpen] = useState(false);
  const [scoreData, setScoreData] = useState([]);

  const getUserDataState = useAsync({
    promiseFn: getUsersData
  });

  let userId = state.userId;
  const getScoreDataState = useAsync({
    deferFn: getScoreData,
    userId
  });

  const handleOnChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setState(Number(value));
    setOpen(false);
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    const id = event.target.id;
    setOpen(true);
    getScoreDataState.run(id);
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
      return <h3>Loading...</h3>;
    }
    if (getUserDataState.isRejected) {
      return (
        <div>
          <pre>{getUserDataState.error.message}</pre>
        </div>
      );
    }
  }

  return (
    <div>
      <Reports
        userArray={userArray}
        handleOnChange={handleOnChange}
        open={open}
        handleOnSubmit={handleOnSubmit}
        scoreArray={scoreData}
      />
    </div>
  );
}
