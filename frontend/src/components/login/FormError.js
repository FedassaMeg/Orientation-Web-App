import React from "react";

export default function FormError({ formErrors }) {
  return (
    <div className={formErrors}>
      {Object.keys(formErrors).map((field, index) => {
        if (formErrors[field].length > 0) {
          return (
            <p key={index}>
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
