import pokeType from "../actions/pokeType";

const INITIAL_STATE = {
  pdata: [],
  error: "",
};

const pokeReducer = (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case pokeType.FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pdata: payload,
        error: false,
      };

    case pokeType.FETCH_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default pokeReducer;
