import { Company } from "../types";

export enum ActionType {
  GET_COMPANIES_PENDING = "GET_COMPANIES_PENDING",
  GET_COMPANIES_SUCCESS = "GET_COMPANIES_SUCCESS",
  GET_COMPANIES_FAIL = "GET_COMPANIES_FAIL",
}

interface actionPending {
  type: ActionType.GET_COMPANIES_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_COMPANIES_SUCCESS;
  payload: Company[];
}

interface actionFail {
  type: ActionType.GET_COMPANIES_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
