import TimeModel from "../models/TimeModel";
import * as TYPES from "../store/types";

const initialState = TimeModel.getCountdownDateTime();

export const countdownDateReducer = (state, action) => {
  state = state || initialState;

  if (action.type === TYPES.SET_COUNTDOWNDATE) {
    return [...action.payload];
  } else {
    return state;
  }
};

export default countdownDateReducer;
