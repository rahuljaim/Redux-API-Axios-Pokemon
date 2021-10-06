import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../Apps/container/DropDownContainer";
import Enzyme, { shallow } from "enzyme";

import DropDown from "../../Apps/common/DropDown";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("mapStateToProps working", () => {
    const INITIAL_STATE = {
      event: { pdata: "data1", error: "error" },
    };
    expect(mapStateToProps(INITIAL_STATE)).toBeDefined;
  });
  it("mapdispatchToProps working", () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch).fetchPoke).toBeCalled;
  });
  describe("passing props", () => {
    let props = {
      submitEvent: (fn) => fn,
      emitEvent: (fn) => fn,
    };
    it("should call hanonChange method", () => {
      const value = {
        target: {
          todo: "",
        },
      };
      const wrapper = shallow(<DropDown {...props} item={[]} />);
      wrapper.instance().submitEvent(value);
      const para = wrapper.find("select").at(0);
      para.simulate("change", { target: { value: "pokemon" } });
      expect(wrapper.find("submitEvent")).toBeCalled;
    });
  });
});
