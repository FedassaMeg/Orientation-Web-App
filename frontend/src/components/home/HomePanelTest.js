/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { MdAssignment, MdSlideshow } from "react-icons/md";
import { FaFilePowerpoint } from "react-icons/fa";

//Local components
import ChangingProgressProvider from "../components/ChangingProgressProvider";

export default function HomePanelTest() {
  return (
    <div css={page}>
      <div css={container}>
        <div css={header}>
          <div css={main}>
            <div css={circularContainer}>
              <ChangingProgressProvider values={[0, 60]} interval={100}>
                {prcnt => (
                  <CircularProgressbar
                    value={prcnt}
                    strokeWidth={10}
                    styles={buildStyles({
                      pathColor: `rgba(62, 152, 199, ${prcnt / 100})`,
                      trailColor: "#e4e4e4",
                      pathTransition:
                        prcnt === 0 ? "none" : "stroke-dashoffset 1s ease 0.1s"
                    })}
                  />
                )}
              </ChangingProgressProvider>
            </div>
          </div>
          <div css={contentHeader}>
            <div css={moduleStyle}>Module 4</div>
            <div css={titleStyle}> Introduction to Hospice</div>
          </div>
        </div>
        <div css={content}>
          <div css={list}>
            <div css={listHeading}>
              <div css={heading}>Introduction to Hospice</div>
            </div>
            <div css={linkGrps}>
              <button css={itemGrp}>
                <MdSlideshow size={20} color="coral" />
                <div css={items}>Slide</div>
              </button>
              <button css={itemGrp2}>
                <MdAssignment size={20} color="dodgerblue" />
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
                <MdSlideshow size={20} color="coral" />
                <div css={items}>Slide</div>
              </button>
              <button css={itemGrp2}>
                <MdAssignment size={20} color="dodgerblue" />
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
                <MdSlideshow size={20} color="coral" />
                <div css={items}>Slide</div>
              </button>
              <button css={itemGrp2}>
                <MdAssignment size={20} color="dodgerblue" />
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
                <MdSlideshow size={20} color="coral" />
                <div css={items}>Slide</div>
              </button>
              <button css={itemGrp2}>
                <MdAssignment size={20} color="dodgerblue" />
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
                <MdSlideshow size={20} color="coral" />
                <div css={items}>Slide</div>
              </button>
              <button css={itemGrp2}>
                <MdAssignment size={20} color="dodgerblue" />
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
                <MdSlideshow size={20} color="coral" />
                <div css={items}>Slide</div>
              </button>
              <button css={itemGrp2}>
                <MdAssignment size={20} color="dodgerblue" />
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
                <MdSlideshow size={20} color="coral" />
                <div css={items}>Slide</div>
              </button>
              <button css={itemGrp2}>
                <MdAssignment size={20} color="dodgerblue" />
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
                <MdSlideshow size={20} color="coral" />
                <div css={items}>Slide</div>
              </button>
              <button css={itemGrp2}>
                <MdAssignment size={20} color="dodgerblue" />
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
                <MdSlideshow size={20} color="coral" />
                <div css={items}>Slide</div>
              </button>
              <button css={itemGrp2}>
                <MdAssignment size={20} color="dodgerblue" />
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
                <MdSlideshow size={20} color="coral" />
                <div css={items}>Slide</div>
              </button>
              <button css={itemGrp2}>
                <MdAssignment size={20} color="dodgerblue" />
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
                <MdSlideshow size={20} color="coral" />
                <div css={items}>Slide</div>
              </button>
              <button css={itemGrp2}>
                <MdAssignment size={20} color="dodgerblue" />
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
                <MdSlideshow size={20} color="coral" />
                <div css={items}>Slide</div>
              </button>
              <button css={itemGrp2}>
                <MdAssignment size={20} color="dodgerblue" />
                <div css={items}>Quiz</div>
              </button>
            </div>
          </div>
        </div>
      </div>
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
  justify-content: flex-start;
  align-items: flex-start;
  background-color: white;
  border-radius: 5px;
  padding: 24px;
  margin: 16px;
`;

const header = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const main = css``;

const items = css`
  font: 14px "Open Sans", san-serif;
  color: #777;
`;

const itemGrp = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
`;

const itemGrp2 = css`
  display: flex;
  flex-direction: row;
  align-items: center;
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
