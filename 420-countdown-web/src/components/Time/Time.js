import React from "react";
import TimeModel from "../../models/TimeModel";
import "./styles.css";

const { useState, useEffect } = React;

const Time = () => {
  const [countdownDate, setCountdownDate] = useState(null);

  const [state, setState] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (countdownDate) {
      setInterval(() => updateCountdown(), 1000);
    }
    setCountdownDate(TimeModel.getCountdownDateTime());
  }, [countdownDate]);

  const updateCountdown = () => {
    if (countdownDate) {
      // Get the current time

      const currentTime = new Date().getTime();

      // Get the time remaining until the countdown date
      const distanceToDate = countdownDate - currentTime;

      // Calculate days, hours, minutes and seconds remaining
      let hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        .toString()
        .padStart(2, "0");
      let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60))
        .toString()
        .padStart(2, "0");
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000)
        .toString()
        .padStart(2, "0");

      // Set the state to each new time
      setState({ hours: hours, minutes: minutes, seconds: seconds });
    }
  };

  return (
    <div className="countdown-container">
      <span>{state.hours + ":"}</span>
      <span>{state.minutes + ":"}</span>
      <span>{state.seconds}</span>
    </div>
  );
};

export default Time;
