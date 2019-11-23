import React from "react";
import { shallow } from "enzyme";
import Video from "../Video";

describe("<Video />", () => {
  it("renders", () => {
    const wrapper = shallow(<Video />);

    expect(wrapper.exists()).toBe(true);
  });
});
