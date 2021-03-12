import React from "react";
import "./linegraph.css";
import numeral from "numeral";
import { Line } from "react-chartjs-2";

const LineGraph = () => {
  const options = {
    legends: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRation: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, lineData) {
          return numeral(tooltipItem.value).format("+0,0");
        },
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: true,
          },
          ticks: {
            callback: function (value, index, values) {
              return numeral(value).format("0a");
            },
          },
        },
      ],
    },
  };
  const data = {
    labels: ["1", "7", "14", "30"],
    datasets: [
      {
        label: "Price in USD",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1.5,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  return (
    <div className="lineGraph">
      <div className="lineGraph-day-container">
        <p className="lineGraph-day-title">Select Chart Day Range:</p>
        <div className="lineGraph-day-selector">1 Day</div>
        <div className="lineGraph-day-selector">7 Days</div>
        <div className="lineGraph-day-selector">14 Days</div>
        <div className="lineGraph-day-selector">30 Days</div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
