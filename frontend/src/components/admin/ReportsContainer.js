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
const getScoreData = async () => {
  let scores;
  try {
    scores = await apiClient.getScores();
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
    setState(value);
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    setOpen(prevState => !prevState);
    getScoreDataState.run(state.userId);
  };

  useLayoutEffect(() => {
    if (getUserDataState.isSettled) {
      setFirstAttemptFinished(true);
      setUserArray(getUserDataState.data.users.data);
    }
  }, [getUserDataState.isSettled]);
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
      />
    </div>
  );
}
