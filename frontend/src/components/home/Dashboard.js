/**@jsx jsx */
import { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import { MdCheckCircle, MdCancel } from "react-icons/md";

import Card from "../components/Card";
import Accordion from "../components/Accordion";
import ListItem from "./ListItem";

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

  // const quizCompleted = props.compltArray;
  // const quizProgress = props.quizArray.map(quiz => {
  //   let isCompleted = false;
  //   return (
  //     <div css={listSection}>
  //       <div css={listRight}>
  //         {quizCompleted.map(score => {
  //           quiz.id === score.related_quiz
  //             ? (isCompleted = true)
  //             : (isCompleted = isCompleted);
  //         })}
  //         {isCompleted ? (
  //           <div css={check}>
  //             <MdCheckCircle />
  //           </div>
  //         ) : (
  //           <div css={cancel}>
  //             <MdCancel />
  //           </div>
  //         )}

  //         <div css={list}>{quiz.title}</div>
  //       </div>
  //     </div>
  //   );
  // });
  console.log(state);
  return (
    <div>
      <div css={pageheader}>My Dashboard</div>
      <hr css={divider} />
      <div css={cardscontainer}>
        <Card header="Slides">
          <Accordion>
            <div label="Module 1">
              <ListItem arr={state.md1} comArray={props.comArray} />
            </div>
            <div label="Module 3">
              <ListItem arr={state.md3} comArray={props.comArray} />
            </div>
            <div label="Module 4" css={accList}>
              <ListItem arr={state.md4} comArray={props.comArray} />
            </div>
            <div label="Module 5" css={accList}>
              <ListItem arr={state.md5} comArray={props.comArray} />
            </div>
          </Accordion>
        </Card>
        <Card header="Quizzes">
          {/* <Accordion>
            <div label="Videos">{quizProgress}</div>
            <div label="Slides">{quizProgress}</div>
            <div label="Handouts">{quizProgress}</div>
          </Accordion> */}
        </Card>
      </div>
    </div>
  );
}

const pageheader = css`
  font-family: "Noto Sans JP", sans-serif;
  font-size: 45px;
  padding-left: 90px;
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
  justify-content: center;
  flex-wrap: 1;
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
