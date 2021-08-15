import React from "react";
import ColumnMenu from "../column-menu/ColumnMenu";

const ColumnHeader = ({ header, cardCount }) => {
  return (
    <div className="column-header">
      <button className="create-card-btn">+</button>
      <h2 className="column-title">{header}</h2>
      <div className="column-counter">{cardCount}</div>
      <ColumnMenu />
    </div>
  );
};

export default ColumnHeader;
