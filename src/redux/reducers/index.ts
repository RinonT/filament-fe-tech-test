import { combineReducers } from "redux";
import { FETCH_COMPANIES } from "../actions";

export const companyList = (
  state = "",
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case FETCH_COMPANIES:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  companyList,
});
