import React, { useState, useLayoutEffect, useEffect } from "react";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

//Axios HTTP Client
import axios from "axios";

import * as jsPDF from "jspdf";

//Local components
import * as apiClient from "./api-admin";
import { ROOT_URL } from "../utils/constants";
import Reports from "./Reports";

// Async wrapper function to fetch all users
const getUsersData = async () => {
  let users;
  try {
    users = await apiClient.getUsers();
  } catch (e) {
    throw new Error(e);
  }
  return { users };
};

// Async wrapper function to fetch user score details
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
  const [scoreArray, setScoreArray] = useState([]);
  const [userId, setUserId] = useState(0);
  const [open, setOpen] = useState(false);

  const getUserDataState = useAsync({
    promiseFn: getUsersData
  });

  const getScoreDataState = useAsync({
    deferFn: getScoreData,
    userId
  });

  useLayoutEffect(() => {
    if (getUserDataState.isSettled) {
      setFirstAttemptFinished(true);
      setUserArray(getUserDataState.data.users.data);
    }
  }, [getUserDataState.isSettled]);

  useEffect(() => {
    if (getScoreDataState.isFulfilled) {
      setScoreArray(getScoreDataState.data.scores.data);
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

  const handleOnSubmit = event => {
    event.preventDefault();
    const id = event.target.id;
    setOpen(true);
    getScoreDataState.run(id);
    setUserId(Number(id));
  };

  const handleResubmit = event => {
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

  const file = () => {
    const doc = new jsPDF();
    let newUser;
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    userArray.map(user => {
      if (user.id == userId) {
        newUser = user;
      }
    });
    console.log(doc.getFontList());
    doc.addFont("OpenSans-Regular", "Open Sans", "");
    doc.setFont("Open Sans", "");
    doc.setFontSize(16);
    doc.text(
      `${newUser.last_name.toUpperCase()}, ${newUser.first_name.toUpperCase()}`,
      10,
      10
    );
    doc.text("Quiz Scores", 10, 25);
    scoreArray.map((score, index) => {
      if (score.is_completed) {
        doc.setFontSize(12);
        doc.text(
          `${score.related_quiz.title} - Score: ${score.score}/${score.related_quiz.num_questions}`,
          10,
          40 + index * 15
        );
        doc.text(
          `Completed on: ${score.signed_date.slice(0, 10)}`,
          150,
          40 + index * 15
        );
      }
    });

    doc.save(
      `${newUser.first_name[0]}${newUser.last_name}${month}-${year}.pdf`
    );
  };

  return (
    <div>
      <Reports
        userArray={userArray}
        scoreArray={scoreArray}
        open={open}
        file={file}
        handleOnSubmit={handleOnSubmit}
        handleResubmit={handleResubmit}
      />
    </div>
  );
}
