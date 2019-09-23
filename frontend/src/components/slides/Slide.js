/** @jsx jsx */
import { Component } from "react";
import PropTypes from "prop-types";
import { css, jsx } from "@emotion/core";

import PageHeader from "../components/PageHeader";
import SlideSidebar from "./SlideSidebar";
import SlideCarousel from "./SlideCarousel";

export default function Slide(props) {
  return (
    <div>
      <PageHeader
        header="MODULE 1:"
        title="Introduction to First Call Hospice"
      />
      <hr css={divider} />
      <div css={body}>
        <SlideSidebar
          activeIndex={props.activeIndex}
          goToIndex={props.goToIndex}
        />
        <SlideCarousel
          activeIndex={props.activeIndex}
          array={props.array}
          onExited={props.onExited}
          onExiting={props.onExiting}
          next={props.next}
          previous={props.previous}
        />
      </div>
    </div>
  );
}

Slide.propTypes = {
  activeIndex: PropTypes.number,
  array: PropTypes.array,
  onExited: PropTypes.func,
  onExiting: PropTypes.func,
  next: PropTypes.func,
  previous: PropTypes.func
};

const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const body = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: auto;
  width: 100%;
  height: 100%;
`;
