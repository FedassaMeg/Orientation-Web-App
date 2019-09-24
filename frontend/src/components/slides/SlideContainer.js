import React, { Component } from "react";

import Slide from "./Slide";

export default class SlideContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.slide.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.slide - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  render() {
    let array = Array.from(
      { length: this.props.slide.length },
      (v, k) => k + 1
    );
    return (
      <Slide
        title={this.props.slide.title}
        activeIndex={this.state.activeIndex}
        array={array}
        onExited={this.onExited}
        onExiting={this.onExiting}
        next={this.next}
        previous={this.previous}
        goToIndex={this.goToIndex}
      />
    );
  }
}
