import React from "react";
import ColumnMenu from "../column-menu/ColumnMenu";
import "./ColumnHeader.css";

const ColumnHeader = ({ header, cardCount, removeColumn, openCreateCard }) => {
  return (
    <div className="column-header">
      <button className="create-card-btn" onClick={openCreateCard}>
        +
      </button>
      <h2 className="column-title">{header}</h2>
      <div className="column-counter">{cardCount}</div>
      <ColumnMenu onClick={removeColumn} />
    </div>
  );
};

export default ColumnHeader;
