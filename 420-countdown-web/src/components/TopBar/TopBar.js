import React from "react";
import "./TopBar.css";

const { useState, useEffect } = React;

const TopBar = () => {
  const [countdownDate, setCountdownDate] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="top-bar-container">
      <p>420 Countdown</p>
    </div>
  );
};

export default TopBar;
