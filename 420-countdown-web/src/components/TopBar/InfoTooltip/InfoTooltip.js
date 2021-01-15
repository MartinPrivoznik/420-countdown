import React, { useEffect } from "react";
import cls from "./InfoTooltip.module.css";
import ReactTooltip from "react-tooltip";
import { useState } from "react";

const InfoTooltip = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    setShowTooltip(true);
  }, []);

  if (showTooltip) {
    return (
      <div
        className={cls["tooltip"]}
        data-tip="This page is still in BETA version. <br/> 
                    Feel free to collaborate via github and make this page grow. <br/>
                    The goal is to make this the best place to stay at before 4:20 hits the clock."
      >
        <ReactTooltip place="bottom" multiline={true} />
      </div>
    );
  } else {
    return <></>;
  }
};

export default InfoTooltip;
