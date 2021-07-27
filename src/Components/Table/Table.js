import React, { useEffect } from "react";
import TableRow from "./TableRow";
import "./table.css";
// redux ----
import { fetchAllCoinData } from "../../Actions/allCoinDataAction";
import { searchCoin } from "../../Actions/searchCoinAction";
import { connect } from "react-redux";
// Numeral -----
import numeral from "numeral";

const Table = ({ allCoinData, fetchAllCoinData, setCoin }) => {
  useEffect(() => {
    fetchAllCoinData();
  }, [fetchAllCoinData]);

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th className="table-column">#</th>
            <th className="table-column">Name</th>
            <th className="table-column">Symbol</th>
            <th className="table-column">Price</th>
            <th className="table-column">High</th>
            <th className="table-column">Low</th>
            <th className="table-column">%</th>
            <th className="table-column">Supply</th>
            <th className="table-column">Volume</th>
            <th className="table-column">Market Cap</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {allCoinData.slice(0, 100).map((coin) => {
            return (
              <TableRow
                setCoin={() => setCoin(coin.id)}
                key={coin.id}
                rank={coin.market_cap_rank}
                name={coin.name}
                image={coin.image}
                price={numeral(coin.current_price).format("0,0")}
                low={numeral(coin.low_24h).format("0,0")}
                high={numeral(coin.high_24h).format("0,0")}
                priceChange={numeral(coin.price_change_percentage_24h).format(
                  "0,00.00"
                )}
                totalSupply={numeral(coin.total_supply).format("0,0a")}
                totalVolume={numeral(coin.total_volume).format("0,0a")}
                marketCap={numeral(coin.market_cap).format("0,0a")}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allCoinData: state.allCoinData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllCoinData: () => dispatch(fetchAllCoinData()),
    setCoin: (text) => dispatch(searchCoin(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
