import * as TYPES from "../store/types";

const toggleCountToPM = (countToPM) => (dispatch) => {
  dispatch({
    type: TYPES.SET_COUNT_TO_PM,
    payload: countToPM,
  });
};

export default toggleCountToPM;
