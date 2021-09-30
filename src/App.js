import React, { Component } from "react";
import Mock from "./mock/MockData";
import "./styles/App.css";

import HomeContainer from "./container/HomeContainer";

class App extends Component {
  render() {
    return (
      <div data-test="loaded-HomeCompoment">
        <HomeContainer commonList={this.props.listVal.commonList} />;
      </div>
    );
  }
}
App.defaultProps = { listVal: Mock };
export default App;
