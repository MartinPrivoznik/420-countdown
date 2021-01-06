import { useDispatch, useSelector } from "react-redux";
import updateRemainingTime from "../actions/updateRemainingTime";

import TimeModel from "../models/TimeModel";

const useTime = () => {
  const dispatch = useDispatch();
  const remainingTime = useSelector((state) => state.remainingTime);
  const countdownDate = useSelector((state) => state.countdownDate);

  const getRemainingTime = () => {
    const rmntm = TimeModel.getRemainingTime(countdownDate);

    dispatch(updateRemainingTime(rmntm));
  };

  return {
    remainingTime,
    countdownDate,
    getRemainingTime,
  };
};

export default useTime;
