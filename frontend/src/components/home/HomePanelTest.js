/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { useState } from "react";

import { Link } from "react-router-dom";

import {
  FaCheck,
  FaFilePowerpoint,
  FaClipboardList,
  FaClipboardCheck,
  FaVideo,
  FaFileAlt
} from "react-icons/fa";

import Collapse from "@material-ui/core/Collapse";

//Local components
import PanelHead from "../components/PanelHead";
import Card from "../components/Card";

export default function HomePanelTest(props) {
  const { header, number, moduleList, percentage, handleOnClick } = props;
  const [expand, setExpand] = useState(false);
  const [quiz, setQuiz] = useState(false);
  const [slide, setSlide] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };
  const handleQuiz = () => {
    setQuiz(!quiz);
  };
  const handleSlide = () => {
    setSlide(!slide);
  };

  const contentList = moduleList.map(item => {
    return (
      <div key={item.id} css={list}>
        <div css={listHeading}>
          <div css={heading}>{item.title}</div>
        </div>
        <div css={linkGrps}>
          {item.content_type === 1 ? (
            <a
              id={item.id}
              href={item.url_value}
              target="blank"
              css={itemGrp}
              onClick={handleOnClick}
            >
              {slide ? (
                <FaCheck size={18} color="green" />
              ) : (
                <FaFilePowerpoint size={18} color="coral" />
              )}
              <div css={items}>Slide</div>
            </a>
          ) : item.content_type === 2 ? (
            <Link
              to={`video/${item.url_value}`}
              id={item.id}
              css={itemGrp}
              onClick={handleOnClick}
            >
              {slide ? (
                <FaCheck size={18} color="green" />
              ) : (
                <FaVideo size={18} color="coral" />
              )}
              <div css={items}>Video</div>
            </Link>
          ) : (
            <Link
              to={`handout/${item.url_value}`}
              id={item.id}
              css={itemGrp}
              onClick={handleOnClick}
            >
              {slide ? (
                <FaCheck size={18} color="green" />
              ) : (
                <FaFileAlt size={18} color="coral" />
              )}
              <div css={items}>Handout</div>
            </Link>
          )}
          {item.quiz ? (
            <Link
              to={`quiz/${item.quiz.url_value}`}
              id={item.id}
              css={itemGrp2}
              onClick={handleQuiz}
            >
              {quiz ? (
                <FaClipboardCheck size={18} color="green" />
              ) : (
                <FaClipboardList size={18} color="dodgerblue" />
              )}
              <div css={items}>Quiz</div>
            </Link>
          ) : (
            <div css={placeholder} />
          )}
        </div>
      </div>
    );
  });

  return (
    <Card>
      <div css={container}>
        <PanelHead
          expand={expand}
          header={header}
          module={number}
          percentage={percentage}
          handleOnClick={handleExpand}
        />
        <Collapse in={expand}>
          <div css={content}>{contentList}</div>
        </Collapse>
      </div>
    </Card>
  );
}
const heading = css``;

const container = css`
width: 100%
  display: flex;
  flex-direction: column;
`;

const items = css`
  font: 14px "Open Sans", san-serif;
  color: #777;
  margin-left: 10px;
`;

const itemGrp = css`
  flex-basis: 90px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: 16px;
  text-decoration: none;
  color: grey;
  &:link {
    text-decoration: none;
    color: grey;
  }
  &:visited {
    text-decoration: none;
    color: grey;
  }
  &:hover {
    text-decoration: none;
    color: #289086;
  }
  &:active {
    text-decoration: none;
    color: grey;
  }
`;

const placeholder = css`
  width: 69px;
`;

const itemGrp2 = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: grey;
  &:link {
    text-decoration: none;
    color: grey;
  }
  &:visited {
    text-decoration: none;
    color: grey;
  }
  &:hover {
    text-decoration: none;
    color: #289086;
  }
  &:active {
    text-decoration: none;
    color: grey;
  }
`;

const linkGrps = css`
  flex-basis: 164px;
  display: flex;
  flex-direction: row;
`;

const content = css`
  color: #777;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 24px;
`;

const listHeading = css`
  margin-right: 32px;
  flex-basis: 210px;
`;

const list = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font: 14px "Open Sans", sans-serif;
  padding: 8px;
  width: 100%;
`;
