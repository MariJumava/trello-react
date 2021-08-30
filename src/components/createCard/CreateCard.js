import { uniqueId } from "lodash";
import React, { useState } from "react";
import { User } from "../../types/User";
import "./CreateCard.css";

const CreateCard = ({ columnName, addCard }) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const saveCard = () => {
    let card = {
      id: uniqueId(),
      header: value,
      description: description,
      dateCreated: new Date(),
      labels: [],
      assignedUser: new User(1, "Mari", "https://image.flaticon.com/icons/png/512/194/194938.png"),
      estimate: "5h",
    };
    addCard(card);
  };

  const closeCardModal = () => {
    addCard();
  };

  return (
    <div className="create-card-wrap">
      <div className="create-card-description-wrap">
        <input
          className="create-card-input"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="close-card-modal-btn" onClick={closeCardModal}>
          &times;
        </button>
        <span className="create-card-column-notation">In column {columnName}</span>
        <h4 className="create-card-title-description">Description:</h4>
        <textarea
          className="create-card-description"
          description={description}
          onChange={(event) => setDescription(event.target.description)}
        />
        <button className="create-card-save-btn" onClick={saveCard}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateCard;
