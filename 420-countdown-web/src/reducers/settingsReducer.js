import * as TYPES from "../store/types";

const today = new Date();

const initialState = {
  countToPM: false,
  is420: today.getHours() == 4 && today.getMinutes == 20 ? true : false
};

export const settingsReducer = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case TYPES.SET_COUNT_TO_PM:
      return {
        ...state,
        countToPM: action.payload
      };
    case TYPES.SET_IS_420:
      return {
        ...state,
        is420: action.payload
      };
    default:
      return state;
  }
};

export default settingsReducer;
