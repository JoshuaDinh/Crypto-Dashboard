import React, { useEffect } from "react";
import "./App.css";
// Components ----------------
import DataCard from "./Components/DataCard/DataCard";
import Sidebar from "./Components/Sidebar/Sidebar";
import LineGraph from "./Components/LineGraph/LineGraph";
import Searchbar from "./Components/Searchbar/Searchbar";
import BarChart from "./Components/BarChart/BarChart";
import AllTimeData from "./Components/AllTimeData/AllTimeData";
import Table from "./Components/Table/Table";

// Material-ui icons ---------
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

// Redux ---------------------
import { connect } from "react-redux";
import { fetchAllCoinData } from "./Actions/allCoinDataAction";
import NewsCard from "./Components/NewsCard/NewsCard";

const App = ({ selectedCoin, fetchAllCoinData }) => {
  useEffect(() => {
    fetchAllCoinData();
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <div className="app-content">
        <Searchbar />
        <div className="app-datacard-container">
          <DataCard
            title="Current Price"
            info={`$${selectedCoin.searchedCoin?.current_price}`}
          />
          <DataCard
            icon={<ArrowDownwardIcon className="dataCard-arrow-icon" />}
            title="24hr % Change "
            info={`${selectedCoin.searchedCoin?.price_change_percentage_24h}%`}
          />
          <DataCard
            highLow="green"
            title="24hr High"
            info={`$ ${selectedCoin.searchedCoin?.high_24h}`}
          />
          <DataCard
            highLow="red"
            title="24hr Low"
            info={`$ ${selectedCoin.searchedCoin?.low_24h}`}
          />
        </div>
        <div className="app-graph-bar-container">
          <LineGraph />
          <AllTimeData />
          <BarChart />
        </div>
        <div className="app-newsCard-container">
          <div className="app-newsCard-arrow-container">
            <ArrowForwardIosIcon className="app-newsCard-arrow-icon" />
          </div>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <div className="app-table-container">
          <Table />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    allCoinData: state.allCoinData,
    selectedCoin: state.searchedCoin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCoinData: () => dispatch(fetchAllCoinData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
