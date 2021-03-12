import React from "react";
import "./barchart.css";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";

const BarChart = ({ selectedCoin }) => {
  let barData = [];

  // If a searched coin w/ data is available, create data for bar chart
  if (selectedCoin.searchedCoin !== undefined) {
    barData.push(
      selectedCoin.searchedCoin.price_change_percentage_1h_in_currency,
      selectedCoin.searchedCoin.price_change_percentage_7d_in_currency,
      selectedCoin.searchedCoin.price_change_percentage_14d_in_currency,
      selectedCoin.searchedCoin.price_change_percentage_30d_in_currency
    );
  }
  const data = {
    labels: ["1hr", "7days", "14days", "30days"],
    datasets: [
      {
        label: "%",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1.2,
        data: barData,
      },
    ],
  };

  return (
    <div className="barChart">
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: "Price Change % / USD",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCoin: state.searchedCoin,
  };
};

export default connect(mapStateToProps)(BarChart);
