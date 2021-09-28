import { connect } from "react-redux";
import PokeContainer from "../components/PokeContainer";
import fetchPoke from "../actions/pokeAction";

//to get the data
const storetoReactUI = (state) => ({
  data: state.event.data,
  error: state.event.error,
});
console.log("homecontainer");
//when data send from ui to store
const fromReactUItoStore = (disptach) => ({
  fetchPoke: (data) => disptach(fetchPoke(data)),
});

export default connect(storetoReactUI, fromReactUItoStore)(PokeContainer);
