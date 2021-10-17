/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./AssignedUser.css";

const AssignedUser = ({ user }) => {
  return (
    <div className="tooltip">
      <img className="card-user" src={user.avatar} />
      <span className="tooltiptext">{user.displayName}</span>
    </div>
  );
};

export default AssignedUser;
