import React, { useState } from "react";
import { css } from "@emotion/core";
import BounceLoader from "react-spinners/BounceLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Spinner() {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <BounceLoader
        css={override}
        sizeUnit={"px"}
        size={60}
        color={"#279186"}
        loading={loading}
      />
    </div>
  );
}
