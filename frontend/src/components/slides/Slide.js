/** @jsx jsx */
import { Component } from "react";
import PropTypes from "prop-types";
import { css, jsx } from "@emotion/core";

import PageHeader from "../components/PageHeader";
import SlideSidebar from "./SlideSidebar";
import SlideCarousel from "./SlideCarousel";
import SlideModal from "./SlideModal";

export default class Slide extends Component {
  static propTypes = {
    activeIndex: PropTypes.number,
    array: PropTypes.array,
    onExited: PropTypes.func,
    onExiting: PropTypes.func,
    next: PropTypes.func,
    previous: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PageHeader header="MODULE 1:" title={this.props.title} />
        <hr css={divider} />
        <div css={body}>
          <SlideSidebar
            id={this.props.id}
            array={this.props.array}
            activeIndex={this.props.activeIndex}
            goToIndex={this.props.goToIndex}
          />
          <div css={mainSection}>
            <SlideModal
              id={this.props.id}
              array={this.props.array}
              buttonLabel="Open Slide"
              size="xl"
            />
            <SlideCarousel
              id={this.props.id}
              activeIndex={this.props.activeIndex}
              array={this.props.array}
              onExited={this.props.onExited}
              onExiting={this.props.onExiting}
              next={this.props.next}
              previous={this.props.previous}
            />
          </div>
        </div>
      </div>
    );
  }
}

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

const mainSection = css`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
