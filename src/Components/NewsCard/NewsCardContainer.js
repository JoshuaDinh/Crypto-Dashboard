import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import "./newsCard.css";
import { connect } from "react-redux";
import { fetchNewsData } from "../../Actions/newsDataAction";
import Title from "../Title/Title";

const NewsCardContainer = ({ fetchNewsData, newsData }) => {
  useEffect(() => {
    // fetchNewsData();
  }, []);

  return (
    <div className="app-newsCard-container">
      <div className="app-newsCard-header-container">
        <Title title="See Whats New" />
      </div>
      {newsData.map((story) => {
        return (
          <a
            className="app-newsCard-link"
            href={story.longURL}
            target="_blank"
            rel="noreferrer"
          >
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
