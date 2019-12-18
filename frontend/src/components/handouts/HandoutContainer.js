import React from "react";

import FoleyInsertion from "./FoleyInsertion";
import CatheterIrrigation from "./CatheterIrrigation";
import Oximetry from "./Oximetry";
import Venipuncture from "./Venipuncture";

export default function HandoutContainer(props) {
  return (
    <>
      {(() => {
        switch (props.handout.key) {
          case 1:
            return <FoleyInsertion />;
          case 2:
            return <CatheterIrrigation />;
          case 3:
            return <Oximetry />;
          case 4:
            return <Venipuncture />;
          default:
            return null;
        }
      })()}
    </>
  );
}
