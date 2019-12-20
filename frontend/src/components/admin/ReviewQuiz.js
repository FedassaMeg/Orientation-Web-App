/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState, useLayoutEffect } from "react";

import axios from "axios";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

import IconButton from "@material-ui/core/IconButton";

import { MdDone, MdClear } from "react-icons/md";

import * as apiClient from "./api-call-admin";
import { ROOT_URL } from "../utils/constants";
import Card from "../components/Card";

// Async wrapper function for api calls
const getUserAnsData = async ({ input }) => {
  let userAns;
  let questions;
  let quiz;
  try {
    userAns = await apiClient.getUserAns(input.scoreId);
    questions = await apiClient.getQuizQuestions(input.quizId);
    quiz = await apiClient.getQuiz(input.quizId);
  } catch (e) {
    throw new Error(e);
  }
  return { userAns, questions, quiz };
};

export default function ReviewQuiz(props) {
  const [firstAttemptFinished, setFirstAttemptFinished] = useState(false);
  const [userAns, setUserAns] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [quiz, setQuiz] = useState(null);
  const [score, setScore] = useState(0);
  const [scoreArr, setScoreArr] = useState(new Map());

  const input = {
    scoreId: props.scoreId,
    quizId: props.quizId
  };
  const { data, isSettled, isRejected, isPending, error } = useAsync({
    promiseFn: getUserAnsData,
    input
  });

  useLayoutEffect(() => {
    if (isSettled) {
      setUserAns(data.userAns.data);
      setQuestions(data.questions.data);
      setQuiz(data.quiz.data);
    }
  }, [isSettled]);

  const handleOnChangeCorrect = event => {
    const id = event.target.id;
    const value = true;

    const added = scoreArr.set(id, value);

    setScoreArr(added);
  };

  const handleOnChangeWrong = event => {
    const id = event.target.id;
    const value = false;
    const added = scoreArr.set(id, value);

    setScoreArr(added);
  };

  console.log(scoreArr);
  const handleSubmit = event => {
    event.preventDefault();

    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    };
    axios
      .put(
        `${ROOT_URL}/scores/`,
        {
          id: props.scoreId,
          score: score,
          is_completed: true,
          is_reviewed: true
        },
        config
      )
      .then(res => {
        alert("Quiz Scored!");
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (!firstAttemptFinished) {
    if (isPending) {
      return <h3>Loading...</h3>;
    }
    if (isRejected) {
      return (
        <div>
          <pre>{error.message}</pre>
        </div>
      );
    }
  }
  const list = questions.map(question => {
    return userAns.map(ans => {
      if (question.id == ans.question) {
        return (
          <div css={row}>
            <div css={question}>{question.question}</div>

            <div css={action}>
              <div css={answer}>{ans.short_answer}</div>
              <IconButton
                aria-label="right"
                color="primary"
                id={question.id}
                onClick={handleOnChangeCorrect}
              >
                <MdDone />
              </IconButton>
              <IconButton
                aria-label="wrong"
                color="secondary"
                id={question.id}
                onClick={handleOnChangeWrong}
              >
                <MdClear />
              </IconButton>
            </div>
          </div>
        );
      }
    });
  });

  return (
    <Card>
      <div css={container}>
        {list}
        <button onClick={props.back} css={backBtn}>
          Back
        </button>
        <button css={doneBtn}>Done</button>
      </div>
    </Card>
  );
}

const container = css`
  padding: 16px;
`;

const backBtn = css`
  margin: 16px;
  border: none;
  background-color: gold;
  padding: 4px 12px;
  font: 16px "Roboto", san-serif;
  color: white;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;

const doneBtn = css`
  margin: 16px;
  border: none;
  background-color: dodgerblue;
  padding: 4px 12px;
  font: 16px "Roboto", san-serif;
  color: white;
  font-weight: 500;
  &:focus {
    outline: none;
  }
`;

const row = css`
  padding: 8px;
`;

const question = css``;

const answer = css``;

const action = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
