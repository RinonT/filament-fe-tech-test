import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import state from "./state";

const configureStore = () => {
  return createStore(reducers, state, applyMiddleware(thunk));
};

export default configureStore;
