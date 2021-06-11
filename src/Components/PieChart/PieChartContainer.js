import React from "react";
import PieChart from "./PieChart";
import { connect } from "react-redux";
import "./pieChart.css";
import Title from "../Title/Title";

const PieChartContainer = ({ allCoinData }) => {
  // Remove Top 5 By Market Cap From List
  let marketCapData = [];
  let marketCapLabels = [];

  const sortMarketCap = allCoinData.slice(0, 5).map((item) => {
    marketCapData.push(item.market_cap);
    marketCapLabels.push(item.name);
  });

  // Sorts Data From Highest To Lowest By Volume
  let volumeData = [...allCoinData];
  let totalVolumeData = [];
  let totalVolumeLabels = [];

  const sortVolume = allCoinData.map((item) => {
    volumeData.sort(function (a, b) {
      return b.total_volume - a.total_volume;
    });
  });

  const createVolumeArr = volumeData.slice(0, 5).map((item) => {
    totalVolumeData.push(item.total_volume);
    totalVolumeLabels.push(item.name);
  });

  // Market Cap Data & Configurations
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
            "rgba(0, 0, 0)",
            "rgba(0, 0, 0, 0.9)",
            "rgba(0, 0, 0, 0.7)",
            "rgba(0, 0, 0, 0.5)",
            "rgba(0, 0, 0, 0.3)",
          ],
          hoverBackgroundColor: gradient,
        },
      ],
    };
  };

  //Total Volume Data & Configurations
  const totalVolume = (canvas) => {
    const ctx = canvas.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(0.7, "rgba(255,255,255, 0.6)");
    gradient.addColorStop(0.3, "rgba(0,0,0,0.37");
    gradient.addColorStop(1, "rgba(0,0,0,0.46");
    return {
      maintainAspectRatio: false,
      responsive: true,
      labels: totalVolumeLabels,
      datasets: [
        {
          data: totalVolumeData,
          backgroundColor: [
            "rgba(0, 0, 0)",
            "rgba(0, 0, 0, 0.9)",
            "rgba(0, 0, 0, 0.7)",
            "rgba(0, 0, 0, 0.5)",
            "rgba(0, 0, 0, 0.3)",
          ],
          hoverBackgroundColor: gradient,
        },
      ],
    };
  };

  // Sorts Data From Highest To Lowest By Price
  let priceData = [...allCoinData];
  let currentPrices = [];
  let priceLabels = [];

  const sortPrice = allCoinData.map((item) => {
    priceData.sort(function (a, b) {
      return b.current_price - a.current_price;
    });
  });

  const createPriceArr = priceData.slice(0, 5).map((item) => {
    currentPrices.push(item.current_price);
    priceLabels.push(item.name);
  });
  //Current Price Data & Configurations
  const currentPrice = (canvas) => {
    const ctx = canvas.getContext("2d");

    let gradient = ctx.createLinearGradient(0, 0, 0, 240);
    gradient.addColorStop(0.7, "rgba(255,255,255, 0.6)");
    gradient.addColorStop(0.3, "rgba(0,0,0,0.37");
    gradient.addColorStop(1, "rgba(0,0,0,0.46");
    return {
      maintainAspectRatio: false,
      responsive: true,
      labels: priceLabels,
      datasets: [
        {
          data: currentPrices,
          backgroundColor: [
            "rgba(0, 0, 0)",
            "rgba(0, 0, 0, 0.9)",
            "rgba(0, 0, 0, 0.7)",
            "rgba(0, 0, 0, 0.5)",
            "rgba(0, 0, 0, 0.3)",
          ],
          hoverBackgroundColor: gradient,
        },
      ],
    };
  };
  // Sorts Data From Highest To Lowest By Circulating Supply
  let priceChange = [...allCoinData];
  let priceChanges = [];
  let priceChangeLabels = [];

  const sortSupply = allCoinData.map((item) => {
    priceChange.sort(function (a, b) {
      return b.current_price - a.current_price;
    });
  });

  const createPricechangeArr = priceChange.slice(0, 5).map((item) => {
    priceChanges.push(item.price_change_percentage_24);
    priceChangeLabels.push(item.name);
  });
  return (
    <>
      {/* <Title title="Top 5 On The Charts" /> */}
      <div className="pieChartContainer">
        <PieChart pieChartTitle="Price" data={currentPrice} />
        <PieChart pieChartTitle="Market Cap" data={marketCap} />
        <PieChart pieChartTitle="Volume" data={totalVolume} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    allCoinData: state.allCoinData,
  };
};

export default connect(mapStateToProps)(PieChartContainer);
