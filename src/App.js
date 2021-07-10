import React, { useEffect } from "react";
import "./App.css";
// Components ----------------
import DataCardContainer from "./Components/DataCard/DataCardContainer";
import LineGraph from "./Components/LineGraph/LineGraph";
import Searchbar from "./Components/Searchbar/Searchbar";
import BarChart from "./Components/BarChart/BarChart";
import AllTimeData from "./Components/AllTimeData/AllTimeData";
import Table from "./Components/Table/Table";
import OpeningAnimation from "./Components/OpeningAnimation/OpeningAnimation";

// Redux ---------------------
import { connect } from "react-redux";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/crypto">
          <div className="App">
            <div className="app-content">
              <Searchbar />
              <DataCardContainer />
              <div className="app-graph-bar-container">
                <LineGraph />
                <AllTimeData />
                <BarChart />
              </div>
              <Table />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCoin: state.searchedCoin,
  };
};

export default connect(mapStateToProps)(App);
