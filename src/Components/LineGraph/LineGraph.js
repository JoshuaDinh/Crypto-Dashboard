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
}) => {
  useEffect(() => {
    fetchLineGraphData();
  }, [selectedCoin]);

  const data = {
    labels: ["1", "7", "14", "30"],
    datasets: [
      {
        label: "Price in USD",
        backgroundColor: "rgba(0, 0, 0, 0.77)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1.5,
        data: lineGraphData,
      },
    ],
  };
  return (
    <div className="lineGraph">
      <div className="lineGraph-day-container">
        <p className="lineGraph-day-title">Select Chart Day Range:</p>
        <div
          className="lineGraph-day-selector"
          onClick={() => selectLineGraphDay(1)}
        >
          1 Day
        </div>
        <div
          className="lineGraph-day-selector"
          onClick={() => selectLineGraphDay(7)}
        >
          7 Days
        </div>
        <div
          className="lineGraph-day-selector"
          onClick={() => selectLineGraphDay(14)}
        >
          14 Days
        </div>
        <div
          className="lineGraph-day-selector"
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
    selectedCoin: state.searchCoin.searchCoin,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchLineGraphData: () => dispatch(fetchLineGraphData()),
    selectLineGraphDay: (number) => dispatch(selectLineGraphDay(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LineGraph);
