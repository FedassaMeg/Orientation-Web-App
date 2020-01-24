/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import Collapse from "@material-ui/core/Collapse";

import {
  FaCheck,
  FaFilePowerpoint,
  FaClipboardList,
  FaClipboardCheck
} from "react-icons/fa";

export default function PanelBody(props) {
  const { expand, slides, quizzes, comArray, compltArray } = props;

  const listArr = slides.map(slide => (
    <div css={list}>
      <div css={heading}>Introduction to Hospice</div>

      <div css={btnGroup}>
        <button>
          {item.type !== "slide" ? (
            <div>Not a Valid type</div>
          ) : item.is_complete ? (
            <FaCheck size={18} color="green" />
          ) : (
            <FaFilePowerpoint size={18} color="coral" />
          )}
          <div css={type}>Slide</div>
        </button>
        {quizzes.map(quiz => {
          if (quiz.title === slide.title) {
            return (
              <button>
                {item.type !== "quiz" ? (
                  <div>Not a Valid type</div>
                ) : item.is_complete ? (
                  <FaClipboardCheck size={18} color="green" />
                ) : (
                  <FaClipboardList size={18} color="dodgerblue" />
                )}
                <div css={type}>Quizzes</div>
              </button>
            );
          }
        })}
      </div>
    </div>
  ));

  return (
    <Collapse in={expand}>
      <div css={container}>{listArr}</div>
    </Collapse>
  );
}

const container = css`
  color: #777;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  padding: 8px;
`;

const list = css``;
const heading = css``;
const btnGroup = css``;
const type = css``;
