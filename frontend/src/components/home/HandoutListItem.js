/**@jsx jsx */

import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";

export default function HomeListItem(props) {
  const lists = props.arr.map((item, index) => {
    return (
      <div key={index} css={listSection}>
        <div css={listRight}>
          <Link to={`handout/${item.url}`} css={list}>
            {item.title}
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>{lists}</div>
    </div>
  );
}

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
