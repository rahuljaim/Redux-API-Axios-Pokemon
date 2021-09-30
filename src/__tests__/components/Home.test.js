import React from "react";
import { shallow } from "enzyme";
import PokeContainer from "./../../components/PokeContainer";
import { findByTestArr } from "./../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<PokeContainer {...props} />);
  return component;
};

describe("Pokemon Container", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("container render without errors", () => {
    const component = shallow(<PokeContainer />);
    const wrapper = findByTestArr(component, "container");
    expect(wrapper.length).toBe(1);
  });
  it("column render without errors", () => {
    const component = shallow(<PokeContainer />);
    const wrapper = findByTestArr(component, "h1tag");
    expect(wrapper.length).toBe(1);
  });
});

describe("Pokemon Container checking props", () => {
  describe("have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = { commonList: [] };
      wrapper = setUp(props);
    });
    it("Should render without errors", () => {
      const component = findByTestArr(wrapper, "commonlistComponent");
      expect(component.length).toBe(1);
    });
    it("should render a menu data", () => {
      const selectmenu = findByTestArr(wrapper, "fetchingdata");
      expect(selectmenu.length).toBe(1);
    });
  });
});
