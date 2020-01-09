/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function TableCell({ align, padding, variant, ...other }) {
  return (
    <div
      css={[
        container,
        variant === "head" && head,
        align === "left" && alignLeft,
        align === "center" && alignCenter,
        align === "right" && alignRight,
        align === "justify" && alignJustify,
        variant === "head" && stickyHeader,
        padding === "checkbox" && paddingCheckbox
      ]}
      {...other}
    />
  );
}

const container = css`
  display: "table-cell";
  font: 1rem "Roboto Condensed", sans-serif;
  vertical-align: "inherit";
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  text-align: "left";
  padding: 16px;
`;

const head = css`
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.5rem;
  font-weight: 400;
`;

const alignLeft = css`
  text-align: left;
`;

const alignCenter = css`
  text-align: center;
`;

const alignRight = css`
  text-align: right;
  flex-direction: "row-reverse";
`;

const alignJustify = css`
  text-align: justify;
`;

const stickyHeader = css`
  position: sticky;
  top: 0;
  left: 0;
  zIndex: 2,
  background-color: rgba(0, 0, 0, 0.6)
`;

const paddingCheckbox = css`
  width: 48;
  padding: 0 0 0 4px;
`;
