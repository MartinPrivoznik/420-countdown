import * as TYPES from "../store/types";

const updateIs420 = (is420) => (dispatch) => {
  dispatch({
    type: TYPES.SET_IS_420,
    payload: is420
  });
};

export default updateIs420;
