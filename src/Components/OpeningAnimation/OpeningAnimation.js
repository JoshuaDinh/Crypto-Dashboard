import React from "react";
import "./openingAnimation.css";

const OpeningAnimation = () => {
  let divArr = [];
  const renderDiv = () => {
    for (let i = 0; i < 10; i++) {
      divArr.push(i);
    }
  };
  return (
    <div className="opening-container">
      <div className="opening">
        <div className="opening-bars-container">
          <div className="opening-bars"></div>
          <div className="opening-bars"></div>
          <div className="opening-bars"></div>
          <div className="opening-bars"></div>
          <div className="opening-bars"></div>
          <div className="opening-bars"></div>
          <div className="opening-bars"></div>
        </div>
        <h1 className="opening-loading">Loading</h1>
      </div>
    </div>
  );
};

export default OpeningAnimation;
