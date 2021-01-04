import Time from "./components/Time/Time";
import leaf from "./images/leaf.png";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <img src={leaf} className="Leaf" />
      <Time />
    </div>
  );
};

export default App;
