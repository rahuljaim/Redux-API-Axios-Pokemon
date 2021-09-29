import { connect } from "react-redux";
import PokeContainer from "../components/PokeContainer";
import fetchPoke from "../actions/pokeAction";

const mapStateToProps = (state) => {
  return {
    result: state.event.pdata,
    error: state.event.error,
  };
};

const mapDispatchProps = (dispatch) => ({
  fetchPoke: (name) => dispatch(fetchPoke(name)),
});

export default connect(mapStateToProps, mapDispatchProps)(PokeContainer);
