import React from "react";
import "./Card.css";
import Estimate from "./components/estimate/Estimate";
import AssignedUser from "./components/assignedUser/AssignedUser";

const Card = React.forwardRef(
  (
    {
      header,
      dateCreated,
      estimate,
      assignedUser,
      removeCard,
      openCard,
      draggableProps,
      dragHandleProps,
    },
    ref
  ) => {
    const clickOnRemoveButton = (e) => {
      e.stopPropagation();
      removeCard();
    };

    return (
      <div
        ref={ref}
        className="card-wrap"
        onClick={openCard}
        {...draggableProps}
        {...dragHandleProps}
      >
        <header className="card-header">
          <div className="vertical-line"></div>
          <div className="card-title-with-btn">
            <h3 className="card-title">{header}</h3>
            <button className="delete-card-btn" onClick={clickOnRemoveButton}>
              &times;
            </button>
          </div>
          <div className="date-wrap">
            <div className="card-date">
              {new Date(dateCreated).toLocaleString("ru", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </div>
            <span className="header-date-separator"> | </span>
            <div className="card-estimate">
              <Estimate text={estimate} />
            </div>
          </div>
        </header>
        <div className="card-label-wrap"></div>
        <AssignedUser user={assignedUser} />
      </div>
    );
  }
);

export default Card;
