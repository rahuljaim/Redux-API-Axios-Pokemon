import { connect } from "react-redux";
import PokeMon from "../components/PokeMon";
import fetchPoke from "../actions/pokeAction";

export const mapStateToProps = (state) => {
  return {
    result: state.event.pdata,
    error: state.event.error,
  };
};

export const mapDispatchToProps = (dispatch) => ({
  fetchPoke: (name) => dispatch(fetchPoke(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokeMon);
