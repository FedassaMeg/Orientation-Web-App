import React, { useReducer, useRef } from "react";

import { Overlay } from "react-overlays";

// Styles mostly from Bootstrap.

const PLACEMENTS = ["left", "top", "right", "bottom"];

const initialSstate = {
  show: false,
  placement: null
};

function reducer(state, [type, payload]) {
  switch (type) {
    case "placement":
      return { show: !!payload, placement: payload };
    case "hide":
      return { ...state, show: false, placement: null };
    default:
      return state;
  }
}

export default function OverlayExample() {
  const [{ show, placement }, dispatch] = useReducer(reducer, initialSstate);
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  const handleClick = () => {
    const nextPlacement = PLACEMENTS[PLACEMENTS.indexOf(placement) + 1];

    dispatch(["placement", nextPlacement]);
  };

  return (
    <div className="overlay-example" ref={containerRef}>
      <button
        type="button"
        className="btn btn-primary"
        id="overlay-toggle"
        ref={triggerRef}
        onClick={handleClick}
      >
        I am an Overlay target
      </button>
      <p>Keep clicking to see the placement change.</p>

      <Overlay
        show={show}
        rootClose
        onHide={() => dispatch("hide")}
        placement={placement}
        container={containerRef}
        target={triggerRef}
      >
        {({ props, arrowProps, placement }) => (
          <div {...props} placement={placement}>
            <div
              {...arrowProps}
              placement={placement}
              style={arrowProps.style}
            />
            <div>
              I&rsquo;m placed to the <strong>{placement}</strong>
            </div>
          </div>
        )}
      </Overlay>
    </div>
  );
}
