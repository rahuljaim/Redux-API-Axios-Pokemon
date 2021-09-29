import React, { Component } from "react";
import Mock from "./mock/MockData";
import "./styles/App.css";

import HomeContainer from "./container/HomeContainer";

class App extends Component {
  render() {
    return <HomeContainer listVal={this.props.listVal} />;
  }
}
App.defaultProps = { listVal: Mock };
export default App;
