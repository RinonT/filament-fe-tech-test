import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actionTypes";

export const getCompanies = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_COMPANIES_PENDING,
    });

    try {
      const { data } = await axios.get(`http://localhost:4000/companies`);
      dispatch({
        type: ActionType.GET_COMPANIES_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_COMPANIES_FAIL,
        payload: err.message,
      });
    }
  };
};
