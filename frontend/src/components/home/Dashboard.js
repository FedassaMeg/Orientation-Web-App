/**@jsx jsx */
import { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";

//Local components
import { useUser } from "../context/UserContext";
import HandoutList from "./HandoutList";
import QuizList from "./QuizList";
import SlideList from "./SlideList";

export default function Dashboard(props) {
  const { user } = useUser();

  const initialState = {
    md1: [],
    md3: [],
    md4: [],
    md5: []
  };

  const initialQuiz = {
    qz1: [],
    qz3: [],
    qz4: []
  };

  const [state, setstate] = useState(initialState);
  const [quizzes, setQuizzes] = useState(initialQuiz);

  useEffect(() => {
    setstate({ md1: md1Arr, md3: md3Arr, md4: md4Arr, md5: md5Arr });
    setQuizzes({ qz1: qz1Arr, qz3: qz3Arr, qz4: qz4Arr });
  }, [props.slideArray, props.quizArray]);

  const sldArr = props.slideArray.filter(slide => {
    return slide.group.indexOf(user.role) !== -1;
  });

  const qzArr = props.quizArray.filter(quiz => {
    return quiz.group.indexOf(user.role) !== -1;
  });

  const md1Arr = sldArr.filter(slide => {
    return slide.module === 1;
  });
  const md3Arr = sldArr.filter(slide => {
    return slide.module === 3;
  });
  const md4Arr = sldArr.filter(slide => {
    return slide.module === 4;
  });
  const md5Arr = sldArr.filter(slide => {
    return slide.module === 5;
  });

  const qz1Arr = qzArr.filter(quiz => {
    return quiz.type === "VD";
  });
  const qz3Arr = qzArr.filter(quiz => {
    return quiz.type === "SL";
  });
  const qz4Arr = qzArr.filter(quiz => {
    return quiz.type === "HD";
  });

  const cqArr = props.compltArray.filter(quiz => {
    return quiz.is_completed;
  });

  return (
    <div css={container}>
      <div css={pageheader}>My Dashboard</div>
      <hr css={divider} />
      <div css={cardscontainer}>
        <div css={cardGroup}>
          <div css={cardTitle}>SLIDES</div>
          <SlideList
            md1={state.md1}
            md3={state.md3}
            md4={state.md4}
            md5={state.md5}
            comArray={props.comArray}
            handleOnClick={props.handleOnClick}
          />
        </div>

        <br />
        <div css={cardGroup}>
          <div css={cardTitle}>QUIZZES</div>
          <QuizList
            qzs1Arr={quizzes.qz1}
            qzs3Arr={quizzes.qz3}
            qzs4Arr={quizzes.qz4}
            compltArray={cqArr}
          />
        </div>

        <br />
        <div css={cardGroup}>
          <div css={cardTitle}>DOCUMENTS</div>
          <HandoutList />
        </div>
      </div>
      {/* <input onSubmit={onSubmit} /> */}
    </div>
  );
}

const viewheader = css`
  font-family: "Raleway", sans-serif;
  font-size: 45px;
  padding-left: 90px;
  padding-top: 10px;
  color: rgb(78, 78, 78);
  width: 100%;
  padding-bottom: 10px;
  background-color: white;
`;

const container = css`
  //height: 728px;
`;

const pageheader = css`
  ${viewheader};
`;

const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const cardscontainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  padding: 16px;
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 64px;
`;

const cardGroup = css`
  width: 30%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const cardTitle = css`
  align-self: flex-start;
  color: rgb(78, 78, 78);
  font: 24px "Roboto", san-serif;
  font-weight: 500;
  margin-bottom: 20px;
  margin-top: 20px;
`;
