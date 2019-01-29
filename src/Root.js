import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";

import reducers from "reducers";

const Root = props => {
  return (
    <Provider
      store={createStore(
        reducers,
        props.initialState || {},
        applyMiddleware(reduxPromise)
      )}
    >
      {props.children}
    </Provider>
  );
};

export default Root;
