import React, { useState } from "react";
import { uniqueId } from "lodash";
import "./CreateColumn.css";

const CreateColumn = ({ onClick }) => {
  const [value, setValue] = useState("");
  const addColumn = () => {
    let column = {
      id: uniqueId(),
      name: value,
    };
    onClick(column);
  };

  const closeForm = () => {
    onClick();
  };

  return (
    <div className="column-form">
      <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
      <button className="add-column-btn" onClick={addColumn}>
        Add Column
      </button>
      <button className="close-form-btn" onClick={closeForm}>
        &times;
      </button>
    </div>
  );
};

export default CreateColumn;
