import React from "react";

import get from "lodash/get";

import ViewWrapper from "./ViewWrapper";
import HandoutContainer from "../components/handouts/HandoutContainer";

const handoutsLookup = {
  "catheter-insertion-and-care-ho": {
    key: 1,
    title: "Catheter Insertion and Care HO"
  },
  "catheter-irrigation": {
    key: 2,
    title: "Catheter Irrigation"
  },
  "md-order-and-visit-note": {
    key: 3,
    title: "MD Order and Visit Note"
  },
  oximetry: {
    key: 4,
    title: "Oximetry"
  },
  "routine-venipuncture-procedure": {
    key: 5,
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
