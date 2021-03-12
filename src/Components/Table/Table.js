import TableRow from "./TableRow";
import React from "react";
import "./table.css";

const Table = () => {
  return (
    <div className="table">
      <div className="table-header">
        <p className="table-column">#</p>
        <p className="table-column">Price</p>
        <p className="table-column"> 24hr High</p>
        <p className="table-column"> 24hr Low</p>
        <p className="table-column"> 24hr Change</p>
        <p className="table-column">Market Cap</p>
        <p className="table-column">Total Volumn</p>
      </div>
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
    </div>
  );
};

export default Table;
