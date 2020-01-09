/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function Table({ header, children }) {
  return <div css={[container, header && stickyHeader]}>{children}</div>;
}

const container = css`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

const stickyHeader = css`
  border-collapse: separate;
`;
