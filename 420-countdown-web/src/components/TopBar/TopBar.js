import React, { useState } from "react";
import "./TopBar.css";
import ReactTooltip from "react-tooltip";
import GitHubButton from "react-github-btn";
import Switch from "react-switch";
import infoIcon from "../../images/info-icon.png";
import useTime from "../../hooks/useTime";

const TopBar = () => {
  const [countUntilPM, setcountUntilPM] = useState(false);

  const { setCountdownDate } = useTime();

  const setCounter = (countUntilPMValue) => {
    setcountUntilPM(!countUntilPMValue);
    setCountdownDate(!countUntilPMValue);
  };

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
        <ReactTooltip place="bottom" multiline={true} />
      </div>
      <div className="top-bar-switch-container">
        <p>AM</p>
        <Switch
          className="top-bar-switch-container-switch"
          onChange={() => setCounter(countUntilPM)}
          checked={countUntilPM}
          uncheckedIcon={false}
          checkedIcon={false}
          handleDiameter={22}
          onColor="#0E3C42"
          offColor="#404040"
          onHandleColor="#2AB5C7"
          offHandleColor="#2AB5C7"
          boxShadow="0 0 0 6px rgb(42, 181, 199, 0.33)"
          activeBoxShadow="0 0 0 2px rgb(42, 181, 199, 0.66)"
          height={23}
          width={45}
        />
        <p>PM</p>
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
