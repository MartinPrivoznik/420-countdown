import Time from "./components/Time/Time";
import TopBar from "./components/TopBar/TopBar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Time />
    </div>
  );
};

export default App;
