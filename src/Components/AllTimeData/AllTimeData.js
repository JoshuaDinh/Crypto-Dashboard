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
          selectedCoin.searchedCoin ? (
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
          selectedCoin.searchedCoin ? (
            ` $${numeral(selectedCoin.searchedCoin?.atl).format("0,00.00")}`
          ) : (
            <Loading />
          )
        }
      />
      <DataCard
        title="ATH Change"
        highLow="green"
        info={
          selectedCoin.searchedCoin ? (
            ` % ${numeral(
              selectedCoin.searchedCoin?.ath_change_percentage
            ).format("0,0")}`
          ) : (
            <Loading />
          )
        }
      />
      <DataCard
        title="ATL Change"
        highLow="red"
        info={
          selectedCoin.searchedCoin ? (
            ` % ${numeral(
              selectedCoin.searchedCoin?.atl_change_percentage
            ).format("0,0")}`
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

// <div className="allTimeData">
// <h4 className="allTimeData-header"> All Time Data</h4>
// <div className="allTime-data-container">
//   <div className="allTimeData-item">
//     <p>
//       <span className="ath">All Time High: </span>
{
  /* Ternary determines what to display if no coin is selected/searched */
}
//       {selectedCoin.searchedCoin ? (
//         ` $${numeral(selectedCoin.searchedCoin?.ath).format("0,00.00")}`
//       ) : (
//         <span>...</span>
//       )}
//     </p>
//     <p>
//       <span className="ath">ATH Change: </span>

//
//     </p>
//     <p>
//       <span className="ath">ATH Date : </span>
//
//     </p>
//   </div>
//   <div className="allTimeData-item">
//     <p>
//       <span className="atl">All Time Low: </span>
//       {selectedCoin.searchedCoin ? (
//         ` $${numeral(selectedCoin.searchedCoin?.atl).format("0,00.00")}`
//       ) : (
//         <span>...</span>
//       )}
//     </p>
//     <p>
//       <span className="atl"> ATL Change: </span>
//       {selectedCoin.searchedCoin ? (
//         ` % ${numeral(
//           selectedCoin.searchedCoin?.atl_change_percentage
//         ).format("0,0")}`
//       ) : (
//         <span>...</span>
//       )}
//     </p>
//     <p>
//       <span className="atl"> ATL Date : </span>
//       {selectedCoin.searchedCoin?.atl_date
//         ? formatDate(selectedCoin.searchedCoin.atl_date)
//         : "..."}
//     </p>
//   </div>
// </div>
// </div>
