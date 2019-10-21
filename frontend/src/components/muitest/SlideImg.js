import React from "react";

export default function SlideImg(props) {
  return (
    <img
      src={require(`../../imgs/slides/slide1/Slide${props.activeIndex}.PNG`)}
    />
  );
}
