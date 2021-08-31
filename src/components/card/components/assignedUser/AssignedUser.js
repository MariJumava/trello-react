/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./AssignedUser.css";

const AssignedUser = ({ user }) => {
  return (
    <div>
      <img className="card-user" src={user.avatar} />
    </div>
  );
};

export default AssignedUser;
