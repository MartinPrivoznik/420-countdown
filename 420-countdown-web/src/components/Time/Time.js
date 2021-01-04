import React from "react";
import "./styles.css";
import TimeModel from "../../models/TimeModel";

const { useState, useEffect } = React;

const Time = () => {
  const [countdownDate, setCountdownDate] = useState(
    TimeModel.getCountdownDateTime()
  );

  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => updateCountdown(), 1000);
  }, []);

  const updateCountdown = () => {
    if (countdownDate) {
      // Get the current time

      const currentTime = new Date().getTime();

      // Get the time remaining until the countdown date
      const distanceToDate = countdownDate - currentTime;

      // Calculate days, hours, minutes and seconds remaining
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      // For visual appeal, add a zero to each number that's only one digit
      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      // Set the state to each new time
      setState({ hours: hours, minutes: minutes, seconds: seconds });
    }
  };

  return (
    <div>
      <div className="countdown-container">
        <span className="time">{state.hours + ":"}</span>
        <span className="time">{state.minutes + ":"}</span>
        <span className="time">{state.seconds}</span>
      </div>
    </div>
  );
};

export default Time;
