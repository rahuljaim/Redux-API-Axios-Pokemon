import {
  mapStateToProps,
  mapDispatchToProps,
} from "../../container/HomeContainer";

describe("App", () => {
  it("mapStateToProps working", () => {
    const INITIAL_STATE = {
      event: { pdata: "data1", error: "error" },
      //   pdata: [],
      //   error: "",
    };
    // console.log("mapstatetoprops----", mapStateToProps());
    expect(mapStateToProps(INITIAL_STATE)).toBeDefined;
  });
  it("mapdispatchToProps working", () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch).fetchPoke).toBeCalled;
  });
});
