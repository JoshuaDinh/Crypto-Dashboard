import React from "react";
import "./searchbar.css";
import bcIcon from "../../images/bcIcon.png";
// Redux-------------------
import { connect } from "react-redux";
import { searchCoin, fetchSearchedCoin } from "../../Actions/searchCoinAction";

// Material-ui ------------
import SearchIcon from "@material-ui/icons/Search";

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
      {selectedCoin.searchedCoin.image ? (
        <img
          src={selectedCoin.searchedCoin.image}
          alt="#"
          className="searchbar-coin-avatar"
        />
      ) : (
        <img src={bcIcon} alt="#" className="searchbar-coin-avatar" />
      )}

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
