import { FETCH_LINE_GRAPH_DATA, SELECT_LINE_GRAPH_DAY } from "../constants";
import numeral from "numeral";

export const fetchLineGraphData = () => (dispatch, getState) => {
  const selectedCoin = getState().searchCoin.searchCoin;
  const selectedDay = getState().lineGraphData.selectedLineGraphDay;
  fetch(`https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=${selectedDay}&interval=daily
     `)
    .then((response) => response.json())
    .then((data) => {
      // Returned data are nested arrays / loop through and retrieve price in USD
      let graphDetails = [];
      if (data.prices) {
        data.prices.map((priceData) => graphDetails.push(priceData[1]));
        dispatch({ type: FETCH_LINE_GRAPH_DATA, payload: graphDetails });
      }
    });
};

export const selectLineGraphDay = (number) => {
  return { type: SELECT_LINE_GRAPH_DAY, payload: number };
};
