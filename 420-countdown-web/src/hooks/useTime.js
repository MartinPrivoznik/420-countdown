import { useDispatch, useSelector } from "react-redux";
import updateCountdownDate from "../actions/updateCountdownDate";
import updateRemainingTime from "../actions/updateRemainingTime";

import TimeModel from "../models/TimeModel";

const useTime = () => {
  const dispatch = useDispatch();
  const remainingTime = useSelector((state) => state.remainingTime);
  const countdownDate = useSelector((state) => state.countdownDate);

  const setRemainingTime = (time) => {
    dispatch(updateRemainingTime(time));
  };

  const setCountdownDate = (countUntilPM) => {
    dispatch(updateCountdownDate(TimeModel.getCountdownDateTime(countUntilPM)));
  };

  return {
    remainingTime,
    countdownDate,
    setRemainingTime,
    setCountdownDate
  };
};

export default useTime;
