/**@jsx jsx */
import { css, jsx } from "@emotion/core";

export default function FormError({ formErrors }) {
  return (
    <div className={formErrors}>
      {Object.keys(formErrors).map((field, index) => {
        if (formErrors[field].length > 0) {
          return (
            <p key={index} css={error}>
              {field} {formErrors[field]}
            </p>
          );
        } else {
          return "";
        }
      })}
    </div>
  );
}

const error = css`
  color: #b00020;
`;
