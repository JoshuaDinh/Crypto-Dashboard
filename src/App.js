import React, { useEffect } from "react";
import "./App.css";
// components ----------------
import DataCard from "./Components/DataCard/DataCard";
import Sidebar from "./Components/Sidebar/Sidebar";
import LineGraph from "./Components/LineGraph/LineGraph";
import Searchbar from "./Components/Searchbar/Searchbar";
import BarChart from "./Components/BarChart/BarChart";
import AllTimeData from "./Components/AllTimeData/AllTimeData";
import Table from "./Components/Table/Table";

// material-ui icons ---------
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

// redux ---------------------
import { connect } from "react-redux";
import { fetchAllCoinData } from "./Actions/allCoinDataAction";

const App = () => {
  useEffect(() => {
    fetchAllCoinData();
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <div className="app-content">
        <Searchbar />
        <div className="app-datacard-container">
          <DataCard info=" 57,400" />
          <DataCard info="18%" />
          <DataCard info="25%" />
          <DataCard info="s-90%" />
        </div>
        <div className="app-graph-bar-container">
          <LineGraph />
          <AllTimeData />
          <BarChart />
        </div>
        <Table />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allCoinData: state.allCoinData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCoinData: dispatch(fetchAllCoinData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
