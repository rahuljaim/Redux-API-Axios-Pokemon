import { connect } from "react-redux";
import PokeContainer from "../components/PokeContainer";
import fetchPoke from "../actions/pokeAction";

const storeToUI = (state) => {
  return {
    result: state.event.pdata,
    error: state.event.error,
  };
};

const UItoAction = (dispatch) => ({
  fetchPoke: (name) => dispatch(fetchPoke(name)),
});

export default connect(storeToUI, UItoAction)(PokeContainer);
