import React, { useEffect } from "react";
import "./searchbar.css";

// Redux-------------------
import { connect } from "react-redux";
import { searchCoin } from "../../Actions/searchCoinAction";
import { fetchSearchedCoin } from "../../Actions/searchCoinAction";
import { displaySignUpModal } from "../../Actions/authenticationAction";

// Material-ui ------------
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";

const Searchbar = ({
  searchCoin,
  fetchSearchedCoin,
  selectCoin,
  selectedCoin,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSearchedCoin(selectedCoin);
    }, 2000);
    return () => clearTimeout(timer);
  }, [selectCoin]);

  return (
    <div className="searchbar">
      <form className="searchbar-form">
        <input
          className="searchbar-input"
          type="text"
          placeholder="Search for a coin.."
          onChange={(e) => searchCoin(e.target.value)}
        />
        <SearchIcon className="icon" />
      </form>
      <div className="searchbar-menu-icon-container">
        <MenuIcon className="icon" />
      </div>
      <div className="searchbar-icons-container">
        <Avatar />
        <SettingsIcon className="icon" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectCoin: state.searchCoin,
    selectedCoin: state.searchedCoin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchCoin: (text) => dispatch(searchCoin(text)),
    fetchSearchedCoin: () => dispatch(fetchSearchedCoin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
