import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import DataCard from "./DataCard";
import numeral from "numeral";
import "./dataCard.css";
import { connect } from "react-redux";

const DataCardContainer = ({ selectedCoin }) => {
  return (
    <div className="app-datacard-container">
      <DataCard
        title="Current Price"
        info={`$
        ${numeral(selectedCoin.searchedCoin?.current_price).format("0,0.00")}`}
        selectedCoin={selectedCoin}
      />
      <DataCard
        // Determines arrow color and position based one positive & negative values
        icon={
          selectedCoin.searchedCoin?.price_change_percentage_24h >= 0 ? (
            <ArrowUpwardIcon className="dataCard-arrow-icon dataCard-high" />
          ) : (
            <ArrowDownwardIcon className="dataCard-arrow-icon dataCard-low" />
          )
        }
        title="24hr % Change "
        info={`${
          selectedCoin.searchedCoin?.price_change_percentage_24h
            ? selectedCoin.searchedCoin?.price_change_percentage_24h
            : "0"
        }%`}
        selectedCoin={selectedCoin}
      />
      <DataCard
        highLow="green"
        title="24hr High"
        info={`$ 
        ${numeral(selectedCoin.searchedCoin?.high_24h).format("0,0.00")}`}
        selectedCoin={selectedCoin}
      />
      <DataCard
        highLow="red"
        title="24hr Low"
        info={`$ 
        ${numeral(selectedCoin.searchedCoin?.low_24h).format("0,0.00")}`}
        selectedCoin={selectedCoin}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCoin: state.searchedCoin,
  };
};

export default connect(mapStateToProps)(DataCardContainer);
