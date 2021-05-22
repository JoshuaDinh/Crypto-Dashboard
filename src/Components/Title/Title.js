import React from "react";
import "./title.css";

const Title = ({ title }) => {
  return (
    <div className="title-container">
      <div className="title">
        <p>{title}</p> <div className="title-break"></div>
      </div>
    </div>
  );
};

export default Title;
