/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { useState } from "react";

import { intersectionWith, cloneDeep, assign } from "lodash";

//Local components
import HomePanel from "./HomePanel";
import HandoutList from "./HandoutList";
import VideoList from "./VideoList";

const calcPercentage = (num1, num2) => {
  let newPercentage;
  if (num2 === 0) {
    newPercentage = "Not Applicable";
  } else {
    newPercentage = Math.round((num1 / num2) * 100);
  }
  return newPercentage;
};

export default function SlideList(props) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const csm1 = intersectionWith(
    cloneDeep(props.md1),
    props.comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const csm3 = intersectionWith(
    cloneDeep(props.md3),
    props.comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const csm4 = intersectionWith(
    cloneDeep(props.md4),
    props.comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const csm5 = intersectionWith(
    cloneDeep(props.md5),
    props.comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const csm6 = intersectionWith(
    cloneDeep(props.md6),
    props.comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const csm7 = intersectionWith(
    cloneDeep(props.md7),
    props.comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const csm8 = intersectionWith(
    cloneDeep(props.md8),
    props.comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const csm9 = intersectionWith(
    cloneDeep(props.md9),
    props.comArray,
    (i, j) => {
      return i.id === j.slide && assign(i, { completed: j.completed });
    }
  );

  const percentage1 = calcPercentage(csm1.length, props.md1.length);
  const percentage3 = calcPercentage(csm3.length, props.md3.length);
  const percentage4 = calcPercentage(csm4.length, props.md4.length);
  const percentage5 = calcPercentage(csm5.length, props.md5.length);
  const percentage6 = calcPercentage(csm6.length, props.md6.length);
  const percentage7 = calcPercentage(csm7.length, props.md7.length);
  const percentage8 = calcPercentage(csm8.length, props.md8.length);
  const percentage9 = calcPercentage(csm9.length, props.md9.length);

  return (
    <div css={container}>
      <HomePanel
        panelNumber={1}
        expanded={expanded}
        percentage={percentage1}
        handleChange={handleChange}
        title={"MODULE 1 Introduction to First Call"}
        interval={100}
        handleOnClick={props.handleOnClick}
        arr={props.md1}
        comArray={props.comArray}
      />
      <VideoList expanded={expanded} handleChange={handleChange} />
      <HandoutList expanded={expanded} handleChange={handleChange} />
      <HomePanel
        panelNumber={4}
        expanded={expanded}
        percentage={percentage3}
        handleChange={handleChange}
        title={"MODULE 3 Electronic Medical Record"}
        interval={100}
        handleOnClick={props.handleOnClick}
        arr={props.md3}
        comArray={props.comArray}
      />
      <HomePanel
        panelNumber={5}
        expanded={expanded}
        percentage={percentage4}
        handleChange={handleChange}
        title={"MODULE 4 Introduction to Hospice"}
        interval={100}
        handleOnClick={props.handleOnClick}
        arr={props.md4}
        comArray={props.comArray}
      />
      <HomePanel
        panelNumber={6}
        expanded={expanded}
        percentage={percentage5}
        handleChange={handleChange}
        title={"MODULE 5 Documentation"}
        interval={100}
        handleOnClick={props.handleOnClick}
        arr={props.md5}
        comArray={props.comArray}
      />
      <HomePanel
        panelNumber={7}
        expanded={expanded}
        percentage={percentage6}
        handleChange={handleChange}
        title={"MODULE 6 Documenting Decline"}
        interval={100}
        handleOnClick={props.handleOnClick}
        arr={props.md6}
        comArray={props.comArray}
      />
      <HomePanel
        panelNumber={8}
        expanded={expanded}
        percentage={percentage7}
        handleChange={handleChange}
        title={"MODULE 7 Symptom Management"}
        interval={100}
        handleOnClick={props.handleOnClick}
        arr={props.md7}
        comArray={props.comArray}
      />
      <HomePanel
        panelNumber={9}
        expanded={expanded}
        percentage={percentage8}
        handleChange={handleChange}
        title={"MODULE 8 Plan of Care"}
        interval={100}
        handleOnClick={props.handleOnClick}
        arr={props.md8}
        comArray={props.comArray}
      />
      <HomePanel
        panelNumber={10}
        expanded={expanded}
        percentage={percentage9}
        handleChange={handleChange}
        title={"MODULE 9 Special Programs"}
        interval={100}
        handleOnClick={props.handleOnClick}
        arr={props.md9}
        comArray={props.comArray}
      />
    </div>
  );
}

const container = css`
  width: 540px;
`;
