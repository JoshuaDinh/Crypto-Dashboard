import React, { useEffect } from "react";
import "./searchbar.css";

// Redux-------------------
import { connect } from "react-redux";
import { searchCoin, fetchSearchedCoin } from "../../Actions/searchCoinAction";

// Material-ui ------------
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

const Searchbar = ({ setCoin, coinInputValue, fetchSearchedCoin }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        fetchSearchedCoin(coinInputValue);
      } catch (err) {
        alert(err);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [coinInputValue, fetchSearchedCoin]);

  return (
    <div className="searchbar">
      <form onSubmit={(e) => e.preventDefault()} className="searchbar-form">
        <input
          className="searchbar-input"
          type="text"
          value={coinInputValue.searchCoin}
          placeholder="Search for a coin.."
          onChange={(e) => setCoin(e.target.value)}
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
    coinInputValue: state.searchCoin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCoin: (text) => dispatch(searchCoin(text)),
    fetchSearchedCoin: () => dispatch(fetchSearchedCoin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
