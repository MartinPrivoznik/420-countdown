import React from "react";
import cls from "./Time.module.css";

var dummy = "420";
const Time = () => {
  return (
    <div className={`${cls["time-string-container"]}`}>
      <div className="time-string">
        <span>{dummy}</span>
      </div>
    </div>
  );
};
export default Time;
