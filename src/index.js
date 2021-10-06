import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./Apps/App";
import store from "./Apps/store/store";

function rendertoDOM() {
  const root = document.getElementById("root");
  if (root !== null) {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      root
    );
  }
}
rendertoDOM();
export { rendertoDOM };
