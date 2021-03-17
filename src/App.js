import React from "react";
import "./App.css";
// Components ----------------
import DataCardContainer from "./Components/DataCard/DataCardContainer";
import SignUpModal from "./Components/SignUpModal/SignUpModal";
import SignInModal from "./Components/SignInModal/SignInModal";
import Sidebar from "./Components/Sidebar/Sidebar";
import LineGraph from "./Components/LineGraph/LineGraph";
import Searchbar from "./Components/Searchbar/Searchbar";
import BarChart from "./Components/BarChart/BarChart";
import AllTimeData from "./Components/AllTimeData/AllTimeData";
import Table from "./Components/Table/Table";
import NewsCardContainer from "./Components/NewsCard/NewsCardContainer";

// Redux ---------------------
import { connect } from "react-redux";
// numeral--------------------

const App = ({ signUpModal, signInModal }) => {
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
        <DataCardContainer />
        <div className="app-graph-bar-container">
          <LineGraph />
          <AllTimeData />
          <BarChart />
        </div>
        <Table />
        <NewsCardContainer />
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

export default connect(mapStateToProps)(App);
