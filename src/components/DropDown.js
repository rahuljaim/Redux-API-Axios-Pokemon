import React, { Component } from "react";

class DropDown extends Component {
  render() {
    const { value } = this.props;
    console.log("dropdown", this.props.value);

    return (
      <div>
        {console.log("dropdowns--", this.props)}
        <select
          onChange={(e) => this.props.handler(e.target.value)}
          value={this.props.value}
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
        >
          {value.map((e, i) => {
            return (
              <option value={e} key={i}>
                {e.ability.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
export default DropDown;
