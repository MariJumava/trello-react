import React from "react";
import ColumnMenu from "../column-menu/ColumnMenu";
import "./ColumnHeader.css";

const ColumnHeader = ({ header, cardCount }) => {
  return (
    <div className="column-header">
      <button className="create-card-btn">+</button>
      <h2 className="column-title">{header}</h2>
      <div className="column-counter">{cardCount}</div>
      <ColumnMenu
        onClick={() => {
          // eslint-disable-next-line no-undef
          props.delete(column);
        }}
      />
    </div>
  );
};

export default ColumnHeader;
