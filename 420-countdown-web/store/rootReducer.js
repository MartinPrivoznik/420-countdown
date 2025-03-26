import { combineReducers } from "redux";
import countdownDateReducer from "../reducers/countdownDateReducer";
import remainingTimeReducer from "../reducers/remainingTimeReducer";
import settingsReducer from "../reducers/settingsReducer";

const rootReducer = combineReducers({
  remainingTime: remainingTimeReducer,
  countdownDate: countdownDateReducer,
  settingsReducer: settingsReducer,
});

export default rootReducer;
