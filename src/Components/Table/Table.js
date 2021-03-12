import TableRow from "./TableRow";
import React from "react";
import "./table.css";
import { connect } from "react-redux";

const Table = ({ allCoinData }) => {
  console.log(allCoinData);
  return (
    <table className="table">
      <tr className="table-header">
        <th className="table-column">#</th>
        <th className="table-column">Name</th>
        <th className="table-column">Symbol</th>
        <th className="table-column">Price</th>
        <th className="table-column"> 24hr High</th>
        <th className="table-column"> 24hr Low</th>
        <th className="table-column"> 24hr Change %</th>
        <th className="table-column">Total Supply</th>
        <th className="table-column">Total Volume</th>
      </tr>
      {allCoinData.map((coin) => {
        return (
          <TableRow
            rank={coin.market_cap_rank}
            name={coin.name}
            image={coin.image}
            price={coin.current_price}
            low={coin.low_24h}
            high={coin.high_24h}
            priceChange={coin.price_change_24h}
            totalSupply={coin.total_supply}
            totalVolumn={coin.total_volume}
          />
        );
      })}
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    allCoinData: state.allCoinData,
  };
};

export default connect(mapStateToProps)(Table);
