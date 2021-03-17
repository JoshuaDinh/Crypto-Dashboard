import React, { useEffect } from "react";
import "./App.css";
// Components ----------------
import DataCard from "./Components/DataCard/DataCard";
import SignUpModal from "./Components/SignUpModal/SignUpModal";
import SignInModal from "./Components/SignInModal/SignInModal";
import Sidebar from "./Components/Sidebar/Sidebar";
import LineGraph from "./Components/LineGraph/LineGraph";
import Searchbar from "./Components/Searchbar/Searchbar";
import BarChart from "./Components/BarChart/BarChart";
import AllTimeData from "./Components/AllTimeData/AllTimeData";
import Table from "./Components/Table/Table";
// Material-ui icons ---------
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
// Redux ---------------------
import { connect } from "react-redux";
import { fetchNewsData } from "./Actions/newsDataAction";
import NewsCard from "./Components/NewsCard/NewsCard";
// numeral--------------------
import numeral from "numeral";

const App = ({
  selectedCoin,
  signUpModal,
  signInModal,
  fetchNewsData,
  newsData,
}) => {
  // useEffect(() => {
  //   fetchNewsData();
  // }, []);

  return (
    <div className="App">
      {signUpModal ? (
        <div className="app-authentication-container">
          <SignUpModal />
        </div>
      ) : signInModal ? (
        <div className="app-authentication-container">
          <SignInModal />
        </div>
      ) : null}
      <Sidebar />
      <div className="app-content">
        <Searchbar />
        <div className="app-datacard-container">
          <DataCard
            title="Current Price"
            info={`$${numeral(selectedCoin.searchedCoin?.current_price).format(
              "0,0"
            )}`}
          />
          <DataCard
            icon={<ArrowDownwardIcon className="dataCard-arrow-icon" />}
            title="24hr % Change "
            info={`${selectedCoin.searchedCoin?.price_change_percentage_24h}%`}
          />
          <DataCard
            highLow="green"
            title="24hr High"
            info={`$ ${numeral(selectedCoin.searchedCoin?.high_24h).format(
              "0,0"
            )}`}
          />
          <DataCard
            highLow="red"
            title="24hr Low"
            info={`$ ${numeral(selectedCoin.searchedCoin?.low_24h).format(
              "0,0"
            )}`}
          />
        </div>
        <div className="app-graph-bar-container">
          <LineGraph />
          <AllTimeData />
          <BarChart />
        </div>
        <div className="app-table-container">
          <Table />
        </div>
        <div className="app-newsCard-container">
          <div className="app-newsCard-header-container">
            <h1 className="app-newsCard-header">See Whats New</h1>
            <div className="app-newsCard-header-break"></div>
          </div>
          {newsData.map((story) => {
            return (
              <a
                className="app-newsCard-link"
                href={story.longURL}
                target="_blank"
              >
                <NewsCard
                  key={story.id}
                  title={story.title}
                  image={story.image}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    selectedCoin: state.searchedCoin,
    signUpModal: state.signUpModal,
    signInModal: state.signInModal,
    newsData: state.newsData.newsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewsData: () => dispatch(fetchNewsData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
