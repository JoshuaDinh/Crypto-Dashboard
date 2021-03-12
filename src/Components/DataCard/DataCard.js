import React from "react";
import "./dataCard.css";
import { connect } from "react-redux";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const DataCard = ({ info, title, icon, highLow, selectedCoin }) => {
  return (
    <div className="dataCard">
      <div
        className={`dataCard-header ${
          highLow === "green"
            ? "dataCard-high"
            : highLow === "red"
            ? "dataCard-low"
            : null
        }`}
      >
        {title}
      </div>
      <div className="dataCard-info-container">
        {icon}
        <div
          className={`dataCard-info ${
            highLow === "green"
              ? "dataCard-high"
              : highLow === "red"
              ? "dataCard-low"
              : null
          }`}
        >
          {info}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allCoinData: state.allCoinData,
    selectedCoin: state.searchCoin,
  };
};

export default connect(mapStateToProps)(DataCard);
