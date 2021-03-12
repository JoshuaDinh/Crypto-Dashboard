import { SEARCH_COIN } from "../constants";
import { FETCH_SEARCHED_COIN } from "../constants";

export const searchCoin = (text) => {
  return { type: SEARCH_COIN, payload: text };
};

export const fetchSearchedCoin = () => async (dispatch) => {
  await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1hr%2C%2024%2C%207d%2C%2014d%2C%2030d%2C%201y`
  )
    .then((response) => response.json())
    .then((data) => dispatch({ type: FETCH_SEARCHED_COIN, payload: data }));
};
