import { pokeType } from "./pokeType";
import axios from "axios";

const getDataSuccess = (data) => {
  return {
    type: pokeType.FETCH_POKEMON_SUCCESS,
    data: data,
  };
};
const onError = (error) => {
  return {
    type: pokeType.FETCH_ERROR,
    data: error,
  };
};

const fetchPoke = (PokemonName) => async (dispatch) => {
  try {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`)
      .then((response) => {
        dispatch(getDataSuccess(response.data));
        console.log("success", response.data);
      });
  } catch (error) {
    console.log(error);
    dispatch(onError(error));
  }
};

export default fetchPoke;
