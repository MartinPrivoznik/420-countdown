import React from "react";
import TopBar from "./components/TopBar/TopBar";
import cls from "./App.module.css";
import TimePage from "./components/Time/TimePage";
import useTime from "./hooks/useTime";

const App = () => {
  const { countdownDate, settings } = useTime();

  return (
    <div>
      <div className={cls["App"]}>
        <TopBar />
        <TimePage dateLeft={countdownDate} key={settings.countToPM} />
      </div>
      <div className={cls["rain-container"]}></div>
    </div>
  );
};

export default App;
