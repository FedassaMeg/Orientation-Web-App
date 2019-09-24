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
    <div css={body}>
      <Carousel
        activeIndex={props.activeIndex}
        next={props.next}
        previous={props.previous}
        interval={null}
      >
        {images}
      </Carousel>
    </div>
  );
}

const body = css`
  width: 900px;
  min-width: 700px;
`;

const slide = css`
  width: 100%;
  height: auto;
`;
