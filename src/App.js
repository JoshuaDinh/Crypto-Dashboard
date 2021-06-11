import React, { useEffect } from "react";
import "./App.css";
// Components ----------------
import DataCardContainer from "./Components/DataCard/DataCardContainer";
import SignUpModal from "./Components/authenticationModal/SignUpModal";
import SignInModal from "./Components/authenticationModal/SignInModal";
import Sidebar from "./Components/Sidebar/Sidebar";
import LineGraph from "./Components/LineGraph/LineGraph";
import Searchbar from "./Components/Searchbar/Searchbar";
import BarChart from "./Components/BarChart/BarChart";
import AllTimeData from "./Components/AllTimeData/AllTimeData";
import Table from "./Components/Table/Table";
import NewsCardContainer from "./Components/NewsCard/NewsCardContainer";
import MobileNav from "./Components/MobileNav/MobileNav";
import OpeningAnimation from "./Components/OpeningAnimation/OpeningAnimation";
import Title from "./Components/Title/Title";

// Redux ---------------------
import { connect } from "react-redux";
import { setAuthToken } from "./Actions/authTokenAction";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Sets authorization token from Google_OAuth
import { getTokenFromUrl } from "./GoogleAuth";
import PieChartContainer from "./Components/PieChart/PieChartContainer";

const App = ({
  signUpModal,
  signInModal,
  setAuthToken,
  mobileNav,
  allCoinData,
}) => {
  useEffect(() => {
    const _token = getTokenFromUrl();
    if (_token) {
      setAuthToken(_token);
    }
  }, [setAuthToken]);

  return (
    <Router>
      <Switch>
        <Route path="/crypto">
          <div className="App">
            <OpeningAnimation />
            {signUpModal ? (
              <div className="app-authentication-container">
                <SignUpModal />
              </div>
            ) : signInModal ? (
              <div className="app-authentication-container">
                <SignInModal />
              </div>
            ) : null}
            <div className="app-content">
              {/* <input list={"coins"}></input>{" "}
              {
                <datalist id="coins">
                  <select>
                    {allCoinData?.map((item) => {
                      return <option value={item.id}>{item.id}</option>;
                    })}
                  </select>
                </datalist>
              } */}
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
    // signUpModal: state.signUpModal,
    // signInModal: state.signInModal,
    // newsData: state.newsData.newsData,
    googleAuthToken: state.googleAuthToken,
    mobileNav: state.mobileNav,
    allCoinData: state.allCoinData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthToken: (text) => dispatch(setAuthToken(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
