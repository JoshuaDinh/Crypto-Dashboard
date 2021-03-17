import React from "react";
import "./newsCard.css";
const NewsCard = ({ title, image }) => {
  return (
    <div className="newsCard">
      <div className="newsCard-overlay">
        <p className="newsCard-overlay-read-more">Read More</p>
      </div>
      <img className="newsCard-image" src={image} alt="" />
      <h4 className="newsCard-title">{title}</h4>
    </div>
  );
};

export default NewsCard;
