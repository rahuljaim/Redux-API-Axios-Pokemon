import { connect } from "react-redux";
import DropDown from "../common/DropDown";
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

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
