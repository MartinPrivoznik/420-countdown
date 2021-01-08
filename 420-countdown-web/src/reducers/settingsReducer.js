import * as TYPES from "../store/types";

const initialState = {
  countToPM: false,
};

export const settingsReducer = (state, action) => {
  state = state || initialState;

  if (action.type === TYPES.SET_COUNT_TO_PM) {
    return {
      ...state,
      countToPM: action.payload,
    };
  } else {
    return state;
  }
};

export default settingsReducer;
