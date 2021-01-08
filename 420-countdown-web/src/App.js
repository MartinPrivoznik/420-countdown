import React from "react";
import TopBar from "./components/TopBar/TopBar";
import "./App.css";
import TimePage from "./components/Time/TimePage";
import useTime from "./hooks/useTime";

const App = () => {
  const time = useTime();

  return (
    <div className="App">
      <TopBar />
      <TimePage dateLeft={time.countdownDate} />
    </div>
  );
};

export default App;
