import React from "react";
import "./dataCard.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const DataCard = ({ info }) => {
  return (
    <div className="dataCard">
      <ArrowDownwardIcon className="dataCard-arrow-icon" />
      <div className="dataCard-info">{info}</div>
    </div>
  );
};

export default DataCard;
