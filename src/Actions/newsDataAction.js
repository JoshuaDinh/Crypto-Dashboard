import { FETCH_NEWS_DATA, IS_PENDING } from "../constants";

export const fetchNewsData = () => (dispatch) => {
  fetch(
    "https://bloomberg-market-and-financial-news.p.rapidapi.com/news/list?id=Technology",
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d4c49752bamsh4f4abcd4007a652p1bd04cjsn6661f49f7841",
        "x-rapidapi-host": "bloomberg-market-and-financial-news.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let storiesArray = [];
      data.modules.map((article) => {
        if (article["stories"].length > 1) {
          article["stories"].map((story) => storiesArray.push(story));
        }
      });
      dispatch({ type: FETCH_NEWS_DATA, payload: storiesArray });
      dispatch({ type: IS_PENDING, payload: false });
    });
};
