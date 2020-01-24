/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { useState } from "react";

import { MdExpandLess, MdExpandMore } from "react-icons/md";

import {
  FaCheck,
  FaFilePowerpoint,
  FaClipboardList,
  FaClipboardCheck
} from "react-icons/fa";

import Collapse from "@material-ui/core/Collapse";

import { useSpring, animated } from "react-spring";

//Local components
import PanelHead from "../components/PanelHead";
import Card from "../components/Card";

export default function HomePanelTest() {
  const [expand, setExpand] = useState(false);
  const [quiz, setQuiz] = useState(false);
  const [slide, setSlide] = useState(false);

  const [spring, set] = useSpring(() => ({
    transform: "perspective(600px) rotate(0turn)",
    opacity: 1
  }));

  const handleOnClick = () => {
    setExpand(!expand);
  };
  const handleQuiz = () => {
    setQuiz(!quiz);
  };
  const handleSlide = () => {
    setSlide(!slide);
  };

  return (
    <div css={page}>
      <Card>
        <div css={container}>
          <PanelHead
            expand={expand}
            header="Introduction to Hospice"
            module={4}
            percentage={60}
            handleOnClick={handleOnClick}
          />
          <Collapse in={expand}>
            <div css={content}>
              <div css={list}>
                <div css={listHeading}>
                  <div css={heading}>Introduction to Hospice</div>
                </div>
                <div css={linkGrps}>
                  <button css={itemGrp} onClick={handleSlide}>
                    {slide ? (
                      <FaCheck size={18} color="green" />
                    ) : (
                      <FaFilePowerpoint size={18} color="coral" />
                    )}
                    <div css={items}>Slide</div>
                  </button>
                  <button css={itemGrp2} onClick={handleQuiz}>
                    {quiz ? (
                      <FaClipboardCheck size={18} color="green" />
                    ) : (
                      <FaClipboardList size={18} color="dodgerblue" />
                    )}
                    <div css={items}>Quiz</div>
                  </button>
                </div>
              </div>
              <div css={list}>
                <div css={listHeading}>
                  <div css={heading}>Admission Handbook</div>
                </div>
                <div css={linkGrps}>
                  <button css={itemGrp}>
                    <FaFilePowerpoint size={18} color="coral" />
                    <div css={items}>Slide</div>
                  </button>
                  <button css={itemGrp2}>
                    <FaClipboardList size={18} color="dodgerblue" />
                    <div css={items}>Quiz</div>
                  </button>
                </div>
              </div>
              <div css={list}>
                <div css={listHeading}>
                  <div css={heading}>Hospice in Care Facilities</div>
                </div>
                <div css={linkGrps}>
                  <button css={itemGrp}>
                    <FaFilePowerpoint size={18} color="coral" />
                    <div css={items}>Slide</div>
                  </button>
                  <button css={itemGrp2}>
                    <FaClipboardList size={18} color="dodgerblue" />
                    <div css={items}>Quiz</div>
                  </button>
                </div>
              </div>
              <div css={list}>
                <div css={listHeading}>
                  <div css={heading}>Patient's Rights</div>
                </div>
                <div css={linkGrps}>
                  <button css={itemGrp}>
                    <FaFilePowerpoint size={18} color="coral" />
                    <div css={items}>Slide</div>
                  </button>
                  <button css={itemGrp2}>
                    <FaClipboardList size={18} color="dodgerblue" />
                    <div css={items}>Quiz</div>
                  </button>
                </div>
              </div>
              <div css={list}>
                <div css={listHeading}>
                  <div css={heading}>Case Study</div>
                </div>
                <div css={linkGrps}>
                  <button css={itemGrp}>
                    <FaFilePowerpoint size={18} color="coral" />
                    <div css={items}>Slide</div>
                  </button>
                  <button css={itemGrp2}>
                    <FaClipboardList size={18} color="dodgerblue" />
                    <div css={items}>Quiz</div>
                  </button>
                </div>
              </div>
              <div css={list}>
                <div css={listHeading}>
                  <div css={heading}>Fall Prevention and Post Fall Visit</div>
                </div>
                <div css={linkGrps}>
                  <button css={itemGrp}>
                    <FaFilePowerpoint size={18} color="coral" />
                    <div css={items}>Slide</div>
                  </button>
                  <button css={itemGrp2}>
                    <FaClipboardList size={18} color="dodgerblue" />
                    <div css={items}>Quiz</div>
                  </button>
                </div>
              </div>
              <div css={list}>
                <div css={listHeading}>
                  <div css={heading}>Communication Techniques</div>
                </div>
                <div css={linkGrps}>
                  <button css={itemGrp}>
                    <FaFilePowerpoint size={18} color="coral" />
                    <div css={items}>Slide</div>
                  </button>
                  <button css={itemGrp2}>
                    <FaClipboardList size={18} color="dodgerblue" />
                    <div css={items}>Quiz</div>
                  </button>
                </div>
              </div>
              <div css={list}>
                <div css={listHeading}>
                  <div css={heading}>Role of the IDG</div>
                </div>
                <div css={linkGrps}>
                  <button css={itemGrp}>
                    <FaFilePowerpoint size={18} color="coral" />
                    <div css={items}>Slide</div>
                  </button>
                  <button css={itemGrp2}>
                    <FaClipboardList size={18} color="dodgerblue" />
                    <div css={items}>Quiz</div>
                  </button>
                </div>
              </div>
              <div css={list}>
                <div css={listHeading}>
                  <div css={heading}>IDG Experience Model</div>
                </div>
                <div css={linkGrps}>
                  <button css={itemGrp}>
                    <FaFilePowerpoint size={18} color="coral" />
                    <div css={items}>Slide</div>
                  </button>
                  <button css={itemGrp2}>
                    <FaClipboardList size={18} color="dodgerblue" />
                    <div css={items}>Quiz</div>
                  </button>
                </div>
              </div>
              <div css={list}>
                <div css={listHeading}>
                  <div css={heading}>Duties of the Hospice Aide</div>
                </div>
                <div css={linkGrps}>
                  <button css={itemGrp}>
                    <FaFilePowerpoint size={18} color="coral" />
                    <div css={items}>Slide</div>
                  </button>
                  <button css={itemGrp2}>
                    <FaClipboardList size={18} color="dodgerblue" />
                    <div css={items}>Quiz</div>
                  </button>
                </div>
              </div>
              <div css={list}>
                <div css={listHeading}>
                  <div css={heading}>Self Care and Care Assignment</div>
                </div>
                <div css={linkGrps}>
                  <button css={itemGrp}>
                    <FaFilePowerpoint size={18} color="coral" />
                    <div css={items}>Slide</div>
                  </button>
                  <button css={itemGrp2}>
                    <FaClipboardList size={18} color="dodgerblue" />
                    <div css={items}>Quiz</div>
                  </button>
                </div>
              </div>
              <div css={list}>
                <div css={listHeading}>
                  <div css={heading}>Discharges, Revocations and Transfers</div>
                </div>
                <div css={linkGrps}>
                  <button css={itemGrp}>
                    <FaFilePowerpoint size={18} color="coral" />
                    <div css={items}>Slide</div>
                  </button>
                  <button css={itemGrp2}>
                    <FaClipboardList size={18} color="dodgerblue" />
                    <div css={items}>Quiz</div>
                  </button>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </Card>
    </div>
  );
}

const page = css`
  padding: 64px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: row;
`;
const heading = css``;

const container = css`
  display: flex;
  flex-direction: column;
  margin: 16px;
`;

const header = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const main = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const expandIcon = css`
  &: focus {
    outline: none;
  }
`;

const items = css`
  font: 14px "Open Sans", san-serif;
  color: #777;
  margin-left: 10px;
`;

const itemGrp = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 16px;
  border: none;
  background-color: white;

  &: focus {
    outline: none;
  }
`;

const itemGrp2 = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: white;

  &: focus {
    outline: none;
  }
`;

const linkGrps = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
`;

const circularContainer = css`
  width: 60px;
`;

const content = css`
  color: #777;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-top: 24px;
  padding: 8px;
`;

const contentHeader = css`
  color: #777;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
`;

const listHeading = css`
  padding: 4px;
  margin-right: 32px;
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

const check = css`
  margin-left: 16px;
  color: dodgerblue;
`;

const cancel = css`
  margin-left: 16px;
  color: coral;
`;

const moduleStyle = css`
  font: 14px "Open Sans", sans-serif;
  color: #777;
`;

const titleStyle = css`
  font: 24px "Roboto Condensed", sans-serif;
  color: rgba(0, 0, 0, 0.87);
`;
