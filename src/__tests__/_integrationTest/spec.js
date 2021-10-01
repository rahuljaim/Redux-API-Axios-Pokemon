import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import moxios from "moxios";
import pokeType from "../../actions/pokeType";
import { testStore } from "../../../utils";
import fetchPoke from "./../../actions/pokeAction";

const store = testStore();

Enzyme.configure({ adapter: new Adapter() });
describe("actions check", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it("Store is updated correctly ", () => {
    const expectedState = {
      type: pokeType.FETCH_POKEMON_SUCCESS,
      abilities: ["blaze", "torrent"],
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
    });

    return store.dispatch(fetchPoke()).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0].payload).toEqual(expectedState.abilities);
    });
  });

  it("Should return the error if it return", () => {
    const expectedState = false;
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: expectedState,
      });
    });
    store.dispatch(fetchPoke()).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled[0].payload).toEqual(expectedState);
    });
  });
});
