import React, { Component } from "react";
import PropTypes from "prop-types";
import Mock from "../mock/MockData";

class DropDown extends Component {
  submitEvent(event) {
    if (this.props.emitEvent) {
      this.props.emitEvent(event);
    }
  }
  render() {
    const item = this.props.item;
    return (
      <select
        data-test="selectcomponent"
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        onChange={(e) => this.submitEvent(e.target.value)}
      >
        {item.length &&
          item.map((event, index) => {
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
DropDown.propTypes = {
  item: PropTypes.array,
  emitEvent: PropTypes.func,
};
DropDown.defaultProps = { listVal: Mock };
export default DropDown;
