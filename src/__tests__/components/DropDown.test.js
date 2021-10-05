import React from "react";
import { shallow } from "enzyme";
import { findByTestArr, checkProps } from "./../../../utils/";
import DropDown from "../../common/DropDown";

describe("re-usable Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        selectedText: "charmeleon",
        emitEvent: () => {},
      };
      const propsError = checkProps(DropDown, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        item: [],
        emitEvent: () => {},
      };
      wrapper = shallow(<DropDown {...props} />);
    });

    it("should render a select option", () => {
      const selectoption = findByTestArr(wrapper, "selectcomponent");
      expect(selectoption.length).toBe(1);
    });

    it("should check the dropdown", () => {
      expect(wrapper.instance().submitEvent()).toBeCalled;
    });
  });
});
