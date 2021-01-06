import * as TYPES from "../store/types";

const updateRemainingTime = (remainingTime) => (dispatch) => {
  dispatch({
    type: TYPES.SET_REMAININGTIME,
    payload: remainingTime,
  });
};

export default updateRemainingTime;
