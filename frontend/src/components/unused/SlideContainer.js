import React, { Component, useState } from "react";
import axios from "axios";

import Slide from "./Slide";
import CarouselContainer from "../utils/CarouselContainer";

export default function SlideContainer(props) {
  const slideCompleted = slideId => {
    let config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    axios
      .post(
        "http://localhost:8000/api/lookuptableslideusers/",
        {
          slide: slideId,
          completed: true
        },
        config
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  let array = Array.from({ length: props.slide.length }, (v, k) => k + 1);

  return (
    <>
      <CarouselContainer
        slide={props.slide}
        render={({
          activeIndex,
          isComplete,
          onExited,
          onExiting,
          next,
          previous,
          goToIndex
        }) => (
          <Slide
            id={props.slide.key}
            title={props.slide.title}
            activeIndex={activeIndex}
            array={array}
            onExited={onExited}
            onExiting={onExiting}
            next={next}
            previous={previous}
            goToIndex={goToIndex}
            completed={isComplete}
            slideCompleted={slideCompleted}
          />
        )}
      />
    </>
  );
}
