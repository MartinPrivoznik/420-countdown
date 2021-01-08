import React from "react";
import "./TopBar.css";
import ReactTooltip from "react-tooltip";
import GitHubButton from "react-github-btn";
import infoIcon from "../../images/info-icon.png";

const TopBar = () => {
  return (
    <div className="top-bar">
      <p>420 Countdown - BETA</p>
      <div className="top-bar-info">
        <img
          className="top-bar-info-img"
          src={infoIcon}
          data-tip="This page is still in BETA version. <br/> 
                    Feel free to collaborate via github and make this page grow. <br/>
                    The goal is to make this the best place to stay at before 4:20 hits the clock."
          alt="info"
        />
        <ReactTooltip place="bottom" offset={{ top: 15, left: 15 }} multiline={true} />
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
