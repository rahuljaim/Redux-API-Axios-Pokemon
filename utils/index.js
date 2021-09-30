import checkPropTypes from "check-prop-types";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

export const findByTestArr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};

const mockStore = configureStore([thunk]);
export const testStore = (state = {}) => {
  return mockStore({ ...state });
};
