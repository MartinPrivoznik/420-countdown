import Time from "./components/Time/Time";
import leafImage from "./images/mascot.png";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <img src={leafImage} className="leaf-img-cls" />
      <Time />
    </div>
  );
};

export default App;
