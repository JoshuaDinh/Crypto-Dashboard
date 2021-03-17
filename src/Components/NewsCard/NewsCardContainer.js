import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import { connect } from "react-redux";
import { fetchNewsData } from "../../Actions/newsDataAction";

const NewsCardContainer = ({ fetchNewsData, newsData }) => {
  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <div className="app-newsCard-container">
      <div className="app-newsCard-header-container">
        <h1 className="app-newsCard-header">See Whats New</h1>
        <div className="app-newsCard-header-break"></div>
      </div>
      {newsData.map((story) => {
        return (
          <a className="app-newsCard-link" href={story.longURL} target="_blank">
            <NewsCard key={story.id} title={story.title} image={story.image} />
          </a>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    newsData: state.newsData.newsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewsData: () => dispatch(fetchNewsData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsCardContainer);
