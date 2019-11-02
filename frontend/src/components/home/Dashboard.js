/**@jsx jsx */
import { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";

import QuizList from "./QuizList";
import SlideList from "./SlideList";

export default function Dashboard(props) {
  const initialState = {
    md1: [],
    md3: [],
    md4: [],
    md5: []
  };
  const [state, setstate] = useState(initialState);

  useEffect(() => {
    setstate({ md1: md1Arr, md3: md3Arr, md4: md4Arr, md5: md5Arr });
  }, [props.slideArray]);

  const md1Arr = props.slideArray.filter(slide => {
    return slide.module === 1;
  });
  const md3Arr = props.slideArray.filter(slide => {
    return slide.module === 3;
  });
  const md4Arr = props.slideArray.filter(slide => {
    return slide.module === 4;
  });
  const md5Arr = props.slideArray.filter(slide => {
    return slide.module === 5;
  });

  return (
    <div>
      <div css={pageheader}>My Dashboard</div>
      <hr css={divider} />
      <div css={cardscontainer}>
        <div css={cardTitle}>SLIDES</div>
        <SlideList
          md1={state.md1}
          md3={state.md3}
          md4={state.md4}
          md5={state.md5}
          comArray={props.comArray}
        />
        <br />
        <div css={cardTitle}>QUIZZES</div>
        <QuizList quizArray={props.quizArray} compltArray={props.compltArray} />
      </div>
    </div>
  );
}

const pageheader = css`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 45px;
  padding-left: 90px;
  padding-top: 10px;
  color: rgb(78, 78, 78);
  width: 100%;
  padding-bottom: 10px;
  background-color: rgb(252, 252, 252);
`;

const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const cardscontainer = css`
  width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: whitesmoke;
  box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.15);
`;

const cardTitle = css`
  align-self: flex-start;
  color: "#252525";
  font: 20px "Open Sans", san-serif;
  font-weight: 300;
  margin-left: 80px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const accList = css`
  display: flex;
`;

const listSection = css`
  font-size: 16px;
  font-weight: 400;
  padding-top: 8px;
  padding-left: 36px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const listRight = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const check = css`
  margin-right: 16px;
  padding-bottom: 4px;
  color: green;
`;
const cancel = css`
  margin-right: 16px;
  padding-bottom: 4px;
  color: red;
`;
const list = css`
  padding: 0;
`;
