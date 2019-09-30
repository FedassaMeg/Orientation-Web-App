import React, { Component } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

import Slide from "./Slide";

export default class SlideContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0, completed: false };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.slideCompleted = this.slideCompleted.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    if (this.state.activeIndex === this.props.slide.length - 1) {
      const nextIndex = this.props.slide.length - 1;
      this.slideCompleted(this.props.slide.key);
      this.setState({ activeIndex: nextIndex, completed: true });
      alert("You have completed the Slide!");
    } else {
      const nextIndex = this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0 ? 0 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  slideCompleted(slideId) {
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
          completed: this.state.completed
        },
        config
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    let array = Array.from(
      { length: this.props.slide.length },
      (v, k) => k + 1
    );

    return (
      <Slide
        id={this.props.slide.key}
        title={this.props.slide.title}
        activeIndex={this.state.activeIndex}
        array={array}
        onExited={this.onExited}
        onExiting={this.onExiting}
        next={this.next}
        previous={this.previous}
        goToIndex={this.goToIndex}
        completed={this.state.completed}
        slideCompleted={this.slideCompleted}
      />
    );
  }
}
