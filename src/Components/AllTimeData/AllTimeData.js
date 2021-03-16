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
            {/* Ternary determines what to display if no coin is selected/searched */}
            {selectedCoin.searchedCoin ? (
              ` $${selectedCoin.searchedCoin?.ath}`
            ) : (
              <div>...</div>
            )}
          </p>
          <p>
            <span className="ath">ATH Change %: </span>

            {selectedCoin.searchedCoin ? (
              ` $${selectedCoin.searchedCoin?.ath_change_percentage}`
            ) : (
              <div>...</div>
            )}
          </p>
          <p>
            <span className="ath">ATH Date : </span>
            {selectedCoin.searchedCoin?.ath_date
              ? formatDate(selectedCoin.searchedCoin.ath_date)
              : "..."}
          </p>
        </div>
        <div className="allTimeData-item">
          <p>
            <span className="atl">All Time Low: </span>
            {selectedCoin.searchedCoin ? (
              ` $${selectedCoin.searchedCoin?.atl}`
            ) : (
              <div>...</div>
            )}
          </p>
          <p>
            <span className="atl"> ATL Change %: </span>
            {selectedCoin.searchedCoin ? (
              ` $${selectedCoin.searchedCoin?.atl_change_percentage}`
            ) : (
              <div>...</div>
            )}
          </p>
          <p>
            <span className="atl"> ATL Date : </span>
            {selectedCoin.searchedCoin?.atl_date
              ? formatDate(selectedCoin.searchedCoin.atl_date)
              : "..."}
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
