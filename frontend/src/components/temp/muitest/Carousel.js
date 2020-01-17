import React from "react";

import CarouselContainer from "../utils/CarouselContainer";
import CarouselItem from "./CarouselItem";
import SlideImg from "./SlideImg";

export default function Carousel(props) {
  let array = Array.from({ length: 83 }, (v, k) => k + 1);
  return (
    <CarouselContainer
      slide={{ length: 83 }}
      render={({
        activeIndex,
        isComplete,
        onExited,
        onExiting,
        next,
        previous,
        goToIndex
      }) => (
        <CarouselItem next={next} previous={previous} key={activeIndex}>
          <SlideImg activeIndex={activeIndex} />
        </CarouselItem>
      )}
    />
  );
}
