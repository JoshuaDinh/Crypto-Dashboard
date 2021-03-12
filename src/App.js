import "./App.css";
import DataCard from "./Components/DataCard/DataCard";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="app-content">
        <DataCard />
      </div>
    </div>
  );
};

export default App;
