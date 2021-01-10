import React from "react";
import TopBar from "./components/TopBar/TopBar";
import "./App.css";
import TimePage from "./components/Time/TimePage";
import useTime from "./hooks/useTime";

const App = () => {
  const { countdownDate, settings } = useTime();

  return (
    <div>
      <div className="App">
        <TopBar />
        <TimePage dateLeft={countdownDate} key={settings.countToPM} />
      </div>
      <div className="rain-container"></div>
    </div>
  );
};

export default App;
