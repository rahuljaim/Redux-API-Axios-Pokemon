import pokeType from "./../../actions/pokeType";
import pokeReducer from "./../../reducers/pokeReducer";
describe("should check reducer", () => {
  it("should return default state", () => {
    const nState = pokeReducer(undefined, {});
    expect(nState.pdata).toEqual([]);
  });
  it("should return new state if receiving type", () => {
    const posts = { pdata: undefined, error: null };
    const nState = pokeReducer(undefined, {
      type: pokeType.FETCH_POKEMON_SUCCESS,
      pdata: posts,
    });
    expect(nState).toEqual(posts);
  });
});
