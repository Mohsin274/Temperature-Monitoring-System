import ButtonGroup from "./components/dock/ButtonGroup";
import Sidebar from "./components/sidebar/Sidebar";
import TemperatureGraph from "./components/temperature-graph/TemperatureGraph";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="container">
        <div className="flex">
          <h1>Temperature</h1>
          <ButtonGroup />
        </div>
        <TemperatureGraph />
      </div>
    </div>
  );
}

export default App;
