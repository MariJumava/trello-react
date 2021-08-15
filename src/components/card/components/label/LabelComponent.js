import React from "react";
import "./LabelComponent.css";

const LabelComponent = ({ label }) => {
  return (
    <div
      className="card-labels"
      key={label.id}
      style={{ backgroundColor: `rgb(${label.color}, 0.1)` }}
    >
      <p className="card-label-text" style={{ color: `rgb(${label.color}, 1)` }}>
        {label.text}
      </p>
    </div>
  );
};

export default LabelComponent;
