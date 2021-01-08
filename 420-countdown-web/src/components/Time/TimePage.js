import React from "react";
import "./TimePage.css";
import Countdown from "react-countdown";
import CountdownClock from "./CountdownClock/CountdownClock";
import useTime from "../../hooks/useTime";

const TimePage = ({ dateLeft }) => {
  const { setRemainingTime } = useTime();

  const countdownClockRenderer = ({ hours, minutes, seconds }) => {
    return <CountdownClock hours={hours} minutes={minutes} seconds={seconds} />;
  };

  const countdownClockOnTick = ({ hours, minutes, seconds }) => {
    setRemainingTime({ hours: hours, minutes: minutes, seconds: seconds });
  };

  if (dateLeft) {
    return <Countdown date={dateLeft} renderer={countdownClockRenderer} onTick={countdownClockOnTick} />;
  }
  return <></>;
};

export default TimePage;
