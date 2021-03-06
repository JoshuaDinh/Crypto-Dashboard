import React from "react";
import "./table.css";

const TableRow = ({
  rank,
  name,
  image,
  price,
  low,
  high,
  priceChange,
  totalSupply,
  totalVolume,
  marketCap,
  fetchCoinData,
  setCoin,
}) => {
  const setCoinData = () => {
    setCoin();
    fetchCoinData();
  };
  return (
    <tr className="tableRow" onClick={setCoinData}>
      <td className="table-column">{rank}</td>
      <td className="table-column">{name}</td>
      <td className="table-column ">
        <img className="coinSymbol" src={image} alt="" />
      </td>
      <td className="table-column">${price}</td>
      <td className="table-column dailyHigh ">${low}</td>
      <td className="table-column dailyLow ">${high}</td>
      <td
        className="table-column"
        style={{ color: priceChange >= 0 ? "green" : "red" }}
      >
        {priceChange}%
      </td>
      <td className="table-column">{totalSupply}</td>
      <td className="table-column">{totalVolume}</td>
      <td className="table-column">{marketCap}</td>
    </tr>
  );
};

export default TableRow;
