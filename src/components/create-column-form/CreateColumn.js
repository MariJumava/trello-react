import React from "react";

const CreateColumn = ({ onClick }) => {
  const addColumn = () => {
    let column = {
      id: 1,
      name: "", //достать из input (почитать про управляемые компоненты)
    };
    onClick(column);
  };

  const closeForm = () => {
    onClick();
  };

  return (
    <div className="column-form">
      <form>
        <input type="text" />
        <button onClick={addColumn}>Add Column</button>
        <button onClick={closeForm}>X</button>
      </form>
    </div>
  );
};

export default CreateColumn;
