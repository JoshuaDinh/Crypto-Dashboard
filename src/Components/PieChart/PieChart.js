import React from "react";
import { Pie } from "react-chartjs-2";
import numeral from "numeral";
import { connect } from "react-redux";
import "./pieChart.css";

const options = {
  legends: {
    display: true,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  responsive: true,
  maintainAspectRation: false,
};

const PieChart = ({ allCoinData }) => {
  let pieChartData = [];
  let pieChartLabels = [];

  allCoinData.slice(0, 5).map((item) => {
    pieChartData.push(item.market_cap);
    pieChartLabels.push(item.name);
  });

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(0.7, "rgba(255,255,255, 0.6)");
    gradient.addColorStop(0.3, "rgba(0,0,0,0.37");
    gradient.addColorStop(1, "rgba(0,0,0,0.46");
    return {
      maintainAspectRatio: false,
      responsive: true,
      labels: pieChartLabels,
      datasets: [
        {
          data: pieChartData,
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
    <div className="pieChart">
      <Pie data={data} options={options} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allCoinData: state.allCoinData,
  };
};

export default connect(mapStateToProps)(PieChart);
