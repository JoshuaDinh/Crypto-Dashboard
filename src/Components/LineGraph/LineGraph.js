import React, { useState, useEffect } from "react";
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
  const [graphView, setGraphView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchLineGraphData();
    }, 1200);
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

    let gradient = ctx.createLinearGradient(0, 0, 0, 240);

    gradient.addColorStop(0.4, "rgba(0,0,0, 0.9");
    gradient.addColorStop(0.6, "rgba(0,0,0,0.8");
    gradient.addColorStop(0.8, "rgba(0,0,0,0.6");
    gradient.addColorStop(1, "rgba(0,0,0,0.3");

    return {
      labels: lineGraphLabels,
      datasets: [
        {
          label: "Price in USD",
          backgroundColor: gradient,
          borderColor: "rgba(0, 0, 0, 0.65)",
          borderWidth: 1.5,
          data: lineGraphData,
        },
      ],
    };
  };
  return (
    <div className={`lineGraph ${graphView && "lineGraph-active"}`}>
      <div className="lineGraph-day-container">
        <div className="lineGraph-day-range">
          <p>Select Chart Day Range:</p>
          <select onChange={(e) => selectLineGraphDay(e.target.value)}>
            <option value="1">1</option>
            <option value="7">7</option>
            <option value="14">14 </option>
            <option selected value="30">
              30
            </option>
          </select>
        </div>
        <p
          className="lineGraph-full-screen"
          onClick={() => setGraphView(!graphView)}
        >
          {!graphView ? "View Full Graph" : "Exit"}
        </p>
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
    fetchLineGraphData: () => dispatch(fetchLineGraphData()),
    selectLineGraphDay: (number) => dispatch(selectLineGraphDay(number)),
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchLineGraphData: () =>
//       setTimeout(() => {
//         dispatch(fetchLineGraphData());
//       }, 1000),
//     selectLineGraphDay: (number) => dispatch(selectLineGraphDay(number)),
//   };
// };

export default connect(mapStateToProps, mapDispatchToProps)(LineGraph);
