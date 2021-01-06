import * as TYPES from "../store/types";

const initialState = null;

export const remainingTimeReducer = (state, action) => {
  state = state || initialState;

  if (action.type === TYPES.SET_REMAININGTIME) {
    return [action.payload];
  } else {
    return state;
  }
};

export default remainingTimeReducer;
