import axios from "axios";
import pokeType from "./pokeType";

const getDataSuccess = (result) => {
  return {
    type: pokeType.FETCH_POKEMON_SUCCESS,
    payload: result.abilities,
  };
};
const onError = (error) => {
  return {
    type: pokeType.FETCH_ERROR,
    payload: error,
  };
};

const fetchPoke = (PokemonName) => async (dispatch) => {
  await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`)
    .then((response) => {
      dispatch(getDataSuccess(response.data));
      console.log("success", response.data);
    })
    .catch(function (error) {
      console.log(error);
      dispatch(onError(error));
    });
};

export default fetchPoke;
