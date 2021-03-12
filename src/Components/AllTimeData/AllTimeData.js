import React from "react";
import "./allTimeData.css";
import { connect } from "react-redux";

const AllTimeData = ({ selectedCoin }) => {
  // Formats all time date
  const formatDate = (x) => {
    return x.split("T").shift();
  };

  return (
    <div className="allTimeData">
      <h4 className="allTimeData-header"> All Time Data</h4>
      <div className="allTime-data-container">
        <div className="allTimeData-item">
          <p>
            <span className="ath">All Time High: </span>
            {` $${selectedCoin.searchedCoin?.ath}`}
          </p>
          <p>
            <span className="ath">ATH Change %: </span>
            {selectedCoin.searchedCoin?.ath_change_percentage}
          </p>
          <p>
            <span className="ath">ATH Date : </span>
            {selectedCoin.searchedCoin?.ath_date
              ? formatDate(selectedCoin.searchedCoin.ath_date)
              : null}
          </p>
        </div>
        <div className="allTimeData-item">
          <p>
            <span className="atl">All Time Low: </span>
            {` $${selectedCoin.searchedCoin?.atl}`}
          </p>
          <p>
            <span className="atl"> ATL Change %: </span>
            {selectedCoin.searchedCoin?.atl_change_percentage}
          </p>
          <p>
            <span className="atl"> ATL Date : </span>
            {selectedCoin.searchedCoin?.atl_date
              ? formatDate(selectedCoin.searchedCoin.atl_date)
              : null}
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCoin: state.searchedCoin,
  };
};

export default connect(mapStateToProps)(AllTimeData);
