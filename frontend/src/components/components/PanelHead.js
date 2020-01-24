/**@jsx jsx */
import { css, jsx } from "@emotion/core";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import { MdExpandLess, MdExpandMore } from "react-icons/md";

import IconButton from "@material-ui/core/IconButton";

import ChangingProgressProvider from "./ChangingProgressProvider";

export default function PanelHead(props) {
  const { expand, header, module, percentage, handleOnClick } = props;
  return (
    <div css={container}>
      <div css={main}>
        <div css={[progress]}>
          <ChangingProgressProvider values={[0, percentage]} interval={100}>
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
        <div css={title}>
          <div css={moduleStyle}>{`Module ${module}`}</div>
          <div css={titleStyle}>{header}</div>
        </div>
      </div>
      <div>
        <IconButton disableFocusRipple onClick={handleOnClick} css={expandIcon}>
          {expand ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
        </IconButton>
      </div>
    </div>
  );
}

const container = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const main = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const progress = css`
  width: 60px;
`;

const title = css`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const moduleStyle = css`
  font: 14px "Open Sans", sans-serif;
  color: #777;
`;

const titleStyle = css`
  font: 24px "Roboto Condensed", sans-serif;
  color: rgba(0, 0, 0, 0.87);
`;

const expandIcon = css`
  &: focus {
    outline: none;
  }
`;
