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
  const data = (canvas) => {
    const ctx = canvas.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, 0, 180);

    gradient.addColorStop(0.4, "rgba(0,0,0, 0.9");
    gradient.addColorStop(0.6, "rgba(0,0,0,0.8");
    gradient.addColorStop(0.8, "rgba(0,0,0,0.6");
    gradient.addColorStop(1, "rgba(0,0,0,0.4");

    // gradient.addColorStop(0.7, "rgba(255,255,255, 0.6)");
    // gradient.addColorStop(0.3, "rgba(0,0,0,0.37");
    // gradient.addColorStop(1, "rgba(0,0,0,0.46");

    return {
      labels: ["1hr", "7days", "14days", "30days"],
      datasets: [
        {
          label: "%",
          backgroundColor: gradient,
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 1.2,
          data: barData,
        },
      ],
    };
  };

  return (
    <div className="barChart">
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: "Price Change % / USD",
            fontSize: 10,
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
