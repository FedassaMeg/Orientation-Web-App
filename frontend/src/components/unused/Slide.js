/** @jsx jsx */
import PropTypes from "prop-types";
import { css, jsx } from "@emotion/core";

import PageHeader from "../components/PageHeader";
import SlideSidebar from "./SlideSidebar";
import SlideCarousel from "./SlideCarousel";
import SlideModal from "./SlideModal";

export default function Slide(props) {
  return (
    <div css={container}>
      <PageHeader header="MODULE 1:" title={props.title} />
      <hr css={divider} />
      <div css={body}>
        <SlideSidebar
          id={props.id}
          array={props.array}
          activeIndex={props.activeIndex}
          goToIndex={props.goToIndex}
        />
        <div css={mainSection}>
          <SlideModal
            id={props.id}
            array={props.array}
            buttonLabel="Open Slide"
            size="xl"
          />
          <div css={slideCarousel}>
            <SlideCarousel
              id={props.id}
              activeIndex={props.activeIndex}
              array={props.array}
              onExited={props.onExited}
              onExiting={props.onExiting}
              next={props.next}
              previous={props.previous}
              completed={props.IsComplete}
              slideCompleted={props.slideCompleted}
            />
          </div>
        </div>
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

const container = css`
  flex-grow: 1;
  align-self: center;
  max-width: 140vmin;
  width: 100%;
`;

const divider = css`
  margin: 0;
  border: 0.5px solid lightgrey;
`;

const body = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
  width: 100%;
  height: 100%;
`;

const mainSection = css`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const slideCarousel = css`
  align-self: center;
`;
