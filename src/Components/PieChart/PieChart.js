import React from "react";
import { Pie } from "react-chartjs-2";
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

  const data = {
    maintainAspectRatio: false,
    responsive: true,
    labels: pieChartLabels,
    datasets: [
      {
        data: pieChartData,
        backgroundColor: [
          "rgba(0, 0, 0, 0.85)",
          "rgba(0, 0, 0, 0.7)",
          "rgba(0, 0, 0, 0.6)",
          "rgba(0, 0, 0, 0.5)",
          "rgba(0, 0, 0, 0.4)",
        ],
        hoverBackgroundColor: " rgba(255, 255, 255, 0.9)",
      },
    ],
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
