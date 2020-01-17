import React, { useState } from "react";
import pose from "react-pose";

const Box = posed.div({ visible: { opacity: 1 }, hidden: { opacity: 0 } });

export default function poseTrial() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <Box className="box" pose={isVisible} />
      <button onClick={() => setIsVisible(!isVisible)}>click</button>
    </div>
  );
}
