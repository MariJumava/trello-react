import React from "react";
import "./ColumnButton.css";

const ColumnButton = ({ onClick }) => {
  return (
    <div className="create-column-btn" onClick={onClick}>
      Add Column +
    </div>
  );
};

export default ColumnButton;
