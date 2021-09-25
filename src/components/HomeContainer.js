import PokeContainer from "./PokeContainer";
import { connect } from "react-redux";
import fetchPoke from "../actions/pokeAction";

//to get the data
const storetoReactUI = (state) => ({
  data: state.event,
});
console.log("homecontainer");
//when data send from ui to store
const fromReactUItoStore = (disptach) => ({
  fetchPoke: (data) => disptach(fetchPoke(data)),
});

export default connect(storetoReactUI, fromReactUItoStore)(PokeContainer);
