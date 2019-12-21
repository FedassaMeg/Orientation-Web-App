/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState, useLayoutEffect } from "react";

import axios from "axios";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

import IconButton from "@material-ui/core/IconButton";

import { MdDone, MdClear } from "react-icons/md";

//Local components
import * as apiClient from "./api-call-admin";
import { ROOT_URL } from "../utils/constants";
import Card from "../components/Card";
import Button from "../components/Button";

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

  const handleCorrect = () => {
    if (score <= questions.length) {
      setScore(score + 1);
    }
  };

  const handleWrong = () => {
    //setScore(added);
  };

  const handleSubmit = event => {
    event.preventDefault();

    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    };
    axios
      .put(
        `${ROOT_URL}/scores/${props.scoreId}`,
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
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (!firstAttemptFinished) {
    if (isPending) {
      return null;
    }
    if (isRejected) {
      return (
        <div>
          <pre>{error.message}</pre>
        </div>
      );
    }
  }
  const list = questions.map((question, index) => {
    return userAns.map(ans => {
      if (question.id == ans.question) {
        return (
          <div css={row}>
            <div css={content}>
              <div css={question}>
                <span css={qstSpan}>Question {index + 1}: </span>
                {question.question}
              </div>
              <div css={answer}>
                <span css={ansSpan}>User Answer: </span>
                {ans.short_answer}
              </div>
            </div>
            <div>
              <IconButton
                aria-label="right"
                color="primary"
                id={question.id}
                onClick={handleCorrect}
              >
                <MdDone />
              </IconButton>
              <IconButton
                aria-label="wrong"
                color="secondary"
                id={question.id}
                onClick={handleWrong}
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
        <div css={action}>
          <Button onClick={props.back}>Back</Button>
          <Button onClick={handleSubmit}>Done</Button>
        </div>
      </div>
    </Card>
  );
}

// emotion styling
const container = css`
  padding: 16px;
`;
const content = css`
  flex-basis: 600px;
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
  font-weight: 500;
  color: white;
  &:focus {
    outline: none;
  }
`;

const row = css`
  display: flex;
  flex-direction: row;
  padding: 16px;
`;

const question = css``;

const qstSpan = css`
  font-weight: 500;
`;

const answer = css``;

const ansSpan = css`
  font-weight: 500;
`;

const action = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
