import React from "react";
import PieChart from "./PieChart";
import numeral from "numeral";
import { connect } from "react-redux";
import "./pieChart.css";

const PieChartContainer = ({ allCoinData }) => {
  let marketCapData = [];
  let marketCapLabels = [];

  allCoinData.slice(0, 5).map((item) => {
    marketCapData.push(item.market_cap);
    marketCapLabels.push(item.name);
  });

  const marketCap = (canvas) => {
    const ctx = canvas.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(0.7, "rgba(255,255,255, 0.6)");
    gradient.addColorStop(0.3, "rgba(0,0,0,0.37");
    gradient.addColorStop(1, "rgba(0,0,0,0.46");
    return {
      maintainAspectRatio: false,
      responsive: true,
      labels: marketCapLabels,
      datasets: [
        {
          data: marketCapData,
          backgroundColor: [
            "rgba(0, 0, 0, 0.8)",
            "rgba(0, 0, 0, 0.7)",
            "rgba(0, 0, 0, 0.6)",
            "rgba(0, 0, 0, 0.5)",
            "rgba(0, 0, 0, 0.4)",
          ],
          hoverBackgroundColor: gradient,
        },
      ],
    };
  };

  return (
    <div className="pieChartContainer">
      <PieChart pieChartTitle="Market Cap" data={marketCap} />
      <PieChart pieChartTitle="Volume" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allCoinData: state.allCoinData,
  };
};

export default connect(mapStateToProps)(PieChartContainer);
