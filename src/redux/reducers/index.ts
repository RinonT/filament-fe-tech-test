import { Action, ActionType } from "../actionTypes/index";
import { Company } from "../types";

interface State {
  companies: Company[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  companies: [],
  loading: false,
  error: null,
};

const companiesReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionType.GET_COMPANIES_PENDING:
      return {
        loading: true,
        companies: [],
        error: null,
      };
    case ActionType.GET_COMPANIES_SUCCESS:
      return {
        loading: false,
        companies: action.payload,
        error: null,
      };
    case ActionType.GET_COMPANIES_FAIL:
      return {
        loading: false,
        error: action.payload,
        companies: [],
      };
    default:
      return state;
  }
};

export default companiesReducer;
