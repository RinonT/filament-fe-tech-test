import { combineReducers } from "redux";
import companiesReducer from "./index";

const reducers = combineReducers({
  companies: companiesReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
