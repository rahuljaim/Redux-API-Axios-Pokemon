import pokeType from "../../actions/pokeType";
import pokeReducer from "../../reducers/pokeReducer";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const INITIAL_STATE = {
  pdata: [],
  error: "",
};

describe("should check reducer", () => {
  it("should return default state", () => {
    const nState = pokeReducer(undefined, {});
    expect(nState.pdata).toEqual([]);
  });
  it("should return new state if receiving type", () => {
    const expectedState = {
      name: "chamelon",
      abilities: ["blaze", "torrent"],
    };
    const nState = pokeReducer(INITIAL_STATE, {
      type: pokeType.FETCH_POKEMON_SUCCESS,
      pdata: expectedState,
      error: false,
    });
    console.log("nstate---", nState);
    expect(nState).toBeDefined;
  });

  it("should return new erros whiel returning", () => {
    const posts = { pdata: undefined, error: null };
    const nState = pokeReducer(INITIAL_STATE, {
      type: pokeType.FETCH_ERROR,
      error: true,
    });
    expect(nState).toBeDefined;
  });
});
