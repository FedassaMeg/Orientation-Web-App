/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";

//Local components
import { useContent } from "../context/ContentContext";
import QuizList from "./QuizList";
import SlideList from "./SlideList";

const filterByModule = (arr, module) => {
  return arr.filter(item => {
    return item.module === module;
  });
};

const filterByType = (arr, type) => {
  return arr.filter(item => {
    return item.type === type;
  });
};

export default function Dashboard(props) {
  const { compltArray, comArray, handleOnClick } = props;

  const { slides, quizzes } = useContent();

  const initialSlide = {
    md1: [],
    md3: [],
    md4: [],
    md5: [],
    md6: [],
    md7: [],
    md8: [],
    md9: []
  };

  const initialQuiz = {
    vds: [],
    slds: [],
    hnd: []
  };

  const [slideModules, setSlideModules] = useState(initialSlide);
  const [quizModules, setQuizModules] = useState(initialQuiz);
  const [completedQzsArr, setCompletedQzsArr] = useState([]);
  const [completedSldsArr, setCompletedSldsArr] = useState([]);

  useEffect(() => {
    const md1Arr = filterByModule(slides, 1);
    const md3Arr = filterByModule(slides, 3);
    const md4Arr = filterByModule(slides, 4);
    const md5Arr = filterByModule(slides, 5);
    const md6Arr = filterByModule(slides, 6);
    const md7Arr = filterByModule(slides, 7);
    const md8Arr = filterByModule(slides, 8);
    const md9Arr = filterByModule(slides, 9);
    const vdsArr = filterByType(quizzes, "VD");
    const sldsArr = filterByType(quizzes, "SL");
    const hndArr = filterByType(quizzes, "HD");

    setSlideModules({
      md1: md1Arr,
      md3: md3Arr,
      md4: md4Arr,
      md5: md5Arr,
      md6: md6Arr,
      md7: md7Arr,
      md8: md8Arr,
      md9: md9Arr
    });
    setQuizModules({ vds: vdsArr, slds: sldsArr, hnd: hndArr });
  }, [slides, quizzes]);

  useEffect(() => {
    const cqArr = compltArray.filter(quiz => {
      return quiz.is_completed;
    });

    setCompletedQzsArr(cqArr);
    setCompletedSldsArr(comArray);
  }, [compltArray, comArray]);

  return (
    <div css={container}>
      <div css={pageheader}>My Dashboard</div>
      <hr css={divider} />
      <div css={cardscontainer}>
        <div css={cardGroup}>
          <div css={cardTitle}>PowerPoints/Videos/Handouts</div>
          <SlideList
            md1={slideModules.md1}
            md3={slideModules.md3}
            md4={slideModules.md4}
            md5={slideModules.md5}
            md6={slideModules.md6}
            md7={slideModules.md7}
            md8={slideModules.md8}
            md9={slideModules.md9}
            comArray={completedSldsArr}
            handleOnClick={handleOnClick}
          />
        </div>
        <br />
        <div css={cardGroup}>
          <div css={cardTitle}>Module Quizzes</div>
          <QuizList
            qzs1Arr={quizModules.vds}
            qzs3Arr={quizModules.slds}
            qzs4Arr={quizModules.hnd}
            compltArray={completedQzsArr}
          />
        </div>
      </div>
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
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 16px;
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
  color: rgb(0, 0, 0, 0.6);
  font: 24px "Roboto Condensed", san-serif;
  font-weight: 500;
  margin-bottom: 20px;
  margin-top: 20px;
`;
