"use client";

import React, { useEffect, useState } from "react";
import cls from "./TimePage.module.css";
import Countdown from "react-countdown";
import CountdownClock from "../../renderers/CountdownClock/CountdownClock";
import useTime from "../../hooks/useTime";

const TimePage = ({ dateLeft }) => {
  const [isClient, setIsClient] = useState(false);
  const { setRemainingTime, setIs420 } = useTime();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const countdownClockRenderer = ({ hours, minutes, seconds }) => {
    return <CountdownClock hours={hours} minutes={minutes} seconds={seconds} />;
  };

  const countdownClockOnTick = ({ hours, minutes, seconds, completed }) => {
    setIs420(completed);
    setRemainingTime({ hours: hours, minutes: minutes, seconds: seconds });
  };

  if (dateLeft && isClient) {
    return (
      <Countdown
        date={dateLeft}
        renderer={countdownClockRenderer}
        onTick={countdownClockOnTick}
      />
    );
  }
  return <></>;
};

export default TimePage;
