import React, { useEffect } from "react";
import "./searchbar.css";

// Redux-------------------
import { connect } from "react-redux";
import { searchCoin, fetchSearchedCoin } from "../../Actions/searchCoinAction";
// import { fetchSearchedCoin } from "../../Actions/searchCoinAction";

// Material-ui ------------
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

const Searchbar = ({
  searchCoin,
  fetchSearchedCoin,
  selectedCoin,
  allCoinData,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchSearchedCoin(selectedCoin);
    }, 1500);
    return () => clearTimeout(timer);
  }, [selectedCoin, fetchSearchedCoin]);

  return (
    <div className="searchbar">
      <form onSubmit={(e) => e.preventDefault()} className="searchbar-form">
        <input
          className="searchbar-input"
          list={"coins"}
          type="text"
          placeholder="Search for a coin.."
          onChange={(e) => searchCoin(e.target.value)}
        />
        <datalist id="coins">
          {allCoinData?.map((item) => {
            return <option value={item.id}>{item.id}</option>;
          })}
        </datalist>
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
    selectCoin: state.searchCoin,
    selectedCoin: state.searchedCoin,
    allCoinData: state.allCoinData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchCoin: (text) => dispatch(searchCoin(text)),
    fetchSearchedCoin: () => dispatch(fetchSearchedCoin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
