import React, { useEffect, useState } from "react";
import axios from "axios";
import forEach from "lodash/forEach";

import { ROOT_URL } from "../components/utils/constants";
import ViewWrapper from "./ViewWrapper";
import QuizContainer from "../components/quiz/QuizContainer";

export default function QuizPage({ match }) {
  // const [qzs, setQzs] = useState();
  // const [quiz, setQuiz] = useState({});
  // useEffect(() => {
  //   getQuizs();
  // }, []);
  // const getQuizInfo = url => {
  //   if (qzs !== undefined) {
  //     const quizObj = forEach(qzs, obj => {
  //       if (obj.url_value == url) {
  //         return obj;
  //       }
  //     });
  //     setQuiz(quizObj);
  //   }
  // };

  // getQuizInfo(match.params.id);
  // const getQuizs = async () => {
  //   const res = await axios.get(`${ROOT_URL}/quizs`);
  //   setQzs(res.data);
  // };

  return (
    <ViewWrapper>
      <QuizContainer match={match} />
    </ViewWrapper>
  );
}
