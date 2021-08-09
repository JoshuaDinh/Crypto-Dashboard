import React from "react";
import "./allTimeData.css";
import { connect } from "react-redux";
import numeral from "numeral";
import DataCard from "../DataCard/DataCard";
import Loading from "../Loading/Loading";

const AllTimeData = ({ selectedCoin }) => {
  // Formats all time date
  const formatDate = (x) => {
    return x.split("T").shift();
  };

  return (
    <div className="allTimeData">
      <DataCard
        title="All Time High"
        highLow="green"
        info={
          selectedCoin.searchedCoin.ath ? (
            ` $${numeral(selectedCoin.searchedCoin?.ath).format("0,00.00")}`
          ) : (
            <Loading />
          )
        }
      />
      <DataCard
        title="All Time Low"
        highLow="red"
        info={
          selectedCoin.searchedCoin.atl ? (
            ` $${numeral(selectedCoin.searchedCoin?.atl).format("0,00.00")}`
          ) : (
            <Loading />
          )
        }
      />
      <DataCard
        title="ATH Change"
        highLow="red"
        info={
          selectedCoin.searchedCoin.ath_change_percentage ? (
            `${numeral(selectedCoin.searchedCoin?.ath_change_percentage).format(
              "0,0"
            )}%`
          ) : (
            <Loading />
          )
        }
      />
      <DataCard
        title="ATL Change"
        highLow="green"
        info={
          selectedCoin.searchedCoin.atl_change_percentage ? (
            `+${numeral(
              selectedCoin.searchedCoin?.atl_change_percentage
            ).format("0,0")}%`
          ) : (
            <Loading />
          )
        }
      />
      <DataCard
        title="ATH Date"
        highLow="green"
        info={
          selectedCoin.searchedCoin?.ath_date ? (
            formatDate(selectedCoin.searchedCoin.ath_date)
          ) : (
            <Loading />
          )
        }
      />
      <DataCard
        title="ATL Date"
        highLow="red"
        info={
          selectedCoin.searchedCoin?.ath_date ? (
            formatDate(selectedCoin.searchedCoin.atl_date)
          ) : (
            <Loading />
          )
        }
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCoin: state.searchedCoin,
  };
};

export default connect(mapStateToProps)(AllTimeData);
