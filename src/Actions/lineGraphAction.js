import { FETCH_LINE_GRAPH_DATA } from "../constants";

export const fetchLineGraphData = () => (dispatch, getState) => {
  const selectedCoin = getState().searchCoin.searchCoin;
  fetch(`https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=14&interval=daily
    `)
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCH_LINE_GRAPH_DATA, payload: data }));
};
