import React from "react";
import "./allTimeData.css";

const AllTimeData = () => {
  return (
    <div className="allTimeData">
      <h4 className="allTimeData-header"> All Time Data</h4>
      <div className="allTime-data-container">
        <div className="allTimeData-item">
          <p>All Time High: 17,400.36</p>
          <p>ATH Change %: 15%</p>
          <p>ATH Date: 5/6/1999</p>
        </div>
        <div className="allTimeData-item">
          <p>All Time Low: 13,500</p>
          <p>ATL Change %: -1,000%</p>
          <p>ATL Date : 4/5/2000</p>
        </div>
      </div>
    </div>
  );
};

export default AllTimeData;
