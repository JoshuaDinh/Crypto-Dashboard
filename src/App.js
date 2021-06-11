import React, { useEffect } from "react";
import "./App.css";
// Components ----------------
import DataCardContainer from "./Components/DataCard/DataCardContainer";
import LineGraph from "./Components/LineGraph/LineGraph";
import Searchbar from "./Components/Searchbar/Searchbar";
import BarChart from "./Components/BarChart/BarChart";
import AllTimeData from "./Components/AllTimeData/AllTimeData";
import Table from "./Components/Table/Table";
import NewsCardContainer from "./Components/NewsCard/NewsCardContainer";
import OpeningAnimation from "./Components/OpeningAnimation/OpeningAnimation";

// Redux ---------------------
import { connect } from "react-redux";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Sets authorization token from Google_OAuth
import PieChartContainer from "./Components/PieChart/PieChartContainer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/crypto">
          <div className="App">
            <OpeningAnimation />
            <div className="app-content">
              <Searchbar />
              <DataCardContainer />
              <div className="app-graph-bar-container">
                <LineGraph />
                <AllTimeData />
                <BarChart />
              </div>
              <Table />
              {/* <NewsCardContainer /> */}
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
