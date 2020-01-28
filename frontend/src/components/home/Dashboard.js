/**@jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";

import { intersectionWith, cloneDeep, assign } from "lodash";

//Local components
import { useContent } from "../context/ContentContext";
import QuizList from "./QuizList";
import SlideList from "./SlideList";
import HomePanelTest from "./HomePanelTest";
import { useScrollTrigger } from "@material-ui/core";

const filterByModule = (arr, module) => {
  return arr.filter(item => {
    return item.module === module;
  });
};

const calcPercentage = (num1, num2) => {
  let newPercentage;
  if (num2 === 0) {
    newPercentage = "Not Applicable";
  } else {
    newPercentage = Math.round((num1 / num2) * 100);
  }
  return newPercentage;
};

export default function Dashboard(props) {
  const { compltArray, comArray, handleOnClick } = props;

  const { content, quizzes, modules } = useContent();

  const initialSlide = {
    md1: [],
    md2: [],
    md3: [],
    md4: [],
    md5: [],
    md6: [],
    md7: [],
    md8: [],
    md9: []
  };

  const [slideModules, setSlideModules] = useState(initialSlide);
  const [completedQzsArr, setCompletedQzsArr] = useState([]);
  const [completedSldsArr, setCompletedSldsArr] = useState([]);

  useEffect(() => {
    const combinedArr = content.filter(item => {
      return quizzes.filter(quiz => {
        return item.id === quiz.content.id && assign(item, { quiz: quiz });
      });
    });

    const md1Arr = filterByModule(combinedArr, 1);
    const md2Arr = filterByModule(combinedArr, 2);
    const md3Arr = filterByModule(combinedArr, 3);
    const md4Arr = filterByModule(combinedArr, 4);
    const md5Arr = filterByModule(combinedArr, 5);
    const md6Arr = filterByModule(combinedArr, 6);
    const md7Arr = filterByModule(combinedArr, 7);
    const md8Arr = filterByModule(combinedArr, 8);
    const md9Arr = filterByModule(combinedArr, 9);

    setSlideModules({
      md1: md1Arr,
      md2: md2Arr,
      md3: md3Arr,
      md4: md4Arr,
      md5: md5Arr,
      md6: md6Arr,
      md7: md7Arr,
      md8: md8Arr,
      md9: md9Arr
    });
  }, [content, quizzes]);

  useEffect(() => {
    const cqArr = compltArray.filter(quiz => {
      return quiz.is_completed;
    });

    setCompletedQzsArr(cqArr);
    setCompletedSldsArr(comArray);
  }, [compltArray, comArray]);

  const csm1 = intersectionWith(
    cloneDeep(slideModules.md1),
    comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const csm2 = intersectionWith(
    cloneDeep(slideModules.md2),
    comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const csm3 = intersectionWith(
    cloneDeep(slideModules.md3),
    comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const csm4 = intersectionWith(
    cloneDeep(slideModules.md4),
    comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const csm5 = intersectionWith(
    cloneDeep(slideModules.md5),
    comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const csm6 = intersectionWith(
    cloneDeep(slideModules.md6),
    comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const csm7 = intersectionWith(
    cloneDeep(slideModules.md7),
    comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const csm8 = intersectionWith(
    cloneDeep(slideModules.md8),
    comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const csm9 = intersectionWith(
    cloneDeep(slideModules.md9),
    comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const percentage1 = calcPercentage(csm1.length, slideModules.md1.length);
  const percentage2 = calcPercentage(csm2.length, slideModules.md2.length);
  const percentage3 = calcPercentage(csm3.length, slideModules.md3.length);
  const percentage4 = calcPercentage(csm4.length, slideModules.md4.length);
  const percentage5 = calcPercentage(csm5.length, slideModules.md5.length);
  const percentage6 = calcPercentage(csm6.length, slideModules.md6.length);
  const percentage7 = calcPercentage(csm7.length, slideModules.md7.length);
  const percentage8 = calcPercentage(csm8.length, slideModules.md8.length);
  const percentage9 = calcPercentage(csm9.length, slideModules.md9.length);

  const homePanels = modules.map(module => {
    let moduleList;
    let percentage;
    switch (module.number) {
      case 1:
        moduleList = slideModules.md1;
        percentage = percentage1;
        break;
      case 2:
        moduleList = slideModules.md2;
        percentage = percentage2;
        break;
      case 3:
        moduleList = slideModules.md3;
        percentage = percentage3;
        break;
      case 4:
        moduleList = slideModules.md4;
        percentage = percentage4;
        break;
      case 5:
        moduleList = slideModules.md5;
        percentage = percentage5;
        break;
      case 6:
        moduleList = slideModules.md6;
        percentage = percentage6;
        break;
      case 7:
        moduleList = slideModules.md7;
        percentage = percentage7;
        break;
      case 8:
        moduleList = slideModules.md8;
        percentage = percentage8;
        break;
      case 9:
        moduleList = slideModules.md9;
        percentage = percentage9;
        break;
    }
    return (
      <div key={module.id} css={cardGroup}>
        <HomePanelTest
          header={module.title}
          number={module.number}
          moduleList={moduleList}
          percentage={percentage}
          handleOnClick={handleOnClick}
        />
      </div>
    );
  });

  return (
    <div css={container}>
      <div css={pageheader}>My Dashboard</div>
      <hr css={divider} />
      <div css={cardscontainer}>{homePanels}</div>
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
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 120px;
  margin-right: 120px;
  margin-top: 16px;
`;

const cardGroup = css`
  flex-basis: 550px;
`;
