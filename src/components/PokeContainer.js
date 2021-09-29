import React, { Component } from "react";

import DropDown from "./DropDown";
class PokeContainer extends Component {
  componentDidMount() {
    this.setAbility(this.props.listVal.commonList[0].ability.name);
  }
  setAbility(name) {
    this.props.fetchPoke(name);
  }

  render() {
    console.log("props values", this.props.listVal);
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h1>{this.props.listVal.heading}</h1>
          </div>
          <div className="col">
            <DropDown
              item={this.props.listVal.commonList}
              handler={(name) => this.setAbility(name)}
            />
          </div>
          <div className="col"></div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <h3>See Abilities</h3>
          </div>
          <div className="col">
            <DropDown item={this.props.result} />
          </div>
          <div className="col"></div>
        </div>

        {this.props.error && (
          <p className="text-danger">Something went Wrong. </p>
        )}
      </div>
    );
  }
}
export default PokeContainer;
