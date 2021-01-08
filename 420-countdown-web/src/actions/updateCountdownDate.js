import * as TYPES from "../store/types";

const updateCountdownDate = ({ countdownDate }) => (dispatch) => {
  dispatch({
    type: TYPES.SET_COUNTDOWNDATE,
    payload: countdownDate
  });
};

export default updateCountdownDate;
