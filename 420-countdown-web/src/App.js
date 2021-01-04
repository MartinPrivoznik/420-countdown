import Time from "./components/Time/Time";
import TopBar from "./components/TopBar/TopBar";
import leaf from "./images/leaf.png";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <img src={leaf} className="Leaf" />
      <TopBar />
      <Time />
    </div>
  );
};

export default App;
