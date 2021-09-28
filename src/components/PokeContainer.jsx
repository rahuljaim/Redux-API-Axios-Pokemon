import React, { Component } from "react";
import Mock from "../Mock/Mock.json";
import DropDown from "./DropDown";

class PokeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      pokmon: "",
      pokearr: [],
    };
  }
  componentDidMount() {
    return this.props.fetchPoke(Mock[0].ability.name);
  }

  onSubmit = (q) => {
    // var data1 = q.target.value;
    this.setState({ pokmon: q });
    this.props.fetchPoke(q);
    console.log("what is comming here", q);
  };

  changePokemon = (e) => {};
  render() {
    const { abilities } = this.props.data;
    console.log("pokmon", this.state.pokmon);
    console.log("home", abilities);
    console.log("props data", this.props.data);
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h1>Pokemon</h1>
          </div>
          <div className="col">
            <DropDown value={Mock} handler={this.onSubmit} />
          </div>
          <div className="col"></div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <h3>abilities</h3>
          </div>
          <div className="col">
            <DropDown value={this.props.data} handler={this.changePokemon} />
            {/* <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              {abilities?.map((e, i) => (
                <option key={i}>{e.ability.name}</option>
              ))}
            </select> */}
            {this.props.error && (
              <p className="text-danger">Something went Wrong. </p>
            )}
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default PokeContainer;
