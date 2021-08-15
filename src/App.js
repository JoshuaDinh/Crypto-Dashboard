import React from "react";
import "./App.css";
// Components ----------------
import DataCardContainer from "./Components/DataCard/DataCardContainer";
import LineGraph from "./Components/LineGraph/LineGraph";
import Searchbar from "./Components/Searchbar/Searchbar";
import BarChart from "./Components/BarChart/BarChart";
import AllTimeData from "./Components/AllTimeData/AllTimeData";
import Table from "./Components/Table/Table";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/crypto">
          <div className="App">
            <div className="app-left-container">
              <Table />
            </div>
            <div className="app-right-container">
              <Searchbar />
              <div className="app-flex-container-top">
                <DataCardContainer />
                <BarChart />
              </div>
              <div className="app-flex-container-bottom">
                <LineGraph />
                <AllTimeData />
              </div>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
