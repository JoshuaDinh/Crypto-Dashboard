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
const data = {
  maintainAspectRatio: false,
  responsive: true,
  labels: ["a", "b", "c", "d", "e"],
  datasets: [
    {
      data: [300, 50, 100, 50, 70],
      backgroundColor: [
        "rgba(0, 0, 0, 0.8)",
        "rgba(0, 0, 0, 0.7)",
        "rgba(0, 0, 0, 0.5)",
        "rgba(0, 0, 0, 0.3)",
        "rgba(0, 0, 0, 0.2)",
      ],
      hoverBackgroundColor: "black",
    },
  ],
};

const PieChart = () => {
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
