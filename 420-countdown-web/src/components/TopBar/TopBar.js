import React from "react";
import "./TopBar.css";
import GitHubButton from "react-github-btn";

const { useState, useEffect } = React;

const TopBar = () => {
  const [countdownDate, setCountdownDate] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="top-bar">
      <p>420 Countdown</p>
      <div className="top-bar-git">
        <GitHubButton
          href="https://github.com/MartinPrivoznik/420-countdown/tree/main/420-countdown-web"
          data-color-scheme="no-preference: dark; light: light; dark: dark;"
          data-size="large"
          aria-label="Watch MartinPrivoznik/420-countdown on GitHub"
        >
          Contribute to source
        </GitHubButton>
      </div>
    </div>
  );
};

export default TopBar;
