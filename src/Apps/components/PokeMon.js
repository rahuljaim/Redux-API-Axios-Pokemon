import React, { Component } from "react";
import DropDown from "../common/DropDown";

class PokeMon extends Component {
  componentDidMount() {
    this.fetchAxiosCall(this.props.commonList[0].ability.name);
  }
  fetchAxiosCall = (name) => {
    this.props.fetchPoke(name);
  };

  render() {
    const { commonList } = this.props;
    return (
      <div className="container" data-test="container">
        <div className="row mt-3">
          <div className="col">
            <h1 data-test="h1tag">Pokemon Redux</h1>
          </div>
          <div className="col" data-test="commonlistComponent">
            <DropDown item={commonList} emitEvent={this.fetchAxiosCall} />
          </div>
          <div className="col"></div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <h3>See Abilities</h3>
          </div>
          <div className="col" data-test="fetchingdata">
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
export default PokeMon;
