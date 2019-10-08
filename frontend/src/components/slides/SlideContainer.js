import React, { Component, useState } from "react";
import axios from "axios";

import Slide from "./Slide";

export default function SlideContainer(props) {
  const initialState = {
    activeIndex: 0,
    animating: false,
    completed: false
  };

  const [state, setState] = useState(initialState);

  const onExiting = () => {
    state.animating = true;
  };

  const onExited = () => {
    state.animating = false;
  };

  const next = () => {
    if (state.animating) return;
    if (state.activeIndex === props.slide.length - 1) {
      const nextIndex = props.slide.length - 1;
      slideCompleted(props.slide.key);
      setState({ activeIndex: nextIndex, completed: true });
      alert("You have completed the Slide!");
    } else {
      const nextIndex = state.activeIndex + 1;
      setState({ activeIndex: nextIndex });
    }
  };

  const previous = () => {
    if (state.animating) return;
    const nextIndex = state.activeIndex === 0 ? 0 : state.activeIndex - 1;
    setState({ activeIndex: nextIndex });
  };

  const goToIndex = newIndex => {
    if (state.animating) return;
    setState({ activeIndex: newIndex });
  };

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
          completed: state.completed
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
    <Slide
      id={props.slide.key}
      title={props.slide.title}
      activeIndex={state.activeIndex}
      array={array}
      onExited={onExited}
      onExiting={onExiting}
      next={next}
      previous={previous}
      goToIndex={goToIndex}
      completed={state.completed}
      slideCompleted={slideCompleted}
    />
  );
}
