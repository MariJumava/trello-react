import { uniqueId } from "lodash";
import React, { useState } from "react";

const CreateCard = ({ columnName, onClick, addCard }) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const saveCard = () => {
    let card = {
      id: uniqueId(),
      name: value,
      description: description,
    };
    onClick(card);
  };

  const closeCardModal = () => {
    onClick();
  };
  //создать объект кард и заполнить его значениями из инпутов
  //вызвать функции из App (придет в props)

  return (
    <div className="create-card-wrap">
      <div className="create-card-description-wrap">
        <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
        <span className="create-card-column-notation">In column {columnName}</span>
        <h4 className="create-card-title-description">Description</h4>
        <textarea
          className="create-card-description"
          description={description}
          onChange={(event) => setDescription(event.target.description)}
        />
        <button className="create-card-save-btn" onChange={addCard} onClick={saveCard}>
          Save
        </button>
      </div>
      <button className="close-card-modal-btn" onClick={closeCardModal}>
        &times;
      </button>
    </div>
  );
};

export default CreateCard;
