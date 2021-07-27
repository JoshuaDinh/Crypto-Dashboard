import { FETCH_LINE_GRAPH_DATA, SELECT_LINE_GRAPH_DAY } from "../constants";

export const fetchLineGraphData = () => async (dispatch, getState) => {
  const selectedCoin = getState().searchCoin.searchCoin;
  const selectedDay = getState().lineGraphData.selectedLineGraphDay;
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${selectedCoin}/market_chart?vs_currency=usd&days=${selectedDay}&interval=daily
    `);

    // ERROR HANDLING -
    if (selectedCoin && !response.ok) {
      const message = `Please Check The Spelling Of Your Coin/Token: ${response.status}`;
      throw new Error(message);
    }

    const data = await response.json();
    // Returned data are nested arrays / loop through and retrieve price in USD
    let graphDetails = [];
    if (data.prices) {
      data.prices.map((priceData) => graphDetails.push(priceData[1]));
      await dispatch({ type: FETCH_LINE_GRAPH_DATA, payload: graphDetails });
    }
  } catch (err) {
    alert(err);
  }
};

export const selectLineGraphDay = (number) => {
  return { type: SELECT_LINE_GRAPH_DAY, payload: number };
};
