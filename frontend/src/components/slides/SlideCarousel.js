/** @jsx jsx */

import { css, jsx } from "@emotion/core";
import { Carousel, CarouselItem } from "reactstrap";

let array = Array.from({ lenght: 83 }, (v, k) => k + 1);
export default function SlideCarousel(props) {
  let images = array.map((image, index) => {
    return (
      <CarouselItem
        onExiting={props.onExiting}
        onExited={props.onExited}
        key={index}
      >
        <img
          src={require(`../../imgs/slides/slide1/Slide${image}.PNG`)}
          alt=""
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
