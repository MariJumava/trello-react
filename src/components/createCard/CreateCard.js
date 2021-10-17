import { uniqueId } from "lodash";
import React, { useState } from "react";
import { User } from "../../types/User";
import "./CreateCard.css";

const CreateCard = ({ columnName, addCard }) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [estimate, setEstimate] = useState("");
  const saveCard = () => {
    let card = {
      id: uniqueId(),
      header: value,
      description: description,
      dateCreated: new Date(),
      assignedUser: new User(1, "Mari", "https://image.flaticon.com/icons/png/512/194/194938.png"),
      estimate: estimate,
    };
    addCard(card);
  };

  const closeCardModal = () => {
    addCard();
  };

  return (
    <div className="create-card-wrap">
      <div className="create-card-description-wrap">
        <div className="create-card-input-with-btn">
          <input
            className="create-card-input"
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <button className="close-card-modal-btn" onClick={closeCardModal}>
            &times;
          </button>
        </div>
        <span className="create-card-column-notation">In column {columnName}</span>
        <h4 className="create-card-title-description">Description:</h4>
        <textarea
          className="create-card-description"
          description={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <h6 className="create-card-estimate">Estimate:</h6>
        <input
          className="create-card-estimate-input"
          type="text"
          estimate={estimate}
          onChange={(event) => setEstimate(event.target.value)}
        />
        <button className="create-card-save-btn" onClick={saveCard}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateCard;
