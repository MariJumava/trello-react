import React, { useState } from "react";
import "./CreateColumn.css";

const CreateColumn = ({ onClick, onCreate }) => {
  const [value, setValue] = useState("");
  const addColumn = () => {
    let column = {
      id: 1,
      name: "", //достать из input
    };
    onClick(column);
  };

  const closeForm = () => {
    onClick();
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  };

  return (
    <div className="column-form">
      <form onSubmit={submitHandler}>
        <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
        <button className="add-column-btn" onClick={addColumn}>
          Add Column
        </button>
        <button className="close-form-btn" onClick={closeForm}>
          &times;
        </button>
      </form>
    </div>
  );
};

export default CreateColumn;
