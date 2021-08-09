import React, { useEffect } from "react";
import "./searchbar.css";

// Redux-------------------
import { connect } from "react-redux";
import { searchCoin, fetchSearchedCoin } from "../../Actions/searchCoinAction";

// Material-ui ------------
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

const Searchbar = ({ setCoin, coinInput, fetchSearchedCoin, selectedCoin }) => {
  const onSubmit = (e, coinInput) => {
    e.preventDefault();
    fetchSearchedCoin(coinInput);
  };

  const handleInput = (e) => {
    setCoin(e.toLowerCase());
  };
  return (
    <div className="searchbar">
      <form onSubmit={(e) => onSubmit(e, coinInput)} className="searchbar-form">
        <input
          className="searchbar-input"
          type="text"
          value={coinInput.searchCoin}
          placeholder="Search for a coin.."
          onChange={(e) => handleInput(e.target.value)}
        />
        <SearchIcon className="icon" />
      </form>
      <div className="searchbar-menu-icon-container">
        <MenuIcon className="icon" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    coinInput: state.searchCoin,
    selectedCoin: state.searchedCoin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCoin: (text) => dispatch(searchCoin(text)),
    fetchSearchedCoin: () => dispatch(fetchSearchedCoin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
