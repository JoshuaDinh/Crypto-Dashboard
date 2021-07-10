import React from "react";
import "./dataCard.css";

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
      {!selectedCoin.searchedCoin == undefined ? (
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
      ) : (
        <div className="loading">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      )}
    </div>
  );
};

export default DataCard;
