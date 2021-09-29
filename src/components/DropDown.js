import React, { Component } from "react";
import Mock from "../mock/MockData";

class DropDown extends Component {
  render() {
    const item = this.props.item;
    return (
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        onChange={(e) => this.props.handler(e.target.value)}
      >
        {item.map((event, index) => {
          return (
            <option value={event.ability.name} key={index}>
              {event.ability.name}
            </option>
          );
        })}
      </select>
    );
  }
}
DropDown.defaultProps = { listVal: Mock };
export default DropDown;
