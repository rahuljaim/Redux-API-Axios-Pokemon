import React from "react";
import fetchPoke from "../../Apps/actions/pokeAction";
import { shallow } from "enzyme";
import PokeMon from "../../Apps/components/PokeMon";
import { findByTestArr } from "../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<PokeMon {...props} />);
  return component;
};

describe("Pokemon Container", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("container render without errors", () => {
    const component = shallow(<PokeMon />);
    const wrapper = findByTestArr(component, "container");
    expect(wrapper.length).toBe(1);
  });
  it("column render without errors", () => {
    const component = shallow(<PokeMon />);
    const wrapper = findByTestArr(component, "h1tag");
    expect(wrapper.length).toBe(1);
  });

  it("to check the fetch poke", () => {
    const props1 = { fetchPoke: (fn) => fn };
    const component = shallow(<PokeMon {...props1} />);
    console.log("pokecontainer-component-instance", component.instance());
    expect(component.instance().fetchAxiosCall()).toBeCalled;
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
