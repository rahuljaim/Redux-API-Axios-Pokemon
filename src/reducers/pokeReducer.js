import { pokeType } from "../actions/pokeType";
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

const pokeReducer = (state = INITIAL_STATE, action) => {
  console.log("reducer");
  switch (action.type) {
    case pokeType.FETCH_REQUEST:
      return fetchRequest(state, action);
    case pokeType.FETCH_POKEMON_SUCCESS:
      return fetchSuccess(state, action);
    case pokeType.FETCH_ERROR:
      return fetchError(state, action);
    default:
      return state;
  }
};

const fetchRequest = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

const fetchSuccess = (state, action) => {
  console.log("po", action.data);
  return {
    ...state,
    data: action.data,
    loading: false,
  };
};

const fetchError = (state, action) => {
  return {
    ...state,
    loading: false,
    data: [],
  };
};

export default pokeReducer;
