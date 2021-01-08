import React from "react";
import "./CountdownClock.css";
import padStart from "../../../helpers/padStart";

const CountdownClock = ({ hours, minutes, seconds }) => {
  return (
    <div className="countdown-container">
      <span>{padStart(hours, 2) + ":"}</span>
      <span>{padStart(minutes, 2) + ":"}</span>
      <span>{padStart(seconds, 2)}</span>
    </div>
  );
};

export default CountdownClock;
