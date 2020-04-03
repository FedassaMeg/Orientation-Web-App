import React, { useEffect, useReducer } from "react";

import axios from "axios";

//Utility hook for data fetching and promise resolution
import { useAsync } from "react-async";

//Local components
import {
  getQuiz,
  getQuizQuestions,
  getScores,
  getUsers,
  getUserMCAnswers,
  getUserSAAnswers,
  getUserTFAnswers,
  putScoreReview
} from "./api-admin";
import { ROOT_URL } from "../utils/constants";

//Local components
import ReviewScores from "./ReviewScores";
import PageSpinner from "../components/PageSpinner";

const rowdata = (scoreArr, userArr) => {
  let newTable = [];
  // const srted = scoreArr.filter(score => {
  //   return score.is_completed === true;
  // });
  const srted = scoreArr.reverse();
  srted.map(score => {
    const scoreId = score.id;
    const date = new Date(score.signed_date);
    const quizId = score.related_quiz.id;
    const quizTitle = score.related_quiz.title;
    const quizScore = score.score + "/" + score.related_quiz.num_questions;
    const quizScorePrcnt =
      Math.round((score.score / score.related_quiz.num_questions) * 100) + "%";
    const isReviewRequired = score.related_quiz.review_required;
    let userData;
    userArr.map(user => {
      if (score.signed_by === user.id) {
        userData = user.last_name + ", " + user.first_name;
      }
    });
    newTable.push({
      scoreId: scoreId,
      userData: userData,
      quizId: quizId,
      quizTitle: quizTitle,
      quizScore: quizScore,
      quizScorePrcnt: quizScorePrcnt,
      date: date.toDateString(),
      isReviewRequired: isReviewRequired
    });
  });
  return newTable;
};

// Async wrapper function for api calls
const getInitialData = async () => {
  try {
    const [users, scores] = await Promise.all([getUsers(), getScores()]);
    return { users: users.data, scores: scores.data };
  } catch (e) {
    throw new Error(e);
  }
};

// Async wrapper function for api calls
const getUserAnsData = async ([input]) => {
  const { quizId, scoreId } = input;
  try {
    const [tfAns, mcAns, saAns, questions, quiz] = await Promise.all([
      getUserTFAnswers(scoreId),
      getUserMCAnswers(scoreId),
      getUserSAAnswers(scoreId),
      getQuizQuestions(quizId),
      getQuiz(quizId)
    ]);
    return {
      answers: [...tfAns.data, ...mcAns.data, ...saAns.data],
      questions: questions.data,
      quiz: quiz.data
    };
  } catch (e) {
    throw new Error(e);
  }
};

const initialState = {
  input: {
    quizId: 0,
    scoreId: 0
  },
  isClicked: false,
  tableData: [],
  userAnswers: {
    quiz: {},
    questions: [],
    answers: []
  },
  isSubmitted: false,
  review: new Map()
};

export default function AdminReviewScores() {
  //State reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "setTableData":
        return {
          ...state,
          tableData: action.tableData
        };
      case "setInput":
        return {
          ...state,
          input: { quizId: action.quizId, scoreId: action.scoreId }
        };
      case "toggleClicked":
        return { ...state, isClicked: !state.isClicked };
      case "setUserAnswers":
        return {
          ...state,
          userAnswers: {
            quiz: action.quiz,
            questions: action.questions,
            answers: action.answers
          }
        };
      case "toggleSubmitted":
        return { ...state, isSubmitted: !state.isSubmitted };
      case "addReview":
        return { ...state, review: action.review };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  //State variables
  const {
    input,
    isClicked,
    tableData,
    userAnswers,
    isSubmitted,
    review
  } = state;

  const getInitialDataState = useAsync({
    promiseFn: getInitialData
  });

  const getUserAnsDataState = useAsync({
    deferFn: getUserAnsData
  });

  useEffect(() => {
    const { isSettled, data } = getInitialDataState;
    if (isSettled) {
      const tableData = rowdata(data.scores.reverse(), data.users);
      dispatch({
        type: "setTableData",
        tableData
      });
    }
  }, [getInitialDataState.isSettled, getInitialDataState.data]);

  useEffect(() => {
    if (input.quizId !== 0 || input.scoreId !== 0) {
      getUserAnsDataState.run(input);
    }
  }, [input]);

  useEffect(() => {
    const { isFulfilled, data } = getUserAnsDataState;
    if (isFulfilled) {
      dispatch({
        type: "setUserAnswers",
        quiz: data.quiz,
        questions: data.questions,
        answers: data.answers
      });
    }
  }, [getUserAnsDataState.isFulfilled]);

  //Handle review quiz button click
  const handleOnClick = event => {
    const sid = event.target.name;
    const qid = event.target.id;
    dispatch({
      type: "setInput",
      scoreId: parseInt(sid),
      quizId: parseInt(qid)
    });
    dispatch({ type: "toggleClicked" });
  };

  const back = () => {
    getInitialDataState.reload();
    dispatch({ type: "toggleClicked" });
    dispatch({ type: "toggleSubmitted" });
    dispatch({ type: "addReview", review: new Map() });
  };

  const handleCorrect = event => {
    const key = event.currentTarget.id;
    const value = true;
    const add = review.set(key, value);
    dispatch({ type: "addReview", review: add });
  };

  const handleWrong = event => {
    const key = event.currentTarget.id;
    const value = false;
    const add = review.set(key, value);
    dispatch({ type: "addReview", review: add });
  };

  const handleSubmit = event => {
    event.preventDefault();

    let arr = [];
    review.forEach((value, key) => arr.push({ key, value }));
    const score = arr.reduce((acc, item) => {
      return item.value ? acc + 1 : acc;
    }, 0);

    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    };

    //Call to update/create (PUT) new manually determined score
    putScoreReview(
      input.scoreId,
      {
        id: input.scoreId,
        score: score,
        is_completed: true,
        is_reviewed: true
      },
      config
    )
      .then(() => {
        dispatch({ type: "toggleSubmitted" });
        alert(`You scored this quiz ${score}/${userAnswers.questions.length}!`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (getInitialDataState.isPending) {
    return <PageSpinner />;
  }
  if (getInitialDataState.isRejected) {
    return (
      <div>
        <pre>{getInitialDataState.error.message}</pre>
      </div>
    );
  }

  return (
    <ReviewScores
      back={back}
      fetchState={getUserAnsDataState}
      handleCorrect={handleCorrect}
      handleOnClick={handleOnClick}
      handleSubmit={handleSubmit}
      handleWrong={handleWrong}
      isClicked={isClicked}
      isSubmitted={isSubmitted}
      questions={userAnswers.questions}
      quizId={input.quizId}
      scoreId={input.scoreId}
      tableData={tableData}
      userAnswers={userAnswers.answers}
    />
  );
}
