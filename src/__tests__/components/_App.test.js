import React from "react";
import { shallow } from "enzyme";
import { findByTestArr } from "../../../utils";
import App from "../../Apps/App";

const setUp = (props = {}) => {
  const component = shallow(<App {...props} />);
  return component;
};

describe("Pokemon Container", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("container render without errors", () => {
    const component = shallow(<App />);
    const wrapper = findByTestArr(component, "loaded-HomeCompoment");
    expect(wrapper.length).toBe(1);
  });
});
