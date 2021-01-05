import Time from "./components/Time/Time";
import TopBar from "./components/TopBar/TopBar";
import leafImage from "./images/mascot.png";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <img src={leafImage} className="leaf-img-cls" />
      <Time />
    </div>
  );
};

export default App;
