/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import { Carousel, CarouselItem } from "reactstrap";

export default function SlideCarousel(props) {
  let images = props.array.map((image, index) => {
    return (
      <CarouselItem
        onExiting={props.onExiting}
        onExited={props.onExited}
        key={index}
      >
        <img
          src={require(`../../imgs/slides/slide${props.id}/Slide${image}.PNG`)}
          alt=""
          css={slide}
        />
      </CarouselItem>
    );
  });
  return (
    <div>
      <Carousel
        activeIndex={props.activeIndex}
        next={props.next}
        previous={props.previous}
        interval={null}
      >
        {images}
      </Carousel>
      <div css={controlGroup}>
        <button css={button} onClick={props.previous}>
          Prev.
        </button>
        <button css={button} onClick={props.next}>
          Next
        </button>
      </div>
    </div>
  );
}

const slide = css`
  width: 100%;
  height: auto;
`;

const controlGroup = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const button = css`
  background: teal;
  color: white;
  border: none;
  font-size: 1em;
  font-family: "Noto Sans JP", sans-serif;
  padding: 7px;
  width: 50px;
`;
