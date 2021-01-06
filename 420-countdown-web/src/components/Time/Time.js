import React from "react";
import useTime from "../../hooks/useTime";
import "./Time.css";

const { useEffect } = React;

const Time = () => {
  const time = useTime();

  useEffect(() => {
    setInterval(() => {
      time.getRemainingTime();
    }, 1000);
  }, []);

  if (time.remainingTime) {
    console.log(time.remainingTime);
    return (
      <div className="countdown-container">
        <span>{time.remainingTime[0].hours + ":"}</span>
        <span>{time.remainingTime[0].minutes + ":"}</span>
        <span>{time.remainingTime[0].seconds}</span>
      </div>
    );
  }

  return <></>;
};

export default Time;
