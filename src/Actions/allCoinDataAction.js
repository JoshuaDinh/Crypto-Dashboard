import { FETCH_ALL_COIN_DATA } from "../constants";

export const fetchAllCoinData = () => (dispatch) => {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1hr%2024hr%207d%2014day%2030d%201y"
  )
    .then((res) => res.json())
    .then((data) => dispatch({ type: FETCH_ALL_COIN_DATA, payload: data }));
};

// export const requestRobots = () => (dispatch) => {
//   dispatch({ type: REQUEST_ROBOTS_PENDING });
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
//     .catch((error) =>
//       dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
//     );
// };
