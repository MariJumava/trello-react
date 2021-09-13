import React, { useState } from "react";
import AssignedUser from "../card/components/assignedUser/AssignedUser";
import "./OpenCard.css";

const OpenCard = ({ card, columnName, closeOpenCard, saveEditableCard }) => {
  const { header, description, estimate, assignedUser } = card;
  const [isEditView, setIsEditView] = useState(false);
  const [editableHeader, setEditableHeader] = useState(header);
  const [editableDescription, setEditableDescription] = useState(description);
  const [editableEstimate, setEditableEstimate] = useState(estimate);
  const showEditView = () => {
    setIsEditView(true);
  };

  const saveChanges = () => {
    setIsEditView(false);
    saveEditableCard(editableHeader, editableDescription, editableEstimate);
  };

  return (
    <div className="open-card-wrap">
      <div className="open-card-description-wrap">
        <div className="open-card-header">
          {isEditView ? (
            <input
              className="open-card-editable-input"
              type="text"
              value={editableHeader}
              onChange={(event) => setEditableHeader(event.target.value)}
            />
          ) : (
            <h2 className="open-card-title">{editableHeader}</h2>
          )}
          <button className="close-open-card-btn" onClick={closeOpenCard}>
            &times;
          </button>
        </div>
        <span className="open-card-column-notation">In column {columnName}</span>
        <h4 className="open-card-title-description">Description:</h4>
        {isEditView ? (
          <textarea
            className="open-card-editable-description"
            value={editableDescription}
            onChange={(event) => setEditableDescription(event.target.value)}
          />
        ) : (
          <p className="open-card-description">{editableDescription}</p>
        )}
        <h6 className="open-card-title-estimate">
          Estimate:
          {isEditView ? (
            <input
              className="open-card-editable-input"
              type="text"
              value={editableEstimate}
              onChange={(event) => setEditableEstimate(event.target.value)}
            />
          ) : (
            <span className="open-card-estimate">{editableEstimate}</span>
          )}
        </h6>
        {isEditView ? (
          <button className="open-card-save" onClick={saveChanges}>
            Save
          </button>
        ) : (
          <button className="open-card-edit" onClick={showEditView}>
            Edit
          </button>
        )}
        <AssignedUser user={assignedUser} />
      </div>
    </div>
  );
};

export default OpenCard;
