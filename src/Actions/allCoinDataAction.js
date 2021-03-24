import { FETCH_ALL_COIN_DATA } from "../constants";

export const fetchAllCoinData = () => (dispatch) => {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1hr%2024hr%207d%2014day%2030d%201y"
  )
    .then((res) => res.json())
    .then((data) => dispatch({ type: FETCH_ALL_COIN_DATA, payload: data }));
};
