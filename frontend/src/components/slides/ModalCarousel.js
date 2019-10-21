import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import CarouselContainer from "../utils/CarouselContainer";

export default function ModalCarousel(props) {
  return (
    <CarouselContainer
      slide={props.array}
      render={({ activeIndex, onExited, onExiting, next, previous }) => (
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          keyboard
          interval={null}
        >
          {props.array.map(image => {
            return (
              <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={image}
              >
                <img
                  src={require(`../../imgs/slides/slide${props.id}/Slide${image}.PNG`)}
                  alt=""
                  className="modal-slide-img"
                />
              </CarouselItem>
            );
          })}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      )}
    />
    // <Carousel
    //   activeIndex={activeIndex}
    //   next={next}
    //   previous={previous}
    //   keyboard
    //   interval={null}
    // >
    //   {/*<CarouselIndicators
    //       activeIndex={activeIndex}
    //       onClickHandler={goToIndex}
    //     />*/}
    //   {images}
    //   <CarouselControl
    //     direction="prev"
    //     directionText="Previous"
    //     onClickHandler={previous}
    //   />
    //   <CarouselControl
    //     direction="next"
    //     directionText="Next"
    //     onClickHandler={next}
    //   />
    // </Carousel>
  );
}
