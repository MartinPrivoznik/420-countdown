import React from "react";
import TopBar from "./TopBar/TopBar";
import cls from "./App.module.css";
import TimePage from "./Time/TimePage";
import useTime from "../hooks/useTime";
import Footer from "./Footer/Footer";

const App = () => {
  const { countdownDate, settings } = useTime();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "420 Countdown",
    url: "https://420-countdown.com",
    description:
      "Countdown to the next 4:20. Stay updated with the exact time left until the next 4:20 celebration.",
    publisher: {
      "@type": "Organization",
      name: "420 Countdown",
      url: "https://420-countdown.com",
      logo: {
        "@type": "ImageObject",
        url: "https://420-countdown.com/logo512.png",
      },
    },
    mainEntity: {
      "@type": "WebPageElement",
      name: "Countdown Timer",
      description: "A timer counting down to the next 4:20.",
      url: "https://420-countdown.com",
    },
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default App;
