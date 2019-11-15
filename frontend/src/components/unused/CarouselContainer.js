import React, { useState } from "react";

export default function CarouselContainer(props) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    if (activeIndex === props.slide.length - 1) {
      const nextIndex = props.slide.length - 1;
      setActiveIndex(nextIndex);
      setIsComplete(true);
    } else {
      const nextIndex = activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? 0 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return (
    <>
      {props.render({
        activeIndex,
        isComplete,
        onExited,
        onExiting,
        next,
        previous,
        goToIndex
      })}
    </>
  );
}
