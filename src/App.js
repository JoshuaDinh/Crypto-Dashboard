import React, { useEffect } from "react";
import "./App.css";
// Components ----------------
import DataCardContainer from "./Components/DataCard/DataCardContainer";
import LineGraph from "./Components/LineGraph/LineGraph";
import Searchbar from "./Components/Searchbar/Searchbar";
import BarChart from "./Components/BarChart/BarChart";
import AllTimeData from "./Components/AllTimeData/AllTimeData";
import Table from "./Components/Table/Table";

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
            <div className="app-left-container">
              <Searchbar />
              <Table />
            </div>
            <div className="app-right-container">
              <DataCardContainer />
              <div className="app-flex-container">
                <AllTimeData />
                <BarChart />
              </div>{" "}
              <LineGraph />
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
