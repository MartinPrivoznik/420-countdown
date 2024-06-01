import React from "react";
import TopBar from "./TopBar/TopBar";
import cls from "./App.module.css";
import TimePage from "./Time/TimePage";
import useTime from "../hooks/useTime";
import Footer from "./Footer/Footer";

const App = () => {
  const { countdownDate, settings } = useTime();

  return (
    <>
      {/* <div className={cls["rain-container"]}>
        <span style={{ animationDelay: "0.5s" }} />
        <span style={{ animationDelay: "0.7s", left: "8%" }} />
        <span style={{ animationDelay: "0.9s", left: "20%" }} />
        <span style={{ animationDelay: "1.3s", left: "43%" }} />
        <span style={{ animationDelay: "1.7s", left: "68%" }} />
        <span style={{ animationDelay: "1.9s", left: "81%" }} />
      </div> */}
      <div className={cls["app"]}>
        <TopBar />
        <TimePage dateLeft={countdownDate} key={settings.countToPM} />
        <Footer />
      </div>
    </>
  );
};

export default App;
