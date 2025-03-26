import React from "react";
import cls from "./TopBar.module.css";
import GitHubButton from "react-next-github-btn";
import Switch from "react-switch";
import InfoTooltip from "./InfoTooltip/InfoTooltip";
import useTime from "../../hooks/useTime";
import { useState } from "react";

const TopBar = () => {
  const [countUntilPM, setcountUntilPM] = useState(false);

  const { toggleCountToPMSwitch } = useTime();

  const setCounter = (countUntilPMValue) => {
    toggleCountToPMSwitch();
    setcountUntilPM(!countUntilPMValue);
  };

  return (
    <div className={cls["top-bar"]}>
      <h1>420 Countdown</h1>
      <InfoTooltip />
      <div className={cls["top-bar-switch-container"]}>
        <p>AM</p>
        <Switch
          className={cls["top-bar-switch-container-switch"]}
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
      <div className={cls["top-bar-git"]}>
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
