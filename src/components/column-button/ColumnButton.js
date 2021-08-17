import React from "react";
import "./ColumnButton.css";

const ColumnButton = ({ onClick }) => {
  return (
    <div className="create-column-btn" onClick={onClick}>
      +
    </div>
  );
};

export default ColumnButton;
