import React from "react";

import get from "lodash/get";

//Local components
import HandoutContainer from "../components/handouts/HandoutContainer";
import ViewWrapper from "../components/components/ViewWrapper";

const handoutsLookup = {
  "catheter-insertion-and-care-ho": {
    key: 1,
    title: "Catheter Insertion and Care HO"
  },
  "foley-catheters": {
    key: 2,
    title: "Catheter Irrigation"
  },
  "pulse-oximetry": {
    key: 3,
    title: "Oximetry"
  },
  venipuncture: {
    key: 4,
    title: "Routine Venipuncture Procedure"
  }
};

export default function HandoutPage({ match }) {
  const handout = get(handoutsLookup, match.params.id);
  return (
    <ViewWrapper>
      <HandoutContainer handout={handout} />
    </ViewWrapper>
  );
}
