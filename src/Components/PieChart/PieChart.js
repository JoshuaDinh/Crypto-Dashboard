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

const PieChart = ({ pieChartTitle, data }) => {
  return (
    <div className="pieChart">
      <Pie data={data} options={options} />
      <div className="pieChart-title-container">
        <h3>{pieChartTitle}</h3>
      </div>
    </div>
  );
};

export default PieChart;
