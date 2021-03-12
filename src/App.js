import "./App.css";
import DataCard from "./Components/DataCard/DataCard";
import Sidebar from "./Components/Sidebar/Sidebar";
import LineGraph from "./Components/LineGraph/LineGraph";
import Searchbar from "./Components/Searchbar/Searchbar";
import BarChart from "./Components/BarChart/BarChart";
import AllTimeData from "./Components/AllTimeData/AllTimeData";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="app-content">
        <Searchbar />
        <div className="app-datacard-container">
          <DataCard />
          <DataCard />
          <DataCard />
          <DataCard />
        </div>
        <div className="app-graph-bar-container">
          <LineGraph />
          <AllTimeData />
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default App;
