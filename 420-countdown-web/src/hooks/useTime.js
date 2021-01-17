import { useDispatch, useSelector } from "react-redux";
import toggleCountToPM from "../actions/toggleCountToPM";
import updateCountdownDate from "../actions/updateCountdownDate";
import updateRemainingTime from "../actions/updateRemainingTime";
import updateIs420 from "../actions/updateIs420";

import TimeModel from "../models/TimeModel";

const useTime = () => {
  const dispatch = useDispatch();
  const remainingTime = useSelector((state) => state.remainingTime);
  const countdownDate = useSelector((state) => state.countdownDate);
  const settings = useSelector((state) => state.settingsReducer);

  const setRemainingTime = (time) => {
    dispatch(updateRemainingTime(time));
  };

  const setCountdownDate = (countdownDate) => {
    dispatch(updateCountdownDate(countdownDate));
  };

  const toggleCountToPMSwitch = () => {
    const newCountToPM = !settings.countToPM;
    dispatch(updateCountdownDate(TimeModel.getCountdownDateTime(newCountToPM)));
    dispatch(toggleCountToPM(newCountToPM));
  };

  const setIs420 = (is420) => {
    console.log(is420);
    dispatch(updateIs420(is420));
  };

  return {
    remainingTime,
    countdownDate,
    settings,
    setRemainingTime,
    setCountdownDate,
    toggleCountToPMSwitch,
    setIs420
  };
};

export default useTime;
