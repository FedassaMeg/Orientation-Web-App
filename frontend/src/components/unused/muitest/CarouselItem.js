import React from "react";

export default function CarouselItem(props) {
  return (
    <div>
      <button onClick={() => props.next}>next</button>
      <button onClick={() => props.previous}>previous</button>
      {props.children}
    </div>
  );
}
