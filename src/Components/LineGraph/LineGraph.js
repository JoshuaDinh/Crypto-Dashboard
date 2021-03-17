import React, { useEffect } from "react";
import "./linegraph.css";

// Redux ---------------------
import {
  fetchLineGraphData,
  selectLineGraphDay,
} from "../../Actions/lineGraphAction";
import { connect } from "react-redux";

// Chart / Numeral -----------
import numeral from "numeral";
import { Line } from "react-chartjs-2";

const options = {
  legends: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  responsive: true,
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

const LineGraph = ({
  fetchLineGraphData,
  lineGraphData,
  selectedCoin,
  selectLineGraphDay,
  selectedLineGraphDay,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchLineGraphData();
    }, 1300);
    return () => clearTimeout(timer);
  }, [selectedCoin, selectedLineGraphDay]);

  // Format Labels
  const lineGraphLabels = [];
  if (lineGraphData) {
    lineGraphData.map((price) => {
      lineGraphLabels.push(numeral(price).format("0,0.00"));
    });
  }

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(0, "rgba(0,0,0)");
    gradient.addColorStop(0.7, "rgba(0,0,0,0.4");
    gradient.addColorStop(1, "rgba(0,0,0,0.94");

    return {
      labels: lineGraphLabels,
      datasets: [
        {
          label: "Price in USD",
          backgroundColor: gradient,
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 1.5,
          data: lineGraphData,
        },
      ],
    };
  };
  return (
    <div className="lineGraph">
      <div className="lineGraph-day-container">
        <p className="lineGraph-day-title">Select Chart Day Range:</p>
        <div
          className={`lineGraph-day-selector ${
            selectedLineGraphDay === 1 && "lineGraphSelected"
          }`}
          onClick={() => selectLineGraphDay(1)}
        >
          1 Day
        </div>
        <div
          className={`lineGraph-day-selector ${
            selectedLineGraphDay === 7 && "lineGraphSelected"
          }`}
          onClick={() => selectLineGraphDay(7)}
        >
          7 Days
        </div>
        <div
          className={`lineGraph-day-selector ${
            selectedLineGraphDay === 14 && "lineGraphSelected"
          }`}
          onClick={() => selectLineGraphDay(14)}
        >
          14 Days
        </div>
        <div
          className={`lineGraph-day-selector ${
            selectedLineGraphDay === 30 && "lineGraphSelected"
          }`}
          onClick={() => selectLineGraphDay(30)}
        >
          30 Days
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    lineGraphData: state.lineGraphData.lineGraphData,
    selectedLineGraphDay: state.lineGraphData.selectedLineGraphDay,
    selectedCoin: state.searchCoin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLineGraphData: () =>
      setTimeout(() => {
        dispatch(fetchLineGraphData());
      }, 1000),
    selectLineGraphDay: (number) =>
      setTimeout(() => {
        dispatch(selectLineGraphDay(number));
      }, 200),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LineGraph);
