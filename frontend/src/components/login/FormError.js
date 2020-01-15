/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function FormError({ formErrors }) {
  return (
    <div className={formErrors}>
      {Object.keys(formErrors).map((field, index) => {
        if (formErrors[field].length > 0) {
          return (
            <div key={index} css={error}>
              {formErrors[field]}
            </div>
          );
        } else {
          return "";
        }
      })}
    </div>
  );
}

const error = css`
  padding-left: 8px;
  padding-top: 4px;
  font: 14px "Roboto", san-serif;
  font-style: italic;
  color: #b00020;
`;
