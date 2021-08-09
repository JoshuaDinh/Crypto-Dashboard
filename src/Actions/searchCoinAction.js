import { SEARCH_COIN, FETCH_SEARCHED_COIN } from "../constants";

export const searchCoin = (text) => {
  return { type: SEARCH_COIN, payload: text };
};

export const fetchSearchedCoin = () => async (dispatch, getState) => {
  const selectedCoin = getState().searchCoin.searchCoin;
  try {
    await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${selectedCoin}&order=market_cap_desc&per_page=1&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C7d%2C14d%2C30d%2C1y
`
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: FETCH_SEARCHED_COIN, payload: data[0] })
      );
  } catch (err) {
    alert(err);
  }
};
