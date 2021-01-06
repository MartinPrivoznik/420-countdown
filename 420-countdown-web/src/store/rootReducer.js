import { combineReducers } from "redux";
import countdownDateReducer from "../reducers/countdownDateReducer";
import remainingTimeReducer from "../reducers/remainingTimeReducer";

const rootReducer = combineReducers({
  remainingTime: remainingTimeReducer,
  countdownDate: countdownDateReducer,
});

export default rootReducer;
