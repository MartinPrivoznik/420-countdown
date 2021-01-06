import React from "react";
import "./TopBar.css";
import ReactTooltip from "react-tooltip";
import GitHubButton from "react-github-btn";
import infoIcon from "../../images/info-icon.png";

const { useState, useEffect } = React;

const TopBar = () => {
  const [countdownDate, setCountdownDate] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="top-bar">
      <p>420 Countdown - BETA</p>
      <div className="top-bar-info">
        <img src={infoIcon} data-tip="hello world" height="30" width="30" />
        <ReactTooltip />
      </div>
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
