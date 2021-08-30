import React from "react";
import AssignedUser from "../card/components/assignedUser/AssignedUser";
import "./OpenCard.css";

const OpenCard = ({ card, columnName, closeOpenCard }) => {
  const { cardName, description, labels, assignedUser } = card;

  return (
    <div className="open-card-wrap">
      <div className="open-card-description-wrap">
        <h2 className="open-card-title">{cardName}</h2>
        <button className="close-open-card-btn" onClick={closeOpenCard}>
          &times;
        </button>
        <span className="open-card-column-notation">In column {columnName}</span>
        <h4 className="open-card-title-description">Description:</h4>
        <p className="open-card-description">{description}</p>
        <div className="open-card-labels">{labels}</div>
        <AssignedUser user={assignedUser} />
      </div>
    </div>
  );
};

export default OpenCard;
