import React from "react";
import "./dataCard.css";

const DataCard = ({ info, title, icon, highLow }) => {
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
        <div className="dataCard-info ">{info}</div>
      </div>
    </div>
  );
};

export default DataCard;
