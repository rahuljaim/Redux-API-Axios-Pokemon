import React, { Component } from "react";
import Mock from "../Mock/Mock.json";

class PokeContainer extends Component {
  componentDidMount() {
    return this.props.fetchPoke("charmeleon");
  }
  constructor(props) {
    super(props);
    this.state = {
      pokemon: "",
    };
    this.selectPokemon = this.selectPokemon.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    this.props.fetchPoke(this.state.pokemon);
  }
  selectPokemon(e) {
    this.setState({ pokemon: e.target.value });
  }

  render() {
    const { abilities } = this.props.data.data;

    console.log("home", abilities);
    return (
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h1>Pokemon</h1>
          </div>
          <div className="col">
            <select
              onChange={this.selectPokemon}
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              <option defaultValue>Select Pokemon</option>
              {Mock.map((e) => {
                return (
                  <option value={e.name} key={e.name}>
                    {e.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={this.onSubmit}
            >
              Fetch Pokemon
            </button>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <h3>abilities</h3>
          </div>
          <div className="col">
            <select
              className="form-select form-select-lg mb-3"
              aria-label=".form-select-lg example"
            >
              {abilities &&
                abilities?.map((e, i) => (
                  <option key={i}>{e.ability.name}</option>
                ))}
            </select>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default PokeContainer;
